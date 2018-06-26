(function() { 
  Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
  Galleria.configure({
  transition: 'fadeslide',
  imageCrop: true,
  height: 700,
  weight: 1100,
  variation: 'light smallarow"',
  autoplay: 3500,
  lightbox: true
})
Galleria.run('.galleria');
}());

