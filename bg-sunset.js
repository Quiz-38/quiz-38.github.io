(function () {
  var canvas = document.createElement('canvas');
  canvas.id = 'sitebg';
  document.body.prepend(canvas);
  var ctx = canvas.getContext('2d');
  var W, H, bubbles = [];
  function resize() {
    W = canvas.width = innerWidth; H = canvas.height = innerHeight;
    bubbles = [];
    var count = Math.floor((W * H) / 26000);
    for (var i = 0; i < count; i++) {
      bubbles.push({
        x: Math.random() * W, y: Math.random() * H + H,
        r: Math.random() * 26 + 8, s: Math.random() * 0.5 + 0.15,
        hue: Math.random() < 0.5 ? '255,122,89' : '255,200,87',
        a: Math.random() * 0.18 + 0.05
      });
    }
  }
  function tick() {
    var g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#1a0f1f'); g.addColorStop(1, '#241226');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    for (var i = 0; i < bubbles.length; i++) {
      var b = bubbles[i];
      b.y -= b.s;
      if (b.y < -b.r) { b.y = H + b.r; b.x = Math.random() * W; }
      ctx.beginPath();
      ctx.fillStyle = 'rgba(' + b.hue + ',' + b.a + ')';
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }
  addEventListener('resize', resize);
  resize();
  tick();
})();