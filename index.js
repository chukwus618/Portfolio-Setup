const works = [
  {
    nameMobile: 'Tonic',
    nameDesktop: 'Tonic',
    mobileDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    featuredImageMobile: 'icons/proshot.png',
    featuredImageDesktop: 'icons/snapshoot5.png',
    clientMobile: 'CANOPY',
    roleMobile: 'Back End Dev',
    yearMobile: '2015',
    yearDesktop: '2015',
    tagMobile: ['HTML', 'CSS', 'Javascript'],
    tagDesktop: ['HTML', 'CSS', 'Javascript'],
    seeProjectBtn: '',
  },

  {
    nameMobile: 'Multi-Post Stories',
    nameDesktop: 'Multi-Post Stories',
    mobileDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopDescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featuredImageMobile: 'icons/proshot2.png',
    featuredImageDesktop: 'icons/proshot4.png',
    clientMobile: 'CANOPY',
    roleMobile: 'Back End Dev',
    clientDesktop: 'FACEBOOK',
    roleDesktop: 'Full Stack Dev',
    yearMobile: '2015',
    yearDesktop: '2015',
    tagMobile: ['HTML', 'CSS', 'Javascript'],
    tagDesktop: ['HTML', 'Ruby on rails', 'CSS', 'Javascript'],
    seeProjectBtn: '',
  },

  {
    nameMobile: 'Tonic',
    nameDesktop: 'Facebook 360',
    mobileDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    desktopDescription: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    featuredImageMobile: 'icons/proshot3.png',
    featuredImageDesktop: 'icons/proshot.png',
    clientMobile: 'CANOPY',
    roleMobile: 'Back End Dev',
    clientDesktop: 'FACEBOOK',
    roleDesktop: 'Full Stack Dev',
    yearMobile: '2015',
    yearDesktop: '2015',
    tagMobile: ['HTML', 'CSS', 'Javascript'],
    tagDesktop: ['HTML', 'Ruby on rails', 'CSS', 'Javascript'],
    seeProjectBtn: '',
  },

  {
    nameMobile: 'Multi-Post Stories',
    nameDesktop: 'Uber Navigation',
    mobileDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    desktopDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featuredImageMobile: 'icons/proshot4.png',
    featuredImageDesktop: 'icons/proshot2.png',
    clientMobile: 'CANOPY',
    roleMobile: 'Back End Dev',
    clientDesktop: 'Uber',
    roleDesktop: 'Lead Developer',
    yearMobile: '2015',
    yearDesktop: '2018',
    tagMobile: ['HTML', 'CSS', 'Javascript'],
    tagDesktop: ['HTML', 'Ruby on rails', 'CSS', 'Javascript'],
    seeProjectBtn: '',
  },
];

window.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const navBar = document.getElementById('nav-bar');
  const overLay = document.getElementById('overlay');
  const shape = document.getElementById('shape');
  const bodyElement = document.getElementsByTagName('body')[0];
  const contactSection = document.getElementById('contact-info');
  const popup = document.getElementById('details-popup');
  const projectContainer = document.querySelector('.work-section');

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
    popup.style.display = 'none';
  });

  navBar.addEventListener('click', () => {
    overLay.style.display = 'none';
  });

  const checKInnerWidth = () => {
    window.addEventListener('resize', () => console.log(window.innerWidth));
  };

  console.log(checKInnerWidth());

  const fetchProjectCard = ((works) => (
    `<section class="works">
      <img class="snapshoot hide-desk" src="${works.featuredImageMobile}" alt="${works.nameMobile} snapshot"/>
      <img class="snapshoot hide-mobile" src="${works.featuredImageDesktop}" alt="${works.nameDesktop} snapshot"/>
      <div class="project-card-details">
        <h3 class="hide-desk">${works.nameMobile}</h3>
        <h3 class="hide-mobile">${works.nameDesktop}</h3>
        <ul>
          <li class="caption1 hide-desk">${works.clientMobile}</li>
          <li class="caption1 hide-mobile">${works.clientDesktop}</li>
          <div id="circle"></div>
          <li class="hide-desk"><span>${works.roleMobile}</span></li>
          <li class="hide-mobile"><span>${works.roleDesktop}</span></li>
          <div id="circle"></div>
          <li class="hide-desk"><span>${works.yearMobile}</span></li>
          <li class="hide-mobile"><span>${works.yearMobile}</span></li>
        </ul>
        <p class="text3 hide-desk">${works.mobileDescription}</p>
        <p class="text3 hide-mobile">${works.desktopDescription}</p>
        <ul>
          ${works.tagMobile.map((tag) => `<li><p class="tag hide-desk">${tag}</p></li>`).join('')}
          ${works.tagDesktop.map((tag) => `<li><p class="tag hide-mobile">${tag}</p></li>`).join('')}
        </ul>
        <button class="project-button" type="button">See Project</button>
      </div>
    </section>`
  ));

  projectContainer.innerHTML = works.map((work) => fetchProjectCard(work));

  popup.innerHTML = 'Right here';

  const displayPop = ((index) => {
    return (
    `<section id="popup">
        <img src="${works[index].featuredImageMobile}" id="close-icon" alt="close-icon"/>
        <h3 class="header-desktop">Tonic</h3>
          <ul>
            <li class="caption1 hide-desk">${works[index].clientMobile}</li>
            <li class="caption1 hide-mobile">${works[index].clientDesktop}</li>
            <div id="circle"></div>
            <li class="hide-desk"><span>${works[index].roleMobile}</span></li>
            <li class="hide-mobile"><span>${works[index].roleDesktop}</span></li>
            <div id="circle"></div>
            <li class="hide-desk"><span>${works[index].yearMobile}</span></li>
            <li class="hide-mobile"><span>${works[index].yearMobile}</span></li>
        </ul>
          <img class="snapshoot hide-desk" src="${works[index].featuredImageMobile}" alt="${works[index].nameMobile} snapshot"/>
          <img class="snapshoot hide-mobile" src="${works[index].featuredImageDesktop}" alt="${works[index].nameDesktop} snapshot"/>
        <p class="text3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
        <ul>
            ${works[index].tagMobile.map((tag) => `<li><p class="tag hide-desk">${tag}</p></li>`).join('')}
            ${works[index].tagDesktop.map((tag) => `<li><p class="tag hide-mobile">${tag}</p></li>`).join('')}
          </ul>
        <div id="divider"></div>
        <button type="button" id="live-button">See live</button>
        <button type="button" id="source-button">See source</button>
      </section>`);
  });

  // const fetchPopup.forEach((works) => {

  // });

  const popupButtons = document.querySelectorAll('.project-button');
  popupButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      console.log('Button clicked!', index);
      overLay.style.display = 'block';
      closeIcon.style.display = 'block';
      shape.style.zIndex = 1000;
    });
  });
});