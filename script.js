const runner = document.querySelector('.runner');
const indicator = document.querySelector('.bar');
const scale = document.querySelector('.scale');
const popup = document.createElement('div');
popup.className = 'popup';
document.body.append(popup);


runner.onmousedown = (e) => {
  let stepMove = e.clientX - runner.getBoundingClientRect().left;
  document.addEventListener('mousemove', moveRunner);
  document.addEventListener('mouseup', removeEvents);

function moveRunner(e) {
  let newPosition = e.clientX - scale.getBoundingClientRect().left - stepMove;
  if (newPosition < -9) {
    newPosition = -9;
  }
  if (newPosition > scale.offsetWidth - runner.offsetWidth + 9) {
    newPosition = scale.offsetWidth - runner.offsetWidth + 9;
  }
  runner.style.left = `${newPosition}px`;
  indicator.style.width = `${newPosition+9}px`
  popup.innerText = getValue();
  popup.style.top = e.y +'px';
  popup.style.left = e.x +'px';
}

  function removeEvents() {
    document.removeEventListener('mousemove', moveRunner);
    document.removeEventListener('mouseup', removeEvents);
  }
}

function getValue(){
  return Math.round((+window.getComputedStyle(indicator).width.slice(0, window.getComputedStyle(indicator).width.length - 2))/ 3);
}

runner.addEventListener('mouseenter', function (e) {
  popup.style.opacity = '1';
  popup.innerText = getValue();
  popup.style.top = e.y +'px';
  popup.style.left = e.x +'px';
});
runner.addEventListener('mouseout', function(e) {
  popup.style.opacity = '0'
})