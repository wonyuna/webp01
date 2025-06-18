// 다크모드 토글
document.querySelector('.theme-switch').onclick = () => {
  const theme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', theme);
};

// GSAP 애니메이션 시퀀스
const tl = gsap.timeline({ defaults: {duration: 1, ease: "power3.out"} });
tl.to('.hero h1', {opacity:1, y:0})
  .to('.hero p', {opacity:1, y:0}, "-=0.5")
  .to('.btn', {opacity:1, y:0}, "-=0.5");

// Barba.js 페이지 전환 (다중 페이지 준비)
barba.init({
  transitions: [{
    name: 'fade',
    leave({ current }) { return gsap.to(current.container, { opacity: 0 }); },
    enter({ next }) { return gsap.from(next.container, { opacity: 0 }); }
  }]
});
