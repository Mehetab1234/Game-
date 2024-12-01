const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Load assets
const birdImg = new Image();
birdImg.src = './assets/bird.png';
const bgImg = new Image();
bgImg.src = './assets/bg.png';
const pipeTopImg = new Image();
pipeTopImg.src = './assets/pipe-top.png';
const pipeBottomImg = new Image();
pipeBottomImg.src = './assets/pipe-bottom.png';
const groundImg = new Image();
groundImg.src = './assets/ground.png';

// Game variables
let bird = { x: 50, y: 200, width: 34, height: 24 };
let velocity = 0;
const gravity = 1.5;
let pipes = [{ x: canvas.width, y: Math.floor(Math.random() * 200) - 150 }];
let score = 0;

// Controls
document.addEventListener('keydown', () => (velocity = -12));

// Game loop
function draw() {
  ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

  pipes.forEach((pipe, index) => {
    const gap = 120;
    ctx.drawImage(pipeTopImg, pipe.x, pipe.y);
    ctx.drawImage(pipeBottomImg, pipe.x, pipe.y + pipeTopImg.height + gap);

    pipe.x -= 3;

    if (
      bird.x + bird.width > pipe.x &&
      bird.x < pipe.x + pipeTopImg.width &&
      (bird.y < pipe.y + pipeTopImg.height ||
        bird.y + bird.height > pipe.y + pipeTopImg.height + gap)
    ) {
      alert(`Game Over! Score: ${score}`);
      document.location.reload();
    }

    if (pipe.x + pipeTopImg.width < 0) pipes.splice(index, 1);
    if (pipe.x === 50) score++;
  });

  if (!pipes.length || pipes[pipes.length - 1].x < canvas.width / 2) {
    pipes.push({ x: canvas.width, y: Math.floor(Math.random() * 200) - 150 });
  }

  ctx.drawImage(groundImg, 0, canvas.height - groundImg.height);
  bird.y += velocity;
  velocity += gravity;

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, 10, 30);

  requestAnimationFrame(draw);
}

draw();
