var slideout = new Slideout({
  'panel': document.getElementById('main'),
  'menu': document.getElementById('menu-2'),
  'padding': 256,
  'tolerance': 70,
  'side': 'right'
});

document.querySelector('.js-slideout-toggle-2').addEventListener('click', function() {
  slideout.toggle();
});

document.querySelector('.menu-2').addEventListener('click', function(eve) {
  if (eve.target.nodeName === 'A') { slideout.close(); }
});

slideout.on('beforeopen', function() {
  document.querySelector('.fixed').classList.add('fixed-open');
});

slideout.on('beforeclose', function() {
  document.querySelector('.fixed').classList.remove('fixed-open');
});