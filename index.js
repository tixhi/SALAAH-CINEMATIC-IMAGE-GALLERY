const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let index = 0;

images.forEach((img, i) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    index = i;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  lightboxImg.src = images[index].src;
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  lightboxImg.src = images[index].src;
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'Escape') closeBtn.click();
  }
});
