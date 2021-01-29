let scrollTopBtn = document.getElementById('top-btn');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
})

window.onscroll = function() {

  let top = window.scrollY;

  if (top >= 250) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

