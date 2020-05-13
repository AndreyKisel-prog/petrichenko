// добавляем пятый элемент
let fifthElem = document.createElement('li');
fifthElem.textContent = 'Пятый элемент';
fifthElem.classList.add('menu-item');
document.querySelector('nav ul').appendChild(fifthElem);


// меняем местами второй и четвертый пункт.
let secondElem = document.querySelectorAll('nav ul li')[1]; 
let thirdElem = document.querySelectorAll('nav ul li')[2];
// изымаем второй элемент
document.querySelector('nav ul').removeChild(secondElem);
// вставляем изьятый второй-третий элемент после текущего второго
//thirdElem.insertAdjacentHTML("afterend", secondElem);
//другой способ
// document.querySelectorAll('nav ul li')[2].before(secondElem);
document.querySelectorAll('nav ul li')[1].after(secondElem);
// поменять картинку фона
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

//Поменять заголовок, добавить слово "подлинную" 
//( Получится - "Мы продаем только подлинную технику Apple")
let title = document.getElementsByClassName('title')[0];
title.innerText = 'Мы продаем только подлинную технику Apple';

// удалить рекламу
document.querySelector('.adv').remove();

//Спросить у пользователя отношение к технике apple 
//и записать ответ в блок на странице с id "prompt"

document.querySelector('.prompt').textContent = prompt('Как вы относитесь с технике Apple?', '');







