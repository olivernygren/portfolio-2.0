
let links = document.querySelectorAll('.mobile-nav-link')

for (i of links) {
  i.addEventListener('click', () => {
    mobileNav.classList.toggle('change');
  })
}