const hamburger = document.querySelector('.menu');
const navMenu = document.querySelector('.flex-nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navMenu.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const ProjectCardsDetails = [
  {
    id: 'work1',
    projectName: 'Hello-Microverse',
    projectInfo:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum has been the industrys standard dummy text ever.',
      //'Hello-Microverse-Project is mean to be an example of how to set up a simple project using git & github best practices.',
    ProjectIMG: [
      'img/project_imgs/hello_microverse.JPG',
    ],
    languages: ['Github', 'CSS', 'HTML5'],
    seeProject: 'See Project',
    SeeLive: 'https://github.com/JuanDiegoGuerra/Hello-Microverse-Project',
    SeeSource: 'https://github.com/JuanDiegoGuerra/Hello-Microverse-Project',
  },
  {
    id: 'work2',
    projectName: 'Setup-Mobile-First',
    projectInfo:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum has been the industrys standard dummy text ever.',
      //'Setup-Mobile-First is a project in where you built your own portfolio website using Frontend Dev Tools.',
    ProjectIMG: [
      'img/project_imgs/setup_portfolio.JPG',
    ],
    languages: ['HTML5', 'Javascript', 'CSS'],
    seeProject: 'See Project',
    SeeLive: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
    SeeSource: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
  },
  {
    id: 'work3',
    projectName: 'Pokedex',
    projectInfo:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum has been the industrys standard dummy text ever.',
      //'Pokedex is a personal project that I made watching a video and practicing what I learnd in my Web Developer journey.',
    ProjectIMG: [
      'img/project_imgs/pokedex_preview2.gif',
    ],
    languages: ['Javascript', 'HTML5', 'CSS'],
    seeProject: 'See Project',
    SeeLive: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
    SeeSource: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
  },
  {
    id: 'work4',
    projectName: 'Caesar Cipher',
    projectInfo:
     'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum has been the industrys standard dummy text ever.',
      //'Caesar Cipher is a personal project that I made watching a video and practicing what I learnd in my Web Developer journey.',
    ProjectIMG: [
      'img/project_imgs/caesar_cipher_preview.gif',
    ],
    languages: ['CSS', 'HTML5', 'Javascript'],
    seeProject: 'See Project',
    SeeLive: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
    SeeSource: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
  },
  {
    id: 'work5',
    projectName: 'Chronometer',
    projectInfo:
     'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum has been the industrys standard dummy text ever.',
      //'Chronometer is a personal project that I made watching a video and practicing what I learnd in my Web Developer journey.',
    ProjectIMG: [
      'img/project_imgs/chronometer_preview.gif',
    ],
    languages: ['HTML5', 'Javascript', 'CSS'],
    seeProject: 'See Project',
    SeeLive: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
    SeeSource: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
  },
  {
    id: 'work6',
    projectName: 'Try Boostrap',
    projectInfo:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum has been the industrys standard dummy text ever.',
    //'Try Boostrap is a project in where you built your own portfolio website using Boostrap.',
    ProjectIMG: [
      'img/project_imgs/try_boostrap.JPG',
    ],
    languages: ['Boostrap', 'HTML5', 'CSS'],
    seeProject: 'See Project',
    SeeLive: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
    SeeSource: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
  },
];
// Pop Up section
const PopupWindow = document.querySelectorAll('.external_link');
const popUp = document.querySelector('.popup');

PopupWindow.forEach((p, index) => {
  p.addEventListener('click', () => {
    document.body.classList.add('no-scroll');
    popUp.classList.add('display-visible');
    popUp.innerHTML = `
  <div class="popup-container display-flex-column">
        <div class="close-pop"><i class="fa fa-times" aria-hidden="true"></i></div>
        <div class="slider">
            <div class="pop-img-container">
            <img id="project-img" class="project-img" src="${ProjectCardsDetails[index].ProjectIMG[0]}" alt="">
            </div>
        </div>
        <h2 class="project-name work-name" id="workname-title">${ProjectCardsDetails[index].projectName}</h2>
        <ul class="works-tools work-name">
          <li class="work-tool">${ProjectCardsDetails[index].languages[0]}</li>
          <li class="work-tool">${ProjectCardsDetails[index].languages[1]}</li>
          <li class="work-tool">${ProjectCardsDetails[index].languages[2]}</li>
        </ul>
        <p class="notes">
        ${ProjectCardsDetails[index].projectInfo}
        </p>
        <div class="pop-btns" style="display: flex;">
          <button class="see-project more-info light-btn style="text-decoration: none;">
          <a href="${ProjectCardsDetails[index].SeeLive}">See Live 
          <i class="fa fa-external-link" aria-hidden="true"></i></a> </button>
          <button class="see-project light-btn">
          <a href="${ProjectCardsDetails[index].SeeSource}">See Source 
          <i class="fa fa-github" aria-hidden="true"></i></a> </button>
        </div>
      </div>`;
    const closePop = document.querySelector('.close-pop');
    closePop.addEventListener('click', () => {
      popUp.classList.remove('display-visible');
      document.body.classList.remove('no-scroll');
    });
  });
});
