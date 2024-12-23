function fetchWithTimeout(url, timeout = 1000) {
    const controller = new AbortController();
    const signal = controller.signal;
  
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeout);
  
    return fetch(url, { signal })
      .then(response => {
        clearTimeout(timeoutId); 
        return response.json();
      })
      .catch(error => {
        clearTimeout(timeoutId); 
        throw error; 
      });
  }
  
  function checkNetworkStatus() {
    const networkStatusElement = document.getElementById('network-status');
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
    if (!connection) {
      networkStatusElement.textContent = 'Невозможно определить состояние сети.';
      return;
    }
  
    const type = connection.effectiveType;
    switch (type) {
      case 'slow-2g':
      case '2g':
      case '3g':
        networkStatusElement.textContent = 'Неполадки с сетью';
        break;
      case '4g':
        networkStatusElement.textContent = ''; 
        break;
      default:
        networkStatusElement.textContent = ''; 
        break;
    }
  
    if (type === '3g') {
      networkStatusElement.textContent = 'Медленное соединение';
    }
  }
  
  function handleRequest() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'; 
  
    document.getElementById('network-status').textContent = '';
  
    fetchWithTimeout(url, 1000)
      .then(data => {
        console.log(data);
        alert('Запрос выполнен успешно!');
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          alert('Запрос прерван из-за таймаута');
        } else {
          alert('Ошибка сети или другого рода');
        }
      });
  }
  
  checkNetworkStatus();
  if (navigator.connection) {
    navigator.connection.addEventListener('change', checkNetworkStatus);
  }
  
  document.getElementById('startRequestBtn').addEventListener('click', handleRequest);
  