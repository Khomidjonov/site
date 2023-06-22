VANTA.NET({
  el: "#header",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x0,
  points: 9.00,
  maxDistance: 21.00,
  spacing: 16.00
})

//   const btns = document.querySelector(".header__button");

//   for (let i = 0; i < btns.length; i++) {
//       const btn = btns[i];
//       window.addEventListener("mousemove", (e) => {
//           let x = e.pageX - btn.offsetLeft
//           let y = e.pageY - btn.offsetTop
//           btn.style.setProperty("--x", `${x}px`)
//           btn.style.setProperty("--y", `${y}px`)
//       })

//   }

let burgerMenu = document.querySelector(".burger__menu");
let navList = document.querySelector(".nav__list");
let headerCon = document.querySelector(".header__con");
let navLink = document.querySelectorAll(".nav__link")

burgerMenu.addEventListener("click", function () {
    headerCon.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    navList.classList.toggle("active");
})


for (let i = 0; i < navLink.length; i++) {
  const ele = navLink[i];
  ele.addEventListener("click", function () {
    navList.classList.toggle("active");
    headerCon.classList.toggle("active");
    burgerMenu.classList.toggle("active");
  })
}



let modalClose = document.querySelector(".modal__close");
let popup = document.querySelector(".popup");
let modal = document.querySelector(".modal");
let headerButton = document.querySelector(".header__button");
let wokrItemContentLink = document.querySelectorAll(".wokr__item-content-link");

for (let i = 0; i < wokrItemContentLink.length; i++) {
  const element = wokrItemContentLink[i];
  element.addEventListener("click",function () { 
    popup.classList.toggle("active");
  })
  
}

headerButton.addEventListener("click",function () { 
  popup.classList.toggle("active");
})


modalClose.addEventListener("click",function () { 
  popup.classList.toggle("active");
})

var swiper2 = new Swiper(".mySwiper2", {
  grabCursor: true,
  effect: "creative",
  dots: true,
  autoplay: true,
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
});

let skill = document.querySelector(".skill");
let frontLineHtml = document.querySelector(".skill__item-line-html-frontline");
let frontLineCss = document.querySelector(".skill__item-line-css-frontline");
let frontLineJs = document.querySelector(".skill__item-line-js-frontline");

window.addEventListener("scroll", function scroll() {
  if (window.scrollY > skill.offsetTop - skill.clientHeight) {
    frontLineHtml.classList.add("active");
    frontLineCss.classList.add("active");
    frontLineJs.classList.add("active");  
  }
})

let headerTitle = document.querySelector(".header__title");
let headerTitle1 = document.querySelector(".header__title1");

var typed2 = new Typed('#typed-text', {
  strings: ['3D визуализация','Графический дизайн','Лого дизайн','Разработка телеграм бот'],
  typeSpeed: 30,
  backSpeed: 20,
  loop: true
});