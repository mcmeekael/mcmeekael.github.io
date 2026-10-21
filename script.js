const photos = ["mcmeekael-01.jpg", "mcmeekael-02.jpg", "mcmeekael-03.jpg", "mcmeekael-04.jpg", "mcmeekael-05.jpg", "mcmeekael-06.png", "mcmeekael-07.jpg", "mcmeekael-08.jpeg", "mcmeekael-09.jpg", "mcmeekael-10.jpeg", "mcmeekael-11.jpg", "mcmeekael-12.jpg", "mcmeekael-13.png", "mcmeekael-14.jpg", "mcmeekael-15.jpg", "mcmeekael-16.jpg", "mcmeekael-17.jpeg", "mcmeekael-18.jpeg", "mcmeekael-19.jpg", "mcmeekael-20.jpg", "mcmeekael-21.jpg", "mcmeekael-22.jpeg", "mcmeekael-23.jpg", "mcmeekael-24.jpg", "mcmeekael-25.jpg", "mcmeekael-26.jpg", "mcmeekael-27.jpg", "mcmeekael-28.jpeg", "mcmeekael-29.jpg", "mcmeekael-30.jpg", "mcmeekael-31.jpg", "mcmeekael-32.jpg", "mcmeekael-33.jpg", "mcmeekael-34.jpeg", "mcmeekael-35.jpg", "mcmeekael-36.jpg", "mcmeekael-37.jpg", "mcmeekael-38.jpeg", "mcmeekael-39.jpg", "mcmeekael-40.jpeg", "mcmeekael-41.jpeg", "mcmeekael-42.jpeg", "mcmeekael-43.jpg", "mcmeekael-44.jpg", "mcmeekael-45.jpg", "mcmeekael-46.jpg", "mcmeekael-47.jpeg", "mcmeekael-48.jpg", "mcmeekael-49.jpg", "mcmeekael-50.jpg", "mcmeekael-51.jpg", "mcmeekael-52.png", "mcmeekael-53.jpg", "mcmeekael-54.jpg", "mcmeekael-55.jpeg", "mcmeekael-56.jpg"];
const gallery = document.getElementById('photo-gallery');
photos.forEach((photo, index) => {
  const button = document.createElement('button');
  button.className = 'gallery-card';
  button.type = 'button';
  button.setAttribute('aria-label', `View McMeekael photo ${index + 1}`);
  const img = document.createElement('img');
  img.src = `assets/${photo}`;
  img.alt = `McMeekael photo ${index + 1}`;
  img.loading = 'lazy';
  img.decoding = 'async';
  button.appendChild(img);
  button.addEventListener('click', () => window.open(`assets/${photo}`, '_blank', 'noopener'));
  gallery.appendChild(button);
});
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
