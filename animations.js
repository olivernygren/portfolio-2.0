gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.intro-span', { 
  y: '0%',
  duration: 1,
  stagger: 0.25 
});

tl.to('.slider', { 
  y: '-100%', 
  duration: 1.5,
  delay: 0.4
});

tl.to('.intro', {
  y: '-100%',
  duration: 1
}, '-=1');

tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1})
tl.fromTo('.logo', {opacity: 0}, {opacity: 1, duration: 1}, '-=1')
tl.fromTo('.hero-animation', {opacity: 0}, {opacity: 1, duration: 1}, '-=.75')

gsap.from('.transition2', {
  scrollTrigger: {
    trigger: '.transition2',
    start: 'top bottom'
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})

gsap.from('.transition3', {
  scrollTrigger: {
    trigger: '.transition3',
    start: 'top bottom'
  },
  x: 200,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})

gsap.from('.transition4', {
  scrollTrigger: {
    trigger: '.transition4',
    start: 'top bottom'
  },
  x: -200,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3
})

gsap.from('.transition5', {
  scrollTrigger: {
    trigger: '.transition5',
    start: 'top bottom'
  },
  y: -50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.2
})