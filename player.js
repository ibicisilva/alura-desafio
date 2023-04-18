const player = document.querySelector('#player');
const target = document.querySelector('#target');
let score = 0;

document.addEventListener('keydown', function(event) {
  if (event.code === 'ArrowLeft') {
    player.style.left = parseInt(player.style.left) - 10 + 'px';
  }
  if (event.code === 'ArrowRight') {
    player.style.left = parseInt(player.style.left) + 10 + 'px';
  }
  if (event.code === 'ArrowUp') {
    player.style.bottom = parseInt(player.style.bottom) + 10 + 'px';
  }
  if (event.code === 'ArrowDown') {
    player.style.bottom = parseInt(player.style.bottom) - 10 + 'px';
  }
  checkCollision();
});

function checkCollision() {
  const playerPos = player.getBoundingClientRect();
  const targetPos = target.getBoundingClientRect();

  if (playerPos.bottom >= targetPos.top && 
      playerPos.top <= targetPos.bottom && 
      playerPos.right >= targetPos.left && 
      playerPos.left <= targetPos.right) {
    score++;
    target.style.top = Math.floor(Math.random() * (400 - 50 + 1)) + 50 + 'px';
    target.style.right = Math.floor(Math.random() * (400 - 50 + 1)) + 50 + 'px';
  }
}
