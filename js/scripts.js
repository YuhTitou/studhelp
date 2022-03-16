// Variables globales
    let compteur = 0 // Compteur qui permettra de savoir sur quelle slide nous sommes
    let timer, elements, slides, slideWidth, nb

window.onload = () => {
    const diapo = document.querySelector("#diaporama") // On récupère le conteneur principal du diaporama
    elements = document.querySelector(".elements") // On récupère le conteneur de tous les éléments
    slides = Array.from(elements.children) // On récupère un tableau contenant la liste des diapos
    let b0 = document.querySelector(".element-1")     // On récupère les deux flèches
    let b1 = document.querySelector(".element-2")
    let b2 = document.querySelector(".element-3")

    b0.addEventListener("click", boutonN0)
    b1.addEventListener("click", boutonN1)
    b2.addEventListener("click", boutonN2)
    
    slideWidth = diapo.getBoundingClientRect().width // On calcule la largeur visible du diaporama
    
    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width
        slideNext()
    })
}

function boutonN0(){
    let decal = -slideWidth * 0
    elements.style.transform = `translateX(${decal}px)`
    stopTimer()
}
function boutonN1(){
    let decal = -slideWidth * 1
    elements.style.transform = `translateX(${decal}px)`
    stopTimer()
}
function boutonN2(){
    let decal = -slideWidth * 2
    elements.style.transform = `translateX(${decal}px)`
    stopTimer()
}


function slideNext() {
    // On incrémente le compteur
    compteur++

    // Si on dépasse la fin du diaporama, on "rembobine"
    if (compteur == slides.length) {
        compteur = 0
    }

    // On calcule la valeur du décalage
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}


function slidePrev() {
    // On décrémente le compteur
    compteur--

    // Si on dépasse le début du diaporama, on repart à la fin
    if (compteur < 0) {
        compteur = slides.length - 2
    }

    // On calcule la valeur du décalage
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}


timer = setInterval(slideNext, 6000)

diaporama.addEventListener("mouseover", stopTimer)
diaporama.addEventListener("mouseout", startTimer)

function stopTimer() {
    clearInterval(timer)
}
function startTimer() {
    timer = setInterval(slideNext, 6000)
}