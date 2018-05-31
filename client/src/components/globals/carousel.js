const carousel = () => {
  var myIndex = 0;
  var i;
  var x = document.getElementsByClassName('article');
  for (i = 0; i < x.length; i++) {
     x[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1; }
  x[myIndex-1].style.display = 'block';
  setTimeout(carousel, 500); // Change image every 2 seconds
};

module.exports = carousel;