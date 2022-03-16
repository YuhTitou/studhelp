const m1 = document.querySelector('.m1');
const a1 = document.querySelector('.a1');
const m2 = document.querySelector('.m2');
const a2 = document.querySelector('.a2');
const m3 = document.querySelector('.m3');
const a3 = document.querySelector('.a3');
const m4 = document.querySelector('.m4');
const a4 = document.querySelector('.a4');
const m5 = document.querySelector('.m5');
const a5 = document.querySelector('.a5');

m1.addEventListener('click', () => {
    a1.classList.toggle('article-active');
});
m2.addEventListener('click', () => {
    a2.classList.toggle('article-active');
});
m3.addEventListener('click', () => {
    a3.classList.toggle('article-active');
});
m4.addEventListener('click', () => {
    a4.classList.toggle('article-active');
});
m5.addEventListener('click', () => {
    a5.classList.toggle('article-active');
});