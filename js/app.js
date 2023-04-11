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
      "Hello-Microverse-Project is mean to be an example of how to set up a simple project using git & github best practices.",
    ProjectIMG: [
      'img/project_imgs/hello_microverse.JPG'
    ],
    languages: ['Git', 'Github', 'CSS', 'HTML5'],
    seeProject: 'See Project',
    SeeLive: 'https://github.com/JuanDiegoGuerra/Hello-Microverse-Project',
    SeeSource: 'https://github.com/JuanDiegoGuerra/Hello-Microverse-Project',
  },
  {
    id: 'work2',
    projectName: 'Setup-Mobile-First',
    projectInfo:
      "Setup-Mobile-First is a project in where you built your own portfolio website using Frontend Dev Tools.",
    ProjectIMG: [
      'img/project_imgs/setup_portfolio.JPG'
    ],
    languages: ['HTML5', 'Javascript', 'CSS', 'Github'],
    seeProject: 'See Project',
    SeeLive: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
    SeeSource: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
  },
  {
    id: 'work3',
    projectName: 'Pokedex',
    projectInfo:
      "Pokedex is a personal project that I made watching a video and practicing what I learnd in my Web Developer journey.",
    ProjectIMG: [
      'img/project_imgs/pokedex_preview2.gif'
    ],
    languages: ['HTML5', 'Javascript', 'CSS', 'Github'],
    seeProject: 'See Project',
    SeeLive: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
    SeeSource: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
  },
  {
    id: 'work4',
    projectName: 'Caesar Cipher',
    projectInfo:
      "Caesar Cipher is a personal project that I made watching a video and practicing what I learnd in my Web Developer journey.",
    ProjectIMG: [
      'img/project_imgs/caesar_cipher_preview.gif'
    ],
    languages: ['CSS', 'HTML5', 'Github', 'Javascript'],
    seeProject: 'See Project',
    SeeLive: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
    SeeSource: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
  },
  {
    id: 'work5',
    projectName: 'Chronometer',
    projectInfo:
      "Chronometer is a personal project that I made watching a video and practicing what I learnd in my Web Developer journey.",
    ProjectIMG: [
      'img/project_imgs/chronometer_preview.gif'
    ],
    languages: ['HTML5', 'Javascript', 'CSS', 'Github'],
    seeProject: 'See Project',
    SeeLive: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
    SeeSource: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
  },
  {
    id: 'work6',
    projectName: 'Try Boostrap',
    projectInfo:
      "Try Boostrap is a project in where you built your own portfolio website using Boostrap.",
    ProjectIMG: [
      'img/project_imgs/try_boostrap.JPG'
    ],
    languages: ['HTML5', 'Javascript', 'CSS', 'Github'],
    seeProject: 'See Project',
    SeeLive: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
    SeeSource: 'https://github.com/JuanDiegoGuerra/Portfolio-Setup-and-Mobile-first',
  }        
]   
// Pop Up section
const PopupWindow = document.querySelectorAll('.external_link');
const popUp = document.querySelector('.popup');

PopupWindow.forEach((p, index) => {
  p.addEventListener('click', () => {

    }); });
    