const tl = gsap.timeline({ defaults : {ease : 'power1.out'}})

// tl.to(".text-2", { y : "0%", duration: 1, stagger: 0.30 })
// tl.to(".slider", { y : "-100%", duration: 1.5, delay: 0.5 })
// tl.to(".intro", { y : "-100%", duration: 1, delay: 0.5 }, "-=1.5")
tl.to(".greetings", { x : "0%", duration: 1, stagger: 0.35 })