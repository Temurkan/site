window.addEventListener('load', () => {
    document.querySelector('#preloader').classList.add('hide-preloader')
// VARIABLES

// slider
const slider = document.querySelector('.slider')
const sliderItems = document.querySelectorAll('.slider-item') 
// buttons
const upArrow = document.querySelector('.up')
const downArrow = document.querySelector('.down')

// dots
const dots = document.querySelectorAll('.indicators li') 

let imgIndex = 0
let timer = null
// EVENTS 
upArrow.addEventListener('click', prevBtn)
downArrow.addEventListener('click', nextBtn)
slider.addEventListener('transitionend', slide)

dots.forEach(function (indicator, index) {
    indicator.addEventListener('click', function() {
        imgIndex = index
        removeActives()
        slider.style.transform = 'translateY(' + (imgIndex) * '-20' + '%)'
        indicator.classList.add('active')
    })
})

slider.addEventListener('mouseover', function() { clearTimeout(timer) })
slider.addEventListener('mouseleave', function() {
    clearTimeout(timer)
    autoplay()
})

// FUNCTIONS
function autoplay() {
    timer = setTimeout(nextBtn, 7000)
}

autoplay()

function removeActives() {
    for(let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active')
    }
    clearTimeout(timer)
    autoplay()
}

function prevBtn() {
    removeActives()
    imgIndex = (imgIndex > 0) ? imgIndex - 1 : 0
    slider.style.transform = 'translateY(' + (imgIndex) * '-20' + '%)'
    sliderItems[imgIndex].classList.add('active')
    dots[imgIndex].classList.add('active')
    if(imgIndex === 0) {
        removeActives()
        slider.style.transform = 'translateY(' + '-80' + '%)'
        imgIndex = 4
        dots[imgIndex].classList.add('active')
    }
}

function nextBtn() {
    removeActives()
    imgIndex = (imgIndex < 5) ? imgIndex + 1 : 5
    slider.style.transform = 'translateY(' + (imgIndex) * '-20' + '%)'
    sliderItems[imgIndex].classList.add('active')
    dots[imgIndex].classList.add('active')
    if(imgIndex > 4) {
        removeActives()
        slider.style.transform = 'translateY(' + '0' + '%)'
        imgIndex = 0
        dots[imgIndex].classList.add('active')
    }
}

function slide() {
        
}

})