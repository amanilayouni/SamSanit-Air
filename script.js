
window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .he2').classList.add('active');
  }else{
    document.querySelector('.header .he2').classList.remove('active');
  }

}
window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .he2').classList.add('active');
  }else{
    document.querySelector('.header .he2').classList.remove('active');
  }

  fadeOut();

}

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop:true,
  freeMode: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
 

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});



var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  loop:true,
  freeMode: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
 
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});





function myFunction() {
  var x = document.getElementById("mytopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

searchForm = document.querySelector('.search-form');
AOS.init();



