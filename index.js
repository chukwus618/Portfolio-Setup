const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navBar = document.getElementById('nav-bar');
const overLay = document.getElementById('overlay');
const shape = document.getElementById('shape');
const bodyElement = document.getElementsByTagName('body')[0];
const contactSection = document.getElementById('contact-info');

menuIcon.addEventListener('click', () => {
  navBar.style.display = 'flex';
  navBar.classList.add('active');
  overLay.style.display = 'block';
  closeIcon.style.display = 'block';
  overLay.appendChild(shape);
  bodyElement.style.overflow = 'hidden';
});

closeIcon.addEventListener('click', () => {
  navBar.style.display = 'none';
  menuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
  overLay.style.display = 'none';
  contactSection.appendChild(shape);
});