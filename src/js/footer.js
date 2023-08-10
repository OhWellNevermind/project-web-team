// ---------------------Рух іконки---------------------------------------------

const iconHeart = document.querySelectorAll('.footer-btn');
// при наведенні миші
iconHeart.forEach(button => {
    button.addEventListener('mouseover', () => {
        const icon = button.querySelector('.heart-icon');
        icon.classList.add('moving');
    }
    );
// коли прибираємо мишу   
    button.addEventListener('mouseout', () => {
        const icon = button.querySelector('.heart-icon');
        icon.classList.remove('moving');
    }
    );
}
);