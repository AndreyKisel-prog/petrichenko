'use strict';

let expenses = {},
    optionalExpenses,
    income = [],
    budgetUser,
    savings;
let budget = prompt("Ваш бюджет на месяц?", "30000 рублей");
let today = prompt("Введите дату в формате YYYY-MM-DD", '2020-05-11');


let appData = {
    budgetUser: parseInt(budget, 10),
    timeData: today,
    expenses,
    income,
    savings: false,
};


console.log(budgetUser);

for (let i = 0; i < 2; i++) {
    let expense = prompt("Введите обязательную статью расходов в этом месяце", "");
    let cost = +prompt("Во сколько это обойдется?", '');
    expenses.expense = cost;
}

alert('Бюджет на 1 день:' + appData.budgetUser / 30 + "рублей");

