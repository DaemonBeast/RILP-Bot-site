const images = document.getElementsByClassName('parallax');
new simpleParallax(images);

const backgroundOnScroll = [...document.getElementsByClassName('backgroundOnScroll')];

window.addEventListener('scroll', event => {
  if (window.scrollY > 0) {
    backgroundOnScroll.forEach(element => {
      element.style.background = '#333333';
    });
  } else {
    backgroundOnScroll.forEach(element => {
      element.style.background = 'none';
    });
  }
});