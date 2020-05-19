// document.addEventListener('DOMContentLoaded', () => {
$(document).ready(() => {
    // функцию, что при клике на “Выбрать тур” , 
    // “Получить консультацию” или “Расписание туров” (все 3 элемента)  
    // подложка (класс overlay) медленно появлялась на странице 
    // (через прозрачность), а само модальное окно (класс modal) 
    // плавно выезжало сверху
    // Написать функцию, что при клике на крестик всё происходило бы 
    // наоборот: подложка исчезала, модальное окно уезжало вверх
    $('.main_btna').on('click', (e) => {
        showModal();
    });
    $('.main_btn').on('click', (e) => {
        showModal();
    });
    $('#sheldure').on('click', (e) => {
        showModal();
    });
    $('.close').on('click', () => {
        hideModal();
    })

    function showModal() {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    }
    function hideModal() {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp('slow');
    }
})