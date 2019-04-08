window.onscroll = function() {
    if (document.documentElement.scrollTop > window.innerHeight ) 
    { console.log('reached');
  
      var presentation = document.querySelector('#Presentation');
      presentation.classList.add('is-reached');
    }
  }



  function addEvent(a,b,c,d){d = !d && false;(a.addEventListener)?a.addEventListener(b,c,d):a.attachEvent('on'+b,c);}

  var step = document.getElementById("steps__projet--game");
    function scrolled(){
    var curScroll = document.documentElement.scrollTop || document.body.scrollTop,
    windowHeight = document.documentElement.clientHeight;

    if (curScroll >= step.offsetTop - windowHeight + step.offsetHeight/2.5){
      step.style.opacity = "1";
    }
  }
  addEvent(window, "scroll", scrolled, false);



  var steps1 = document.getElementById("steps__projet--easyjet");
  addEvent(window, "scroll", scrolled, false);


  var steps2 = getElementById("steps__projet--comptoir");
  addEvent(window,"scroll",scrolled,false);

  var contact = document.querySelector('#contact');
  addEvent(window,"scroll",scrolled, false);

  var ids = ['Presentation', 'steps__projet--game','steps__projet--easyjet', 'steps__projet--comptoir','contact'];

  const text = document.querySelector(".alert")
  text.addEventListener("click",function(){
    alert('Bonne journée')
  })



 