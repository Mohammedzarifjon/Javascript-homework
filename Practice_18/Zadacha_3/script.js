function fetchImages(type) {
    return new Promise((resolve) => {
      let images = [];
      
      if (type === 'cat') {
        images = [
          'https://placekitten.com/200/200',
          'https://placekitten.com/250/250',
          'https://placekitten.com/300/300'
        ];
      } else if (type === 'dog') {
        images = [
          'https://placedog.net/200/200',
          'https://placedog.net/250/250',
          'https://placedog.net/300/300'
        ];
      }
  
      const delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
      
      setTimeout(() => {
        resolve(images);
      }, delay);
    });
  }
  
  function showProgressBar(progressBarId, timeDisplayId, time, imagesContainerId, type) {
    const progressBar = document.getElementById(progressBarId);
    const timeDisplay = document.getElementById(timeDisplayId);
    const imagesContainer = document.getElementById(imagesContainerId);
    
    let secondsPassed = 0;
  
    function displayImages(images) {
      imagesContainer.innerHTML = '';
      images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        imagesContainer.appendChild(img);
      });
    }
  
    const interval = setInterval(() => {
      secondsPassed++;
      const width = (secondsPassed / time) * 100;
  
      progressBar.style.width = `${width}%`;
  
      timeDisplay.textContent = secondsPassed;
  
      if (secondsPassed >= time) {
        clearInterval(interval);
        
        fetchImages(type).then(images => {
          displayImages(images);
        });
      }
    }, 1000);
  }
  
  function start() {
    const timeForCat = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000; 
    const timeForDog = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
  
    showProgressBar('progress-bar-1', 'time-display-1', timeForCat / 1000, 'cat-images', 'cat');
  
    showProgressBar('progress-bar-2', 'time-display-2', timeForDog / 1000, 'dog-images', 'dog');
  }
  
  window.onload = start;
  