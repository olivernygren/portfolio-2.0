const header = document.getElementById('header');
const scrollTopBtn = document.getElementById('top-btn');

window.onscroll = function() {

    let top = window.scrollY;

    if (top >= 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

    if (top >= 250) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
}