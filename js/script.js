window.addEventListener("load", function () {
  // 언어 펼침 기능
  const langWorld = this.document.querySelector(".language-world");
  const language = this.document.querySelector(".language");
//   const languageLi = this.document.querySelector(".language li")
  langWorld.addEventListener("click", function () {
    language.classList.toggle("language-box-active")
  });
});
