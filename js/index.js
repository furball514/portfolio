$(document).ready(function() {
  var audio = $('#gg')[0];
  $('nav li').mouseenter(function() {
    audio.play();
  });

  $('#theme').click(function() {
    $('body').css({
      'background-image': 'radial-gradient(#008db6,#35005f)',
      'font-family': 'serif',
      'color': 'white'
    });
    $('em').css('display','none');
    $('p, li, h1, h2, u, span, a, #box').css('color','white')
  });

  $('section').hide();
  $('nav li').click(function() {
    $('nav li').removeClass('clicked');
    $(this).addClass('clicked');
  });
  //CANVAS BLOOD DRIPPING CODED BY RAFAELCASTROCOUTO  
  var ctx = $('<canvas>').get(0).getContext('2d');
  $('em').append(ctx.canvas);
  ctx.canvas.height = 400;
  ctx.canvas.width = 600;
  $(ctx.canvas).css({
    position: 'absolute',
    top: '0'
  });
  var Blood = function(x, y, r, s) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.cy = y;
    this.speed = s;
  };
  Blood.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x + 1, this.cy, this.r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();
  };
  var bloodDrops = [
    new Blood(4, 70, 1, 2),
    new Blood(15, 74, 1, 1.5),
    new Blood(49, 72, 1.5, 1),
    new Blood(68, 74, 2, 1.7),
    new Blood(106, 68, 1, 1.3),
    new Blood(134, 71, 1, 1.9),
    new Blood(164, 71, 1, 1.4),
    new Blood(212, 76, 1.3, 1.1),
    new Blood(263, 72, 1.8, 0.7),
    new Blood(270, 75, 1.4, 1.3),
    new Blood(311, 72, 1.8, 1.2),
    new Blood(317, 75, 1.4, 0.9),
    new Blood(363, 68, 0.8, 1.3),
    new Blood(408, 70, 1.2, 1.6),
    new Blood(466, 67, 0.8, 1.3),
    new Blood(500, 71, 1, 1.2),
    new Blood(512, 74, 1.7, 1.5),
    new Blood(546, 74, 1.7, 0.8),
  ]
  var loop = function() {
    setTimeout(loop, 10)
    ctx.fillStyle = 'rgba(50,0,0,0.04)';
    ctx.fillRect(0, 0, 900, 400);
    for (var i = 0; i < bloodDrops.length; ++i) {
      bloodDrops[i].cy += bloodDrops[i].speed;
      if (bloodDrops[i].cy > 600)
        bloodDrops[i].cy = bloodDrops[i].y;
      bloodDrops[i].draw();
    }
  };
  loop();

  //--------------------------------------------------------------------------
  $('h3').hover(function() {
    $(this).next().slideToggle();
  }, setTimeout(function() {
    $(this).next().slideToggle();
  }, 5000));

});