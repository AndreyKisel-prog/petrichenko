//Получить кнопку "Начать расчет" через id
let startCount = document.getElementById('start');

//Получить все блоки в правой части программы через классы 
//(которые имеют класс название-value, начиная с и заканчивая 

//console.log ( document.querySelectorAll('.*value')[0].innerHTML );


//Получить поля(input) c обязательными расходами через класс. 
//(class=”expenses-item”)
let expensesItemInput = document.querySelectorAll('input .expenses-item');

//Получить кнопки “Утвердить” и “Рассчитать” через Tag, 
//каждую в своей переменной. 

let expensesItemBtn = document.querySelector('div .expenses-item-btn');
let optionalExpensesBtn = document.querySelector('div  .optionalexpenses-btn');
let CountBudgetBtn = document.querySelector('div  .count-budget-btn');


// Получить поля для ввода необязательных расходов 
//(optionalexpenses-item) при помощи querySelectorAll
document.querySelectorAll('.optionalexpenses-item');

//Получить оставшиеся поля через querySelector 
//(статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

//статьи возможного дохода
let chooseIncome = document.querySelector('div .choose-income');
//чекбокс
let savings = document.querySelector('#savings');
//сумма
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
//год, месяц, день
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');


