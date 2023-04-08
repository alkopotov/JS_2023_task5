const runner = document.querySelector('.runner');
const indicator = document.querySelector('.bar');

function moveRunner(e) {
runner.style.left = "12%";
indicator.style.width = "12%";
console.log(runner.style.left)
}


// runner.addEventListener('mouseup', moveRunner);
runner.addEventListener('mousedown', moveRunner);
// runner.addEventListener('mousemove', moveRunner);