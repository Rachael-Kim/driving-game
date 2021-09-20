var carimg = document.querySelector('.car');
var isrunning = false;
var startcar;
var y = 0;
var x = 0;

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 37) {
    carimg.setAttribute('class', 'car left');
  }
  else if (event.keyCode === 38) {
    carimg.setAttribute('class', 'car top');
  }
  else if (event.keyCode === 39) {
    carimg.setAttribute('class', 'car right');
  }
  else if (event.keyCode === 40) {
    carimg.setAttribute('class', 'car bottom');
  }
  else if (event.keyCode === 32) {
    if (isrunning === true) {
      clearInterval(startcar);
      isrunning = false;
    } else {
      startcar = setInterval(function () {
        return moveCar(carimg.classList[1])
      }, 16);
      isrunning = true;
    }
  }
});

function moveCar(direction) {
  var distance = 16;
  if (direction === 'left') {
    x -= distance;
    carimg.style.left = `${x}px`
  }
  if (direction === 'top') {
    y -= distance
    carimg.style.top = `${y}px`
  }
  if (direction === 'right') {
    x += distance
    carimg.style.left = `${x}px`
  }
  if (direction === 'bottom') {
    y += distance
    carimg.style.top = `${y}px`
  }
}

//
