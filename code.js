let typed = new Typed(".changer",{
    strings: ["A Developer.", "A Designer."],
    backSpeed:100,
    typeSpeed:100,
    backDelay: 800,
    loop: true
})

let scrollArea = document.getElementById("kid");

let a = document.getElementsByClassName("listItems");

let st1 = document.styleSheets[0].cssRules[6];
let st2 = document.styleSheets[0].cssRules[7];
let st3 = document.styleSheets[0].cssRules[8];
let st4 = document.styleSheets[0].cssRules[9];

let navbar = document.getElementById("navId");

scrollArea.addEventListener("scroll",()=>{
    if(scrollArea.scrollTop >5){
        navbar.style.backgroundColor = "rebeccapurple"
    }
    if(scrollArea.scrollTop <5){
        navbar.style.backgroundColor = "transparent"
    }
})

scrollArea.addEventListener("scroll",()=>{
    if(scrollArea.scrollTop<580){
        st1.style.transform = "scaleX(1)";
        st2.style.transform = "scaleX(0)";
        st3.style.transform = "scaleX(0)";
        st4.style.transform = "scaleX(0)";
    }
    if(scrollArea.scrollTop>580 && scrollArea.scrollTop<1230){
        st1.style.transform = "scaleX(0)";
        st2.style.transform = "scaleX(1)";
        st3.style.transform = "scaleX(0)";
        st4.style.transform = "scaleX(0)";
    }
    if(scrollArea.scrollTop>1230 && scrollArea.scrollTop<1950){
        st1.style.transform = "scaleX(0)";
        st2.style.transform = "scaleX(0)";
        st3.style.transform = "scaleX(1)";
        st4.style.transform = "scaleX(0)";
    }
    if(scrollArea.scrollTop>1950){
        st1.style.transform = "scaleX(0)";
        st2.style.transform = "scaleX(0)";
        st3.style.transform = "scaleX(0)";
        st4.style.transform = "scaleX(1)";
    }
})

// let home = 0;
// let projects = 742.4000244140625;
// let skills = 1484.800048828125;
// let contact = 2227.199951171875;

let projects = document.getElementsByClassName("projectsItems");
let description = document.getElementsByClassName("desc");

projects[0].addEventListener("mouseenter",()=>{
    description[0].style.right = "-3%";
})

projects[0].addEventListener("mouseout",()=>{
    description[0].style.right = "13%";
})

projects[1].addEventListener("mouseenter",()=>{
    description[1].style.left = "-3%";
})

projects[1].addEventListener("mouseout",()=>{
    description[1].style.left = "13%";
})

projects[2].addEventListener("mouseenter",()=>{
    description[2].style.right = "-3%";
})

projects[2].addEventListener("mouseout",()=>{
    description[2].style.right = "13%";
})

projects[3].addEventListener("mouseenter",()=>{
    description[3].style.left = "-3%";
})

projects[3].addEventListener("mouseout",()=>{
    description[3].style.left = "13%";
})
