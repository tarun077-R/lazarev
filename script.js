  //   function animation(){
// var nav=document.querySelector("nav")
// nav.addEventListener("mouseenter",function(){
//     var tl =gsap.timeline()
    
//     tl.to("#nav-bottom",{
// height:"21vh"
//     })
//     tl.to(".nav-part2  h5",{
//         display:"block",
//         duration:0.2
//     })
//      tl.to(".nav-part2 h5 span", {
//             y: 0,
//             stagger: {
//                 amount: 0.5
//             }
//         })
//     })
//     nav.addEventListener("mouseleave", function () {
//         let tl = gsap.timeline()
//         tl.to(".nav-part2 h5 span", {
//             y: 25,
//             stagger: {
//                 amount: 0.2
//             }
//         })
//         tl.to(".nav-part2 h5", {
//             display: "none",
//             duration: 0.1
//         })
//         tl.to("#nav-bottom", {
//             height: 0,
//             duration: 0.2
//         })
//     })
//   }
//   animation()
  
function animation() {
    const nav = document.querySelector("nav");
    const spans = document.querySelectorAll(".nav-part2 h5 span");
    const h5s = document.querySelectorAll(".nav-part2 h5");

    // Set initial states
    gsap.set(spans, { y: 25, autoAlpha: 0 }); //opacity:0
    gsap.set(h5s, { autoAlpha: 0 }); //opacity:0
    gsap.set("#nav-bottom", { height: 0 });

    // Timeline (only created once)
    const tl = gsap.timeline({ paused: true });

    tl.to("#nav-bottom", {
        height: "21vh",
        duration: 0.4,
        ease: "power2.out"
    });

    tl.to(h5s, {
        autoAlpha: 1,
        duration: 0.2
    }, "-=0.2"); //Start a little before the previous step ends ("-=0.2" means overlap)

    tl.to(spans, {
        y: 0,
        autoAlpha: 1,
        stagger: {
            amount: 0.5
        },
        duration: 0.3,
        ease: "power2.out"
    }, "-=0.2");

    // Event handlers
    nav.addEventListener("mouseenter", function () {
        tl.play();
    });

    nav.addEventListener("mouseleave", function () {
        tl.reverse();
    });
}

animation();
