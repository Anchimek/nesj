const header = document.querySelector('.header')
const main = document.querySelector('.main-content')
const menu = document.querySelector('.header-menu--nav-mobile')
const burger = document.querySelector('.header-menu--burger')

burger.addEventListener('click', 
() => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})

menu.addEventListener('click',
() => {
    burger.classList.toggle('active')   
    menu.classList.toggle('active')
})

main.addEventListener('scroll', () => {
   if (main.scrollTop > 50) {
       header.classList.add('active')
       burger.classList.remove('active')
       menu.classList.remove('active') 
    } else {
       header.classList.remove('active')
    }
})
