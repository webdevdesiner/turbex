AOS.init();

  
  
  
  let index = 0;
  const images = document.querySelectorAll('.banner img');
  const totalImages = images.length;
  let interval = setInterval(nextSlide, 3000); // Alterna a cada 3s

  function showSlide(i) {
    images.forEach((img, idx) => {
      img.style.opacity = "0"; // Oculta todas as imagens
    });
    images[i].style.opacity = "1"; // Torna a imagem atual visível
  }

  function nextSlide() {
    index = (index + 1) % totalImages;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + totalImages) % totalImages;
    showSlide(index);
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 3000); // Reinicia temporizador
  }

  document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  showSlide(index); // Exibe a primeira imagem ao carregar

