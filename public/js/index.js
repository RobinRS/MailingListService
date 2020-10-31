window.onload = function() {
  document.getElementById('menu').addEventListener('click', function(e) {
    if(getAttClass('mobileNav', 'width') === '100%') {
      setAttClass('mobileNav', 'animation', 'collaps 0.8s');
      setAttClass('mobileNav', 'width', '0%');
    } else {
      setAttClass('mobileNav', 'animation', 'expand 0.8s');
      setAttClass('mobileNav', 'width', '100%');
    }
  });
}

function setAttClass(cl, key, val) {
  document.getElementsByClassName(cl)[0].style[key] = val;
}

function getAttClass(cl, key) {
  return document.getElementsByClassName(cl)[0].style[key];
}