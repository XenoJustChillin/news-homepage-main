let openHam = document.querySelector('.open-ham')
let closeHam = document.querySelector('.close-ham')
let menu = document.querySelector('.menu-container')

openHam.addEventListener('click', () => {
    menu.style.right = '-100%';
})

closeHam.addEventListener('click', () => {
    menu.style.right = '0'
})
