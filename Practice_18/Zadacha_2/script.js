function startProgress(time) {
    const progressBar = document.getElementById("progress-bar");
    const timeDisplay = document.getElementById("time-display");
  
    let secondsPassed = 0;
  
    if (time > 7) time = 7;
  
    const interval = setInterval(() => {
      secondsPassed++;
  
      timeDisplay.textContent = secondsPassed;
  
      const width = (secondsPassed / time) * 100;
  
      progressBar.style.width = `${width}%`;
  
      if (secondsPassed >= time) {
        clearInterval(interval);
      }
    }, 1000);
  }
  
  window.onload = function() {
    startProgress(7);
  };
  