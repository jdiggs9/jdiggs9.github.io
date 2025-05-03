$(document).ready(function () {
    let images = [
      {src: "images/slideshow/jellybeans.jpg", caption: "J for Jellybeans"},
      {src: "images/slideshow/owl.jpg", caption: "O for Owl"},
      {src: "images/slideshow/spaceship.jpg", caption: "S for Spaceship"},
      {src: "images/slideshow/headphones.jpg", caption: "H for Headphones"},
      {src: "images/slideshow/donut.jpg", caption: "D for Donut"},
      {src: "images/slideshow/icecream.jpg", caption: "I for Ice Cream"},
      {src: "images/slideshow/guitar.jpg", caption: "G for Guitar"},
      {src: "images/slideshow/globe.jpg", caption: "G for Globe"},
      {src: "images/slideshow/sneakers.jpg", caption: "S for Sneakers"}
    ];
  
    let current = 0;
  
    function updateSlide() {
      $('#slide-img').attr('src', images[current].src);
      $('#slide-caption').text(images[current].caption);
    }
  
    $('#next').click(function () {
      current = (current + 1) % images.length;
      updateSlide();
    });
  
    $('#prev').click(function () {
      current = (current - 1 + images.length) % images.length;
      updateSlide();
    });
  });
  