const burger = document.querySelector('.burger');
const deroulant = document.querySelector('.burger-deroulant');



burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    deroulant.classList.toggle('active');
});
