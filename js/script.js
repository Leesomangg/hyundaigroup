window.addEventListener("load", function () {
  // 언어 펼침 기능
  const langWord = document.querySelector(".language-word");
  const language = document.querySelector(".language");
  const languageLi = document.querySelector(".language li");
  langWord.addEventListener("click", function () {
    language.classList.toggle("language-box-active");
  });
  // css의 transition: all 0.5s; 자바스크립트 기능
  setTimeout(function () {
    languageLi.style.transition = "all 0.5s";
  });
  // ================================ 헤더 기능
  // 스크롤 기능
  // 스크롤바의 상단 위치
  let scy = 0;
  let scActive = 50;
  scy = window.document.documentElement.scrollTop;
  let header = document.querySelector(".header");
  let logoW = document.querySelector(".logo-w");
  let logoG = document.querySelector(".logo-g");
  // 마우스 호버 했을때
  header.addEventListener("mouseenter", () => {
    header.classList.add("header-active");
    logoW.style.display = "none";
    logoG.style.display = "block";
  });
  header.addEventListener("mouseleave", () => {
    header.classList.remove("header-active");
    logoW.style.display = "block";
    logoG.style.display = "none";
  });
  // 스크롤 될때 헤더
  window.addEventListener("scroll", () => {
    scy = window.document.documentElement.scrollTop;
    if (scy > scActive) {
      header.classList.add("header-active");
      logoW.style.display = "none";
      logoG.style.display = "block";
    } else {
      header.classList.remove("header-active");
      logoW.style.display = "block";
      logoG.style.display = "none";
    }
  });
  // =================================== 메뉴 기능
  let nav = document.querySelector(".nav");
  let btMenu = document.querySelector(".bt-menu");
  let navClose = document.querySelector(".nav-close");
  btMenu.addEventListener("click", () => {
    nav.classList.add("nav-active");
  });
  navClose.addEventListener("click", function () {
    nav.classList.remove("nav-active");
  });
  // nav 영역에서 벗어나면 메뉴가 사라지는 기능
  nav.addEventListener("mouseleave", () => {
    nav.classList.remove("nav-active");
  })
  // ============================== 비주얼 기능
  // visual slide
  let swVisual = new Swiper(".swVisual", {
    loop: true,
  })
});
