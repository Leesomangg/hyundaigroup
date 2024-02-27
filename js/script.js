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
  });
  // ============================== 비주얼 기능
  // 비디오 항목 체크 (video 태그로 파악)
  // 모든비디오 태그를 변수에 저장
  let videos = this.document.querySelectorAll(".swVisual video");
  // console.log(video)
  // 비디오 재생 시간 체크
  // 비디오의 재생 시간을 보관할 배열을 생성
  let videosTimeArr = [];
  //비디오 재생 시간을 배열에 저장하는 반복문을 작성
  for (let i = 0; i < videos.length; i++) {
    // console.log(videos[0].duration);
    // Math.ceil() 함수는 주어진 숫자를 올림하여 반환
    videosTimeArr[i] = Math.ceil(videos[i].duration);
    // console.log(videosTimeArr[0])
  }
  // 첫번째 비디오 자동 실행
  let videoIndex = 0;
  videos[videoIndex].play();
  // visual slide
  // swiper 슬라이드 초기화
  let swVisual = new Swiper(".swVisual", {
    loop: true,
  });
  // 슬라이드 변경 이벤트 시 처리
  swVisual.on("slideChange", function () {
    // 진행중인 비디오 멈춤
    videos[videoIndex].pause();
    // 다음 화면 보이는 swiper 슬라이드 번호
    // console.log(swVisual.activeIndex);
    // console.log(swVisual.realIndex);
    videoIndex = swVisual.realIndex;
    // 다음 비디오를 재생
    // 처음으로 비디오 플레이헤드 이동
    // currentTime 속성 HTML5 <video>요소에서 사용되는 속성
    // 현재 비디오 재생 위치를 나타냄
    // 이 속성을 조작하여 재생 위치를 변경
    // 다음 슬라이드로 이동할때 마다 비디오를 처음부터 재생하기 위해서
    videos[videoIndex].currentTime = 0;
    const playPromise = videos[videoIndex].play();
    if (playPromise !== undefined) {
      playPromise.then((_) => {}).catch((error) => {});
    }
    clearInterval(videoTimer);
    videoReset()
  });
  // 비디오 영상 플레이가 끝나면 다음 슬라이드로 이동
  // 늘어나는 흰색 bar 기능 추가
  let bars = this.document.querySelectorAll(".bar");
  let barScaleW = 0;
  // 타이머 생성
  // 비디오 타이머 초기화 및 설정
  let videoTimer;
  // 비디오 타이머를 설정하고 초기화 하는 함수를 정의하고 호출
  function videoReset() {
    // 처음에는 0% 로 만든다
    barScaleW = 0;
    // 최초의 bar를 초기화 한다
    for (let i = 0; i < bars.length; i++) {
      let tag = bars[i];
      tag.style.width = `${barScaleW}%`;
    }
    // 활성화 된 bar 클래스 선택
    let activeBar = bars[videoIndex];
    // console.log(activeBar);
    // 일단 타이머를 청소한다.
    // setTimeout : 1번 실행 clearTimeout()
    // setInterval : 시간마다 연속 실행 clearInterval()
    clearTimeout(videoTimer);
    // 비디오 플레이 시간
    let vidioTime = videosTimeArr[videoIndex];
    videoTimer = setInterval(() => {
      barScaleW++;
      activeBar.style.width = `${barScaleW}%`;
      if (barScaleW >= 100) {
        swVisual.slideNext();
        clearInterval(videoTimer);
        videoReset();
      }
    }, vidioTime * 10);
  }
  videoReset();
  // .visual-control > li 클릭했을 때 해당 페이지 활성화하기
  const visualControlLi = this.document.querySelectorAll(
    ".visual-control > li"
  );
  visualControlLi.forEach((item, index) => {
    item.addEventListener("click", function () {
      videoIndex = index;
      swVisual.slideTo(videoIndex);
    });
  });
});
