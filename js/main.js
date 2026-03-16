import { renderList} from './components/renderList.js';

const burgerBtnEl = document.querySelector('.header__burger-btn');
const burgerMenuEl = document.querySelector('.header__burger-menu');
const borderBottomEl = document.querySelector('.header__line');

window.addEventListener('DOMContentLoaded', async () => {
    renderList();
});

burgerBtnEl.addEventListener('click', () => {
    burgerMenuEl.classList.toggle('header__burger-menu--active');
    burgerBtnEl.classList.toggle('header__burger-btn--active');
})
