var feed = new Instafeed({
  get: 'user',
  userId: '2923101612',
  clientId: '86cf11df1958430484c96f4b0e823b73',
  accessToken: '2923101612.1677ed0.7948f055fe3e4e0cb89dc19982633976',
  template: '<a class="block-instagram" style="background-image: url({{image}});" href="{{link}}"></a>',
  sortBy: 'most-recent',
  limit: '8',
  resolution: 'standard_resolution'
});
feed.run();

$(document).ready(function () {
  $("#cover").fadeOut(500);
  window.sr = ScrollReveal();
    
  window.onload = function () { 
    sr.reveal('.home-banner-item', {origin: 'bottom', scale: 1, duration: 1200});
    sr.reveal('.block-feature-image', {origin: 'bottom', scale: 1, duration: 1200});
    sr.reveal('.block-map', {origin: 'bottom', scale: 1, duration: 1200});
    sr.reveal('.block-feature', {origin: 'bottom', scale: 1, duration: 1200});
    sr.reveal('footer', {origin: 'bottom', scale: 1, duration: 1200});
    sr.reveal('.block-content', {origin: 'bottom', scale: 1, duration: 1600});
    sr.reveal('.block-title', {origin: 'bottom', scale: 1, duration: 1200});
    sr.reveal('.block-image', {origin: 'bottom', scale: 1, duration: 1200 });

    sr.reveal('.block-instagram', {origin: 'bottom', scale: 1, duration: 1000 }, 200);
    var menuButton = document.getElementById('navButton');
    menuButton.addEventListener('click', function (e) {
      menuButton.classList.toggle('is-active');
      e.preventDefault();
    });
    $('.nav-button').click(function() {
      $(".mobile-nav").fadeToggle(500);
    });
  }
  

});
// grab an element
var myElement = document.querySelector("#main-nav");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); 

