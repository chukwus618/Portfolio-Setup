const works = [
  {
    index: 0,
    nameMobile: 'Tonic',
    nameDesktop: 'Tonic',
    mobileDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    featuredImageMobile: 'icons/proshot.png',
    featuredImageDesktop: 'icons/snapshoot5.png',
    clientMobile: 'CANOPY',
    roleMobile: 'Back End Dev',
    clientDesktop: 'CANOPY',
    roleDesktop: 'Back End Dev',
    yearMobile: '2015',
    yearDesktop: '2015',
    tag: ['HTML', 'Ruby on rails', 'CSS', 'Javascript'],
    tagPopup: ['Ruby', 'Bootstrap'],
    seeProjectBtn: '',
  },

  {
    index: 1,
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
    tag: ['HTML', 'Ruby on rails', 'CSS', 'Javascript'],
    tagPopup: ['Ruby', 'Bootstrap'],
    seeProjectBtn: '',
  },

  {
    index: 2,
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
    tag: ['HTML', 'Ruby on rails', 'CSS', 'Javascript'],
    tagPopup: ['Ruby', 'Bootstrap'],
    seeProjectBtn: '',
  },

  {
    index: 3,
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
    tag: ['HTML', 'Ruby on rails', 'CSS', 'Javascript'],
    tagPopup: ['Ruby', 'Bootstrap'],
    seeProjectBtn: '',
  },
];

window.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const navBar = document.getElementById('nav-bar');
  const overLay = document.getElementById('overlay');
  const bodyElement = document.getElementsByTagName('body')[0];
  const popup = document.createElement('article');
  popup.id = 'details-popup';
  popup.style.display = 'none';
  document.body.appendChild(popup);

  const projectContainer = document.querySelector('.work-section');

  menuIcon.addEventListener('click', () => {
    navBar.style.display = 'flex';
    overLay.style.display = 'block';
    overLay.classList.add('overlay-menu');
    overLay.classList.remove('overlay-popup');
    closeIcon.style.display = 'block';
    bodyElement.style.overflow = 'hidden';
  });

  closeIcon.addEventListener('click', () => {
    navBar.style.display = 'none';
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    overLay.style.display = 'none';
    popup.style.display = 'none';
    bodyElement.style.overflow = 'auto';
  });

  navBar.addEventListener('click', () => {
    overLay.style.display = 'none';
  });

  const fetchProjectCard = (works, index) => (
    `<section class="works">
      <img class="snapshoot hide-desk" src="${works.featuredImageMobile}" alt="${works.nameMobile} snapshot"/>
      <img class="snapshoot hide-mobile" src="${works.featuredImageDesktop}" alt="${works.nameDesktop} snapshot"/>
      <div class="project-card-details">
        <h3 class="hide-desk">${works.nameMobile}</h3>
        <h3 class="hide-mobile">${works.nameDesktop}</h3>
        <ul>
          <li class="caption1 hide-desk">${works.clientMobile}</li>
          <li class="caption1 hide-mobile">${works.clientDesktop}</li>
          <div class="circle"></div>
          <li class="hide-desk"><span>${works.roleMobile}</span></li>
          <li class="hide-mobile"><span>${works.roleDesktop}</span></li>
          <div class="circle"></div>
          <li class="hide-desk"><span>${works.yearMobile}</span></li>
          <li class="hide-mobile"><span>${works.yearMobile}</span></li>
        </ul>
        <p class="text3 hide-desk">${works.mobileDescription}</p>
        <p class="text3 hide-mobile">${works.desktopDescription}</p>
        <ul>
         <li class="tag1">
           <p class="tag">${works.tag[0]}</p>
         </li>
         <li class="tag4">
           <p class="notmobile tag">${works.tag[1]}</p>
         </li>
         <li class="tag2">
           <p class="tag">${works.tag[2]}</p>
         </li>
         <li class="tag3">
           <p class="tag">${works.tag[3]}</p>
         </li>
        </ul>
        <button class="project-button" type="button" data-index="${index}">See Project</button>
      </div>
    </section>`
  );

  projectContainer.innerHTML = works.map((works, index) => fetchProjectCard(works, index)).join('');

  const displayPop = (index) => (
    `<section class="popup-content">
      <section class="popup-header">
       <h3 class="hide-desk">${works[index].nameMobile}</h3>
       <h3 class="hide-mobile">${works[index].nameDesktop}</h3>
       <img src="icons/popup-close-icon.png" alt="Close" class="popup-close-icon"/>
      </section>
      <ul>
        <li class="caption1 hide-desk">${works[index].clientMobile}</li>
        <li class="caption1 hide-mobile">${works[index].clientDesktop}</li>
        <div class="circle"></div>
        <li class="hide-desk"><span>${works[index].roleMobile}</span></li>
        <li class="hide-mobile"><span>${works[index].roleDesktop}</span></li>
        <div class="circle"></div>
        <li class="hide-desk"><span>${works[index].yearMobile}</span></li>
        <li class="hide-mobile"><span>${works[index].yearDesktop}</span></li>
      </ul>
      <img class="snapshoot hide-desk" src="${works[index].featuredImageMobile}" alt="${works[index].nameMobile} snapshot"/>
      <img class="snapshoot hide-mobile" src="${works[index].featuredImageDesktop}" alt="${works[index].nameDesktop} snapshot"/>
      <section class="desktop-popup-content">
       <section class="project-description-modal">
         <p class="text3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
         <p class="text3 hide-mobile desk-description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p>
       </section>
       <aside>
         <ul class="">
           <li class="tag1">
             <p class="tag">${works[index].tag[0]}</p>
           </li>
           <li class="tag2">
             <p class="tag">${works[index].tag[2]}</p>
           </li>
           <li class="tag3">
             <p class="tag">${works[index].tag[3]}</p>
           </li>
         </ul>
         <ul>
           <li class="tag5">
             <p class="tag notmobile">${works[index].tagPopup[0]}</p>
           </li>
           <li class="tag6">
             <p class="tag notmobile">${works[index].tagPopup[1]}</p>
           </li>
         </ul>
         <div id="divider"></div>
         <section class="button-container">
           <button type="button" id="live-button">See live</button>
           <button type="button" id="source-button">See source</button>
         </section>
       </aside>
      </section>
    </section>`
  );
  const showPopup = (index) => {
    popup.innerHTML = displayPop(index);
    const overLay = document.getElementById('overlay');
    overLay.classList.remove('overlay-menu');
    overLay.classList.add('overlay-popup');
    overLay.style.display = 'block';
    popup.style.display = 'block';
    bodyElement.style.overflow = 'hidden';

    const popupCloseIcon = popup.querySelector('.popup-close-icon');
    popupCloseIcon.addEventListener('click', () => {
      popup.style.display = 'none';
      overLay.style.display = 'none';
      overLay.classList.remove('overlay-menu', 'overlay-popup');
      bodyElement.style.overflow = 'auto';
    });
  };
  projectContainer.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('project-button')) {
      const index = event.target.getAttribute('data-index');
      showPopup(index);
    }
  });
});