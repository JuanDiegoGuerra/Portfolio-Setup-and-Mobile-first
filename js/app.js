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

//Card Object
const ProjectCardsDetails = [
  {
    id: 'work1',
    projectName: 'Hello-Microverse',
    projectInfo:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled.',
    ProjectIMG: [
      'img/Snapshoot_Portfolio.png',
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
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled.',
    ProjectIMG: [
      'img/Snapshoot_Portfolio.png',
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
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled.',
    ProjectIMG: [
      'img/Snapshoot_Portfolio.png',
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
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled.',
    ProjectIMG: [
      'img/Snapshoot_Portfolio.png',
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
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled.',
    ProjectIMG: [
      'img/Snapshoot_Portfolio.png',
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
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.Lorem Ipsum has been the industrys standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled.',
    ProjectIMG: [
      'img/Snapshoot_Portfolio.png',
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
          <button class="see-project more-info light-btn">
          <a href="${ProjectCardsDetails[index].SeeLive}" class="aseelives">See Live 
          <i class="fa fa-external-link" aria-hidden="true"></i></a> </button>
          <button class="see-project light-btn">
          <a href="${ProjectCardsDetails[index].SeeSource}" class="aseelives">See Source 
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
//Hide and Seek exercise
console.log("Hello Hello my friend, for this little game, you will have to find 🕵🏼‍♂️ the 3 little bugs that are hidden on this page, I will give you some clues")
console.log("1.- For the first one, open the hamb menu in Mobile Size and check if all the links are working fine!")
console.log("2.- For the second one, hover your mouse over all the projects, you will quickly find the broken one, but be carefull, you can get dizzy!😂")
console.log("3.- For the third one, you won't have clues but you could have or get my resume if you wish, I'm just saying! 😁")
