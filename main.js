window.onload = () => {
  const transition_el = document.querySelector(".transition");
  const anchors = document.querySelectorAll(".link");
  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 500);
  for (let i = 0; i < anchors.length; i++) {
    let anchor = anchors[i];
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;
      target = "more.html";

      transition_el.classList.add("is-active");
      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  }
};
