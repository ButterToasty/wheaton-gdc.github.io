var logo = document.getElementById('logo');
var menuIcon = document.getElementById('menuIcon');
var subBar = document.getElementById('subBar');
var menuOpen = false;
var galleryOpen = false;

var home = document.getElementById('home'),
    executives = document.getElementById('executives'),
    about = document.getElementById('about'),
    gallery = document.getElementById('gallery'),
    contact = document.getElementById('contact');

var homeText = document.getElementById('homeText'),

    executivesText = document.getElementById('executivesText'),

    aboutText = document.getElementById('aboutText'),
    abWhoWeAre = document.getElementById('abWhoWeAre'),
    abWhatWeDo =  document.getElementById('abWhatWeDo'),
    WWA =  document.getElementById('WWA'),
    WWD =  document.getElementById('WWD'),

    galleryText = document.getElementById('galleryText'),
    contactText = document.getElementById('contactText');

var img1 = document.getElementById('img1'),
    img2 = document.getElementById('img2'),
    img3 = document.getElementById('img3'),
    img4 = document.getElementById('img4'),
    img5 = document.getElementById('img5'),
    img6 = document.getElementById('img6'),
    img7 = document.getElementById('img7'),
    img8 = document.getElementById('img8'),
    img9 = document.getElementById('img9'),
    img10 = document.getElementById('img10'),
    img11 = document.getElementById('img11'),
    img12 = document.getElementById('img12'),
    img13 = document.getElementById('img13'),
    img14 = document.getElementById('img14'),
    img15 = document.getElementById('img15'),
    img16 = document.getElementById('img16'),
    img17 = document.getElementById('img17'),
    img18 = document.getElementById('img18'),
    img19 = document.getElementById('img19'),
    img20 = document.getElementById('img20');

function toggleGal(){
  if(galleryOpen == true){
    img1.style.opacity=("100%");
  img2.style.opacity=("100%");
  img3.style.opacity=("100%");
  img4.style.opacity=("100%");
  img5.style.opacity=("100%");
  img6.style.opacity=("100%");
  img7.style.opacity=("100%");
  img8.style.opacity=("100%");
  img9.style.opacity=("100%");
  img10.style.opacity=("100%");
  img11.style.opacity=("100%");
  img12.style.opacity=("100%");
  img13.style.opacity=("100%");
  img14.style.opacity=("100%");
  img15.style.opacity=("100%");
  img16.style.opacity=("100%");
  img17.style.opacity=("100%");
  img18.style.opacity=("100%");
  img19.style.opacity=("100%");
  img20.style.opacity=("100%");
  }
  else if(galleryOpen == false){
    img1.style.opacity=("0%");
    img2.style.opacity=("0%");
    img3.style.opacity=("0%");
    img4.style.opacity=("0%");
    img5.style.opacity=("0%");
    img6.style.opacity=("0%");
    img7.style.opacity=("0%");
    img8.style.opacity=("0%");
    img9.style.opacity=("0%");
    img10.style.opacity=("0%");
    img11.style.opacity=("0%");
    img12.style.opacity=("0%");
    img13.style.opacity=("0%");
    img14.style.opacity=("0%");
    img15.style.opacity=("0%");
    img16.style.opacity=("0%");
    img17.style.opacity=("0%");
    img18.style.opacity=("0%");
    img19.style.opacity=("0%");
    img20.style.opacity=("0%");
    }
  }

logo.addEventListener('click', function() {
  logo.style.animation = ("null");
  logo.offsetHeight;
  logo.style.animation= ("pulse 0.5s 1");
  if (menuOpen == true){
    subBar.style.left=("100%");
    menuOpen = false;
  }
  else if (menuOpen == false){
    subBar.style.left=("85%");
    menuOpen = true;
  }
}, false);

home.addEventListener('click', function() {
  menuOpen = false;
  galleryOpen = false;
  toggleGal();
  subBar.style.left=("100%");
  contactText.style.opacity = ("0%");
  homeText.style.opacity = ("100%");
  aboutText.style.opacity = ("0%");
  galleryText.style.opacity = ("0%");
  executivesText.style.opacity = ("0%");
  WWA.style.opacity = ("0%");
  WWD.style.opacity = ("0%");

}, false);

executives.addEventListener('click', function() {
  menuOpen = false;
  galleryOpen = false;
  toggleGal();
  subBar.style.left=("100%");
  contactText.style.opacity = ("0%");
  homeText.style.opacity = ("0%");
  aboutText.style.opacity = ("0%");
  galleryText.style.opacity = ("0%");
  executivesText.style.opacity = ("100%");
  WWA.style.opacity = ("0%");
  WWD.style.opacity = ("0%");

}, false);



about.addEventListener('click', function() {
  menuOpen = false;
  galleryOpen = false;
  toggleGal();
  subBar.style.left=("100%");
  contactText.style.opacity = ("0%");
  homeText.style.opacity = ("0%");
  aboutText.style.opacity = ("100%");
  abWhoWeAre.style.opacity = ("100%");
  abWhatWeDo.style.opacity = ("100%");
  galleryText.style.opacity = ("0%");
  executivesText.style.opacity = ("0%");
  WWA.style.opacity = ("100%");
  WWD.style.opacity = ("100%");


}, false);

gallery.addEventListener('click', function() {

  menuOpen = false;
  galleryOpen = true;
  toggleGal();
  subBar.style.left=("100%");
  

  contactText.style.opacity = ("0%");
  homeText.style.opacity = ("0%");
  galleryText.style.opacity = ("100%");
  executivesText.style.opacity = ("0%");
  WWA.style.opacity = ("0%");
  WWD.style.opacity = ("0%");
  
}, false);

contact.addEventListener('click', function() {
  menuOpen = false;
  galleryOpen = false;
  toggleGal();
  subBar.style.left=("100%");
  contactText.style.opacity = ("100%");
  homeText.style.opacity = ("0%");
  galleryText.style.opacity = ("0%");
  executivesText.style.opacity = ("0%");
  WWA.style.opacity = ("0%");
  WWD.style.opacity = ("0%");

}, false);


