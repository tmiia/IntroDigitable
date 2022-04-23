document.addEventListener("click", introAnimation())


function introAnimation() {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  let i = 0;
  while (i<1){
    tl.to("#full-video", {opacity: 0, duration: 0.3, stagger: 0.25})
    tl.to(".col-left", {y: "-100%", duration: 1, delay: 1.3})
    tl.to(".col-right", {y: "100%", duration: 1}, "-=1")
    i++
  }
}
