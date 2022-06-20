let cpt = 0
let timer, elements, slides, slideWidth

window.onload = () => {
    const diapo = document.querySelector(".diapo")

    elements = document.querySelector(".elements")

    slides = Array.from(elements.children)

    slideWidth = diapo.getBoundingClientRect().width

    let next = document.querySelector("#nav-droite")
    let prev = document.querySelector("#nav-gauche")

    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)

    timer = setInterval(slideNext, 4000)

    diapo.addEventListener("mouseover", stopTimer)
    diapo.addEventListener("mouseout", startTimer)

    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width
        slideNext()
    })
}

function slideNext(){
    cpt++

    if(cpt == slides.length){
        cpt = 0
    }

    let decal = -slideWidth * cpt
    elements.style.transform = `translateX(${decal}px)`
}

function slidePrev(){
    cpt--

    if(cpt < 0){
        cpt = slides.length - 1
    }

    let decal = -slideWidth * cpt
    elements.style.transform = `translateX(${decal}px)`
}

function stopTimer(){
    clearInterval(timer)
}

function startTimer(){
    timer = setInterval(slideNext, 4000)
}