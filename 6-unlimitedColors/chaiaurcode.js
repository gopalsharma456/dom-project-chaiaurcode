let randomColor = function () {
    let hex = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  
  const startBgColorBtn = function () {
    function bgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  
    if (!intervalId) {
      intervalId = setInterval(bgColor, 1000);
      console.log(randomColor());
    }
  };
  
  const stopBgColorBtn = function () {
    clearInterval(intervalId);
    intervalId = null;
    // console.log(intervalId);
  };
  document.getElementById('start').addEventListener('click', startBgColorBtn);
  
  document.getElementById('stop').addEventListener('click', stopBgColorBtn);
  