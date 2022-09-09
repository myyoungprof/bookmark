const bar = document.querySelector(".bar")
const displayNav = document.querySelector(".nav-body")
const moveNav = document.querySelector(".second")
const svg = document.querySelector(".svg")


let count = displayNav.clientHeight
bar.addEventListener("click", function(){
    displayNav.classList.toggle("workingNav")
    moveNav.classList.toggle("sec")
    svg.classList.toggle("Msec")
    // if(){}
})

window.addEventListener("scroll", function(){
    const scrollheight = window.pageYOffset;
    const navheight = displayNav.getBoundingClientRect().height
    if(scrollheight > navheight){
        displayNav.classList.remove("workingNav")
        moveNav.classList.remove("sec")
        svg.classList.remove("Msec")
    }
    // console.log("this is my name")
})


const simplebtn = document.querySelector(".simplebtn")
const speadybtn = document.querySelector(".speadybtn")
const easybtn = document.querySelector(".easybtn")
const slides1 = document.querySelector(".slides1")
const slides2 = document.querySelector(".slides2")
const slides3 = document.querySelector(".slides3")
const line = document.querySelector(".line")


simplebtn.addEventListener("click", function(){
    slides1.classList.remove("sd1")
    slides2.classList.add("sd2")
    slides3.classList.add("sd3")

    line.classList.add("move0")
    line.classList.remove("move1")
    line.classList.remove("move2")

   
})

speadybtn.addEventListener("click", function(){
    slides2.classList.remove("sd2")
    slides1.classList.add("sd1")
    slides3.classList.add("sd3")

    line.classList.remove("move0")
    line.classList.add("move1")
    line.classList.remove("move2")
})


easybtn.addEventListener("click", function(){
    slides3.classList.remove("sd3")
    slides2.classList.add("sd2")
    slides1.classList.add("sd1")

    line.classList.remove("move0")
    line.classList.remove("move1")
    line.classList.add("move2")
})



const btn = document.querySelectorAll(".btng")
const question = document.querySelectorAll(".question-info")


btn.forEach (function(change){
    change.addEventListener("click", function(e){
      const man = e.currentTarget.parentElement.nextElementSibling.nextElementSibling;
         console.log(man)
    
         question.forEach(function(items){
            console.log(items)
            if(items !== man){
          items.classList.remove("showMan")
            }
         })
         man.classList.toggle("showMan")
      })
    
    
    })