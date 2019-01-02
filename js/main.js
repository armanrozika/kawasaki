$(document).ready(function() {
  //Preload
  if (
    $(window).load(function() {
      $("#preloader").fadeOut("slow", function() {
        $(this).remove();
      });
    })
  );

  // Fullpage Js
  //adding the action to the button
  $(document).on("click", "#moveDown", function() {
    $.fn.fullpage.moveSectionDown();
  });

  $(document).on("click", ".nextDown", function() {
    $.fn.fullpage.moveSectionDown();
  });

  var fullIndex = $(".section").length;

  // Desktop Version
  $("#fullpage").fullpage({
    //scrollOverflow: false, // Overlap Page
    //responsiveWidth: 768,
    scrollOverflow: true,
    scrollingSpeed: 800,
    verticalCentered: !0,

    afterLoad: function(anchorLink, index) {
      var loadedSection = $(this);

      //using index
      if (index == 1) {
        if (
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
        ) {
          $.fn.fullpage.setAutoScrolling(true);
        } else {
          //$.fn.fullpage.setAutoScrolling(false);
        }
      } else if (index == 2) {
        $.fn.fullpage.setAutoScrolling(true);
      }
    },

    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);

      if (index == 1 && direction == "down") {
        $(".backtop").addClass("show");
        $(".page__animation__city--1").velocity({left:"0%"}, {delay: 2000, duration: 2000});
        $(".page__animation__city--2").velocity({left:"0%"}, {delay: 1500, duration: 2000});
        $(".page__animation__city--3").velocity({left:"0%"}, {delay: 500, duration: 2000});
        $(".page__animation__city--4").velocity({left:"0%"}, {delay: 1000, duration: 2000});
      } 
      else if (index == 2 && direction == "up") {
        $(".backtop").removeClass("show");
        $(".page__animation__city--1").velocity({left:"-100%"}, {delay: 300, duration: 700});
        $(".page__animation__city--2").velocity({left:"-100%"}, {delay: 300, duration: 700});
        $(".page__animation__city--3").velocity({left:"-100%"}, {delay: 300, duration: 700});
        $(".page__animation__city--4").velocity({left:"-100%"}, {delay: 300, duration: 700});
      } 
      else if (index == 2 && direction == "down") {
        
      } 
      else if (index == 3 && direction == "up") {
        
      } 
      else if (index == 3 && direction == "down") {
        $(".page__animation__city--1").velocity({left:"5%"}, {delay: 300, duration: 1000});
        $(".city__lamp--yellow").removeClass("hide");
      } 
      else if (index == 4 && direction == "up") {
        $(".city__lamp--yellow").addClass("hide");
        
      } 
      else if (index == 4 && direction == "down") {
        $(".city__lamp--green").removeClass("hide");
        $(".page__animation__city--1").velocity({left:"100%"}, {delay: 1000, duration: 1000});
        $(".page__animation__city--2").velocity({left:"100%"}, {delay: 1000, duration: 1000});
        $(".page__animation__city--3").velocity({left:"100%"}, {delay: 1000, duration: 1000});
        $(".page__animation__city--4").velocity({left:"100%"}, {delay: 1000, duration: 1000});
        
      } 
      else if (index == 5 && direction == "up") {
        $(".city__lamp--green").addClass("hide");
        $(".page__animation__city--1").velocity({left:"0%"}, {delay: 700, duration: 1000});
        $(".page__animation__city--2").velocity({left:"0%"}, {delay: 1000, duration: 1000});
        $(".page__animation__city--3").velocity({left:"0%"}, {delay: 1000, duration: 1000});
        $(".page__animation__city--4").velocity({left:"0%"}, {delay: 1000, duration: 1000});
        
      } 
      else if (index == 5 && direction == "down") {
        //$(".page__static__wrapper").addClass("zTop");
        $(".page__static__city").addClass("moveLeft");
        $(".page__static__sport").removeClass("scrollSlide");
        $(".page__animation__sport--1").velocity({left:"0%", opacity:"1"}, {delay: 1000, duration: 1500});
        $(".page__static__sport--text").velocity({opacity:"1"}, {delay: 400, duration: 1000});       
      } 
      else if (index == 6 && direction == "up") {
        //$(".page__static__wrapper").removeClass("zTop");
        $(".page__static__city").removeClass("moveLeft");
        $(".page__static__sport").addClass("scrollSlide");
        $(".page__animation__city--1").velocity({left:"0%"}, {delay: 700, duration: 1000});
        $(".page__animation__city--2").velocity({left:"0%"}, {delay: 1000, duration: 1000});
        $(".page__animation__city--3").velocity({left:"0%"}, {delay: 1000, duration: 1000});
        $(".page__animation__city--4").velocity({left:"0%"}, {delay: 1000, duration: 1000});
        
      } 
      else if (index == 6 && direction == "down") {
        $(".page__static__sport--text").velocity({opacity:"0"}, {delay: 200, duration: 100});       
        $(".page__animation__sport--2").velocity({left:"0%", opacity:"1"}, {delay: 400, duration: 1500});
        
      } 
      else if (index == 7 && direction == "up") {
        $(".page__static__sport--text").velocity({opacity:"1"}, {delay: 200, duration: 1000});       
        $(".page__animation__sport--2").velocity({left:"0%", opacity:"0"}, {delay: 400, duration: 500});
        
      } 
      else if (index == 9 && direction == "down") {
        $(".page__static__sport").addClass("moveUp");
        $(".page__static__race").addClass("moveDown");
        $(".page__animation__race--1").velocity({left:"0%"}, {delay: 500, duration: 1500});
      } 
      else if (index == 10 && direction == "up") {
        $(".page__static__sport").removeClass("moveUp");
        $(".page__static__race").removeClass("moveDown");        
      } 
      else if (index == 10 && direction == "down") {
        $(".page__static__race").addClass("moveLeft");
        $(".page__static__race__red").removeClass("scrollSlide");
        $(".page__animation__race__red--1").velocity({left:"-30%", opacity:"1"}, {delay: 500, duration: 1500});
        
      } 
      else if (index == 11 && direction == "up") {
        $(".page__static__race").removeClass("moveLeft");
        $(".page__static__race__red").addClass("scrollSlide");
        
      } 
      else if (index == 11 && direction == "down") {
        $(".page__animation__race__red--1").velocity({left:"-15%"}, {delay: 500, duration: 1500});
        
      } 
      else if (index == 12 && direction == "up") {
        
      } 
      else if (index == 12 && direction == "down") {
        $(".page__animation__race__red--1").velocity({left:"-0%"}, {delay: 500, duration: 1500});
        
      } 
      else if (index == 13 && direction == "up") {
        
      } 
      else if (index == 13 && direction == "down") {
        $(".page__animation__race__red--1").velocity({left:"15%"}, {delay: 500, duration: 1500});
        
      } 
      else if (index == 14 && direction == "up") {
      } 
      else if (index == 14 && direction == "down") {
        $(".page__animation__race__red--1").velocity({left:"30%"}, {delay: 500, duration: 1500});
      } 
      else if (index == 15 && direction == "up") {
      } 
      else if (index == 15 && direction == "down") {
        $(".page__static__race__red").addClass("moveLeft");
        $(".page__static__tunnel").removeClass("scrollSlide");
        $(".page__animation__tunnel--1").velocity({left:"5%"}, {delay: 500, duration: 1500});        
        $(".page__animation__tunnel--2").addClass("animate--flashSlow");
      } 
      else if (index == 16 && direction == "up") {
        $(".page__animation__tunnel--2").removeClass("animate--flashSlow");
        $(".page__static__race__red").removeClass("moveLeft");
        $(".page__static__tunnel").addClass("scrollSlide");        
      } 
      else if (index == 16 && direction == "down") {
        $(".page__static__tunnel").addClass("moveLeft");
        $(".page__static__showroom").removeClass("scrollSlide");
        
        // Motor 1 IN
        $(".page__animation__showroom--1").velocity({left:"0%", opacity:"1"}, {delay: 500, duration: 1000});
        $(".year__item--1").velocity({opacity:"1"}, {delay: 1000, duration: 1000});
        $(".showroom__caption__item--1").velocity({opacity:"1"}, {delay: 1500, duration: 1000});
        
      } 
      else if (index == 17 && direction == "up") {
        $(".page__static__tunnel").removeClass("moveLeft");
        $(".page__static__showroom").addClass("scrollSlide");
        
        // Motor 1 OUT
        $(".page__animation__showroom--1").velocity({opacity:"0"}, {delay: 0, duration: 500});
        $(".year__item--1").velocity({opacity:"0"}, {delay: 0, duration: 1000});
        $(".showroom__caption__item--1").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        
      } 
      else if (index == 17 && direction == "down") {
        // Motor 1 OUT
        $(".page__animation__showroom--1").velocity({left:"0%", opacity:"0"}, {delay: 500, duration: 1000});
        $(".year__item--1").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        $(".showroom__caption__item--1").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        
        // Motor 2 IN
        $(".page__animation__showroom--2").velocity({left:"0%", opacity:"1"}, {delay: 500, duration: 1000});
        $(".year__item--2").velocity({opacity:"1"}, {delay: 1000, duration: 1000});
        $(".showroom__caption__item--2").velocity({opacity:"1"}, {delay: 1500, duration: 1000});
        
      } 
      else if (index == 18 && direction == "up") {
        // Motor 1 IN
        $(".page__animation__showroom--1").velocity({left:"0%", opacity:"1"}, {delay: 500, duration: 1000});
        $(".year__item--1").velocity({opacity:"1"}, {delay: 1000, duration: 1000});
        $(".showroom__caption__item--1").velocity({opacity:"1"}, {delay: 1500, duration: 1000});
        
        // Motor 2 OUT
        $(".page__animation__showroom--2").velocity({left:"0%", opacity:"0"}, {delay: 500, duration: 1000});
        $(".year__item--2").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        $(".showroom__caption__item--2").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        
      } 
      else if (index == 18 && direction == "down") {
        // Motor 2 OUT
        $(".page__animation__showroom--2").velocity({left:"0%", opacity:"0"}, {delay: 500, duration: 1000});
        $(".year__item--2").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        $(".showroom__caption__item--2").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        
        // Motor 3 IN
        $(".page__animation__showroom--3").velocity({left:"0%", opacity:"1"}, {delay: 500, duration: 1000});
        $(".year__item--3").velocity({opacity:"1"}, {delay: 1000, duration: 1000});
        $(".showroom__caption__item--3").velocity({opacity:"1"}, {delay: 1500, duration: 1000});
      } 
      else if (index == 19 && direction == "up") {
        // Motor 2 IN
        $(".page__animation__showroom--2").velocity({left:"0%", opacity:"1"}, {delay: 500, duration: 1000});
        $(".year__item--2").velocity({opacity:"1"}, {delay: 1000, duration: 1000});
        $(".showroom__caption__item--2").velocity({opacity:"1"}, {delay: 1500, duration: 1000});
        
        // Motor 3 OUT
        $(".page__animation__showroom--3").velocity({left:"0%", opacity:"0"}, {delay: 500, duration: 1000});
        $(".year__item--3").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        $(".showroom__caption__item--3").velocity({opacity:"0"}, {delay: 500, duration: 1000});
      } 
      else if (index == 19 && direction == "down") {
        // Motor 3 OUT
        $(".page__animation__showroom--3").velocity({left:"0%", opacity:"0"}, {delay: 500, duration: 1000});
        $(".year__item--3").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        $(".showroom__caption__item--3").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        
        // Motor 4 IN
        $(".page__animation__showroom--4").velocity({left:"0%", opacity:"1"}, {delay: 500, duration: 1000});
        $(".year__item--4").velocity({opacity:"1"}, {delay: 1000, duration: 1000});
        $(".showroom__caption__item--4").velocity({opacity:"1"}, {delay: 1500, duration: 1000});
      } 
      else if (index == 20 && direction == "up") {
        // Motor 3 IN
        $(".page__animation__showroom--3").velocity({left:"0%", opacity:"1"}, {delay: 500, duration: 1000});
        $(".year__item--3").velocity({opacity:"1"}, {delay: 1000, duration: 1000});
        $(".showroom__caption__item--3").velocity({opacity:"1"}, {delay: 1500, duration: 1000});
        
        // Motor 4 OUT
        $(".page__animation__showroom--4").velocity({left:"0%", opacity:"0"}, {delay: 500, duration: 1000});
        $(".year__item--4").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        $(".showroom__caption__item--4").velocity({opacity:"0"}, {delay: 500, duration: 1000});
      } 
      else if (index == 20 && direction == "down") {
        // Motor 4 OUT
        $(".page__animation__showroom--4").velocity({left:"0%", opacity:"0"}, {delay: 500, duration: 1000});
        $(".year__item--4").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        $(".showroom__caption__item--4").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        
        // Motor 5 IN
        $(".page__animation__showroom--5").velocity({left:"0%", opacity:"1"}, {delay: 500, duration: 1000});
        $(".page__animation__showroom--5-light").velocity({left:"0%", opacity:"1"}, {delay: 1500, duration: 1000});
        $(".year__item--5").velocity({opacity:"1"}, {delay: 1000, duration: 1000});
        $(".showroom__caption__item--5").velocity({opacity:"1"}, {delay: 1500, duration: 1000});
      } 
      else if (index == 21 && direction == "up") {
        // Motor 4 IN
        $(".page__animation__showroom--4").velocity({left:"0%", opacity:"1"}, {delay: 500, duration: 1000});
        $(".year__item--4").velocity({opacity:"1"}, {delay: 1000, duration: 1000});
        $(".showroom__caption__item--4").velocity({opacity:"1"}, {delay: 1500, duration: 1000});
        
        // Motor 5 OUT
        $(".page__animation__showroom--5").velocity({left:"0%", opacity:"0"}, {delay: 500, duration: 1000});
        $(".page__animation__showroom--5-light").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        $(".year__item--5").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        $(".showroom__caption__item--5").velocity({opacity:"0"}, {delay: 500, duration: 1000});
      } 
      else if (index == 21 && direction == "down") {
        // Motor 5 OUT
        $(".page__animation__showroom--5").velocity({left:"0%", opacity:"0"}, {delay: 500, duration: 1000});
        $(".page__animation__showroom--5-light").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        $(".year__item--5").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        $(".showroom__caption__item--5").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        
      } 
      else if (index == 22 && direction == "up") {
        // Motor 5 IN
        $(".page__animation__showroom--5").velocity({left:"0%", opacity:"1"}, {delay: 500, duration: 1000});
        $(".page__animation__showroom--5-light").velocity({left:"0%", opacity:"1"}, {delay: 1500, duration: 1000});
        $(".year__item--5").velocity({opacity:"1"}, {delay: 1000, duration: 1000});
        $(".showroom__caption__item--5").velocity({opacity:"1"}, {delay: 1500, duration: 1000});
        
      } 
      else if (index == 22 && direction == "down") {
        // Motor 6 IN
        $(".page__animation__showroom--6").velocity({left:"0%", opacity:"1"}, {delay: 500, duration: 1000});
        $(".page__animation__showroom--6-light").velocity({left:"0%", opacity:"1"}, {delay: 1500, duration: 1000});
        $(".year__item--6").velocity({opacity:"1"}, {delay: 1000, duration: 1000});
        $(".showroom__caption__item--6").velocity({opacity:"1"}, {delay: 1500, duration: 1000});
        
      } 
      else if (index == 23 && direction == "up") {
        // Motor 6 OUT
        $(".page__animation__showroom--6").velocity({left:"0%", opacity:"0"}, {delay: 500, duration: 1000});
        $(".year__item--6").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        $(".page__animation__showroom--6-light").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        $(".showroom__caption__item--6").velocity({opacity:"0"}, {delay: 500, duration: 1000});
      
      } 
      else if (index == 23 && direction == "down") {
        // Motor 6 OUT
        $(".page__animation__showroom--6").velocity({left:"0%", opacity:"0"}, {delay: 500, duration: 1000});
        $(".year__item--6").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        $(".page__animation__showroom--6-light").velocity({opacity:"0"}, {delay: 500, duration: 1000});
        $(".showroom__caption__item--6").velocity({opacity:"0"}, {delay: 500, duration: 1000});
      } 
      else if (index == 24 && direction == "up") {
        // Motor 6 IN
        $(".page__animation__showroom--6").velocity({left:"0%", opacity:"1"}, {delay: 500, duration: 1000});
        $(".page__animation__showroom--6-light").velocity({left:"0%", opacity:"1"}, {delay: 1500, duration: 1000});
        $(".year__item--6").velocity({opacity:"1"}, {delay: 1000, duration: 1000});
        $(".showroom__caption__item--6").velocity({opacity:"1"}, {delay: 1500, duration: 1000});
      } 
      else if (index == 24 && direction == "down") {
      
      } 
      else if (index == 25 && direction == "up") {
      
      } 
      else if (index == 25 && direction == "down") {
      
      } 
      else if (index == 26 && direction == "down") {
      
      } 
      else if (index == 30 && direction == "up") {
      
      } 
      else if (index == 30 && direction == "down") {
      
      } 
      else if (index == 31 && direction == "up") {
      
      } 
      else if (index == 31 && direction == "down") {
      
      } 
      else if (index == 32 && direction == "up") {
      
      } 
      else if (index == 32 && direction == "down") {
      
      } 
      else if (index == 33 && direction == "up") {
      
      }
    },

  });

  // Picture element HTML5 shiv
  document.createElement("picture");
});

// Mobile Version
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  
} else {
  $(".social__item--wa").hide();
}

// Adding Arman Js
let modalsbtn = document.querySelectorAll('.arman-center img');
let modal = document.querySelectorAll('.arman-modal');
let close = document.querySelectorAll('.close')

for(let i=1; i < modalsbtn.length; i++){
    modalsbtn[i].addEventListener('click', ()=>{
        modal[i-1].style.display = 'block'
    });
}

for(let i = 0; i<close.length; i++){
    close[i].addEventListener('click', ()=>{
        modal[i].style.display = 'none'
    });
}

//showroom

let plus = document.querySelectorAll('.plus')
let heading = document.querySelectorAll('.show')
let modale = document.querySelectorAll('.modal24')
let tutup = document.querySelectorAll('.tutup')
let dot = document.querySelectorAll('.dot')

for(let i=0; i < plus.length; i++){
    plus[i].addEventListener('mouseover', ()=>{
        heading[i].style.display = 'block'
        plus[i].style.display = 'none'
    });

    heading[i].addEventListener('mouseleave', ()=>{
        plus[i].style.display = 'block'
        heading[i].style.display = 'none'
    });

    heading[i].addEventListener('click', ()=>{
        modale[i].style.display = 'block'
    });

    tutup[i].addEventListener('click', ()=>{
        modale[i].style.display = 'none'
    })
}

//slider
let wrap = document.querySelectorAll('.slide-wrap')
let count = 0;
for(let i=0; i<dot.length; i++){
    dot[i].addEventListener('click', ()=>{
        count = i;
        console.log(count)
        for(let j=0; j<dot.length; j++){
            dot[j].classList.remove('active')
        }
        dot[count].classList.add('active')

        if(count == 0){
            wrap[0].style.left = '50%';
            wrap[1].style.left = '150%'
            wrap[2].style.left = '150%'
        }else if(count == 1){
            wrap[0].style.left = '-150%';
            wrap[1].style.left = '50%'
            wrap[2].style.left = '150%'
        }else if(count == 2){
            wrap[1].style.left = '-150%'
            wrap[0].style.left = '-150%';
            wrap[2].style.left = '50%'
        }
       
    })
}

