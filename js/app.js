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
  }        
]   