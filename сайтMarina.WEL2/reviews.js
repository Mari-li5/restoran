// Находим все видео-карточки
const videoCards = document.querySelectorAll('.video-card');
 
videoCards.forEach(card => {
  const video = card.querySelector('video');
  const overlay = card.querySelector('.play-overlay');
 
  overlay.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      overlay.style.opacity = '0';
      setTimeout(() => (overlay.style.display = 'none'), 300);
    } else {
      video.pause();
      overlay.style.display = 'flex';
      overlay.style.opacity = '1';
    }
  });
});