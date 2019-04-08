
window.onscroll = function() {
  if (document.documentElement.scrollTop > window.innerHeight ) 
  { console.log('reached');

    var presentation = document.querySelector('#Presentation');
    presentation.classList.add('is-reached');
    var steps = document.querySelector('#steps__projet--game');
    steps.classList.add('is-reached');
    var steps1 = document.querySelector('#steps__projet--easyjet');
    steps1.classList.add('is-reached'); 
    var steps2 = document.querySelector('#steps__projet--comptoir');
    steps2.classList.add('is-reached');
    var contact = document.querySelector('#contact');
    contact.classList.add('is-reached'); 
  }
}
var ids = ['Presentation', 'steps__projet--game','steps__projet--easyjet', 'steps__projet--comptoir','contact'];

var image = document.querySelector('.step__game');
image.addEventListener('click',function(){
  alert('Bonjour adrien');
})









