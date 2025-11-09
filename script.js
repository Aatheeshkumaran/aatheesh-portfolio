// Auto play/pause videos on hover
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  const video = card.querySelector('.project-video');
  if (!video) return;
  card.addEventListener('mouseenter', () => { video.play(); });
  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // --- Auto-slide for all .shot-slider galleries ---
  const INTERVAL_MS = 2500; // time each screenshot stays before moving

  document.querySelectorAll('.shot-slider').forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll('img'));
    if (slides.length <= 1) return;

    let i = 0;

    const goTo = (idx) => {
      const target = slides[idx];
      if (!target) return;
      const left = target.offsetLeft - slider.offsetLeft;
      slider.scrollTo({ left, behavior: 'smooth' });
    };

    setInterval(() => {
      i = (i + 1) % slides.length;
      goTo(i);
    }, INTERVAL_MS);
  });

  // --- (Optional) hover play for any remaining videos in the page ---
  document.querySelectorAll('.project-card').forEach((card) => {
    const video = card.querySelector('.project-video');
    if (!video) return;
    card.addEventListener('mouseenter', () => video.play());
    card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
  });
});
