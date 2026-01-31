const cake = document.getElementById('cake');
const flames = document.querySelectorAll('.flame');
const music = document.getElementById('music');
const msg = document.querySelector('.message');
const slice = document.querySelector('.slice');
const notif = document.querySelector('.notif');

let clicked = false;

cake.addEventListener('click', () => {
  if (clicked) return;
  clicked = true;

  if (notif) notif.style.display = 'none';

  // 🎵 Play music immediately
  music.play();

  // 🕯️ Light candles immediately
  flames.forEach(f => (f.style.display = 'block'));

  // 🎊 Start confetti immediately
  startConfetti();

  // ⏳ Delay showing the message
  setTimeout(() => {
    msg.style.display = 'block';
  }, 14000); // seconds delay

  // 💌 Redirect after music ends
  music.addEventListener('ended', () => {
    window.location.href = 'message.html';
  });
});

const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ✅ Two layers of confetti
let layer1 = [];
let layer2 = [];

function startConfetti() {
  // Layer 1
  for (let i = 0; i < 150; i++) {
    layer1.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 15,
      d: Math.random() * 5 + 1,
      color: 'violet',
    });
  }

  // Layer 2 (smaller, faster, different shade)
  for (let i = 0; i < 100; i++) {
    layer2.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 10,
      d: Math.random() * 8 + 2,
      color: '#c77dff', // lighter violet
    });
  }

  requestAnimationFrame(update);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw layer 1
  layer1.forEach(p => {
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });

  // Draw layer 2
  layer2.forEach(p => {
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(update);
}
setTimeout(() => {
  msg.classList.add('show');
}, 9000);
