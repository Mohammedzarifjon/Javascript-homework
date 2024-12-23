function fetchCatImages() {
    return new Promise((resolve) => {
      const catImages = [
        'https://cdn2.thecatapi.com/images/a2r.jpg',  
        'https://cdn2.thecatapi.com/images/b9g.jpg',  
        'https://cdn2.thecatapi.com/images/0ie.jpg' 
      ];
  
      const delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
  
      setTimeout(() => {
        resolve(catImages);
      }, delay);
    });
  }
  
  function fetchDogImages() {
    return new Promise((resolve) => {
      const dogImages = [
        'https://placedog.net/300/300', 
        'https://placedog.net/400/400', 
        'https://placedog.net/500/500'   
      ];
  
      const delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
  
      setTimeout(() => {
        resolve(dogImages);
      }, delay);
    });
  }
  
  function displayImages(imageUrls, containerId) {
    const container = document.getElementById(containerId);
    imageUrls.forEach(url => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = "Изображение";
      container.appendChild(img);
    });
  }
  
  window.onload = () => {
    fetchCatImages().then(catImages => {
      displayImages(catImages, 'cat-images');
    });
  
    fetchDogImages().then(dogImages => {
      displayImages(dogImages, 'dog-images');
    });
  };
  