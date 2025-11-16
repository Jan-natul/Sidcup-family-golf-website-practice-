var crsr = document.querySelector("#cursor");
var blr = document.querySelector("#cursor-blur");
var text = document.querySelector("#page4 h1")

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blr.style.left = dets.x - 200 + "px";
  blr.style.top = dets.y - 200 + "px";
});


var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
        
    });
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid rgb(170, 237, 37)";
        crsr.style.backgroundColor = "rgb(170, 237, 37)";
    });
});
var crdall = document.querySelectorAll("#page4 .crd");
crdall.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 7;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
        text.style.webkitTextStroke = "1px rgb(170, 237, 37)";
    });
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid rgb(170, 237, 37)";
        crsr.style.backgroundColor = "rgb(170, 237, 37)";
        text.style.webkitTextStroke = "1px #fff";
    });
});

var all = document.querySelectorAll("#footer #f2,#footer #f3,#footer #f4 h3");
all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid rgb(170, 237, 37)";
        crsr.style.backgroundColor = "rgb(170, 237, 37)";
    });
});

gsap.to("#nav",{
    backgroundColor:"#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    },
});

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    },
});

gsap.from("#about img,#about-us",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 60%",
        end: "top 58%",
        scrub:1
    }

});

gsap.from("#colon1",{
    y:-80,
    x:-80,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end: "top 45%",
        scrub:3
    }

})

gsap.from("#colon2",{
    y:80,
    x:80,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end: "top 45%",
        scrub:3
    }

})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end: "top 70%",
        scrub:3
    }

})

gsap.from("#photo #pic",{
    x:-50,
    scrollTrigger:{
        trigger:"#photo",
        scroller:"body",
        start:"top 75%",
        end: "top 70%",
        scrub:3
    }

})

gsap.from("#photo #info",{
    x:50,
    scrollTrigger:{
        trigger:"#photo",
        scroller:"body",
        start:"top 75%",
        end: "top 70%",
        scrub:3
    }

})
