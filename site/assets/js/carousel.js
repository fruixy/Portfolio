let currentSlide = 0;
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-item');
  
    function moveSlide(direction) {
      currentSlide += direction;
  
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      } else if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
  
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
}