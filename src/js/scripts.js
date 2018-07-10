
function hasClass(ele,cls) {
  return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
 
function addClass(ele,cls) {  
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
 
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {      
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)'); 
    ele.className=ele.className.replace(reg,' ');  
  }
}   

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


window.onload = function () {
	// good to go!
  document.getElementById('page').className = "load";

  window.sr = ScrollReveal({
    delay: 1,
    scale: 0.99,
    viewFactor: 0.4,
    distance: "2em"
  });
    
    sr.reveal('.home-banner-item', {origin: 'bottom', duration: 600});
    sr.reveal('.block-feature-image', {origin: 'bottom', duration: 600});
    sr.reveal('.block-feature-item', {origin: 'bottom', duration: 600 }, 200);
    sr.reveal('.block-map', {origin: 'bottom', duration: 600});
    sr.reveal('.block-feature', {origin: 'bottom', duration: 600});
    sr.reveal('footer', {origin: 'bottom', duration: 600});
    sr.reveal('.block-content', {origin: 'bottom', delay: 2, duration: 800});
    sr.reveal('.block-feature-content', {origin: 'bottom', delay: 2, duration: 600});
    sr.reveal('.block-image', {origin: 'bottom', duration: 600 });


    var menuButton = document.getElementById('navButton');
    var mobileNav = document.getElementById('mobile-nav');
    menuButton.addEventListener('click', function (e) {
      menuButton.classList.toggle('is-active');
      e.preventDefault();
      
      if (hasClass(mobileNav, 'load')) {
        removeClass(mobileNav, 'load');
        addClass(mobileNav, 'exit');
        var myFunction = function(){
          addClass(mobileNav, 'hidden');
        };
        setTimeout(myFunction, 500);
        
      } else {
        removeClass(mobileNav, 'exit');
        removeClass(mobileNav, 'hidden');
        addClass(mobileNav, 'load');
      }
    });
  


// grab an element
var myElement = document.querySelector("#main-nav");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); 
baguetteBox.run('.gallery');
};


