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
  function locomotiveanimation(){
    console.clear();

gsap.registerPlugin(ScrollTrigger);


// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

  }
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
        duration: 0.2,
        display:"block",
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

function page2animation(){
var rightelem=document.querySelectorAll(".right-elem")
rightelem.forEach(function(e){
    e.addEventListener("mouseenter",function(dets){
gsap.to(e.childNodes[3],{
    opacity:1,
    scale:1
})

    })
    e.addEventListener("mouseleave",function(dets){
gsap.to(e.childNodes[3],{
    opacity:0,
    scale:0
})
    })
    e.addEventListener("mousemove",function(dets){
        gsap.to(e.childNodes[3],{
x:dets.x-e.getBoundingClientRect().x-35,
y:dets.y-e.getBoundingClientRect().y-120,

        })
     
    })
})
}

function page3animation(){
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
})
}
function page6animtion(){
 var section=document.querySelectorAll(".sec-right")

section.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity=1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity=0
        elem.childNodes[3].load()
    })
})
}
function page7animation(){
gsap.from(".btm7-parts h4",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:".btm7-parts",
        scroller:"#main",
        start:"top 80%",
        end:"top 10%",
        scrub:true,
    }
})
}
function loadingAnimation(){
    var tl= gsap.timeline()
tl.from("#page1",{
    opacity:0,
    duration:0.2,
    delay:0.2
})
tl.from("#page1",{
    transform:"scaleX(0.7) scaleY(0.2)",
    borderRadius:"150px",
    duration:2,
    ease:"expo.out"
})
tl.from("nav",{
    opacity:0,
    delay:0.23
})
tl.from("#page1 h1,#page1 p ,#page1 div",{
    opacity:0,
    duration:0.5,
    stagger:0.2
})
}
locomotiveanimation()
page2animation()
animation();
page3animation()
page6animtion()
page7animation()
loadingAnimation()