//Получить кнопки
let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.querySelector('div  .optionalexpenses-btn'),
    countBudgetBtn = document.querySelector('div  .count-budget-btn'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", "30000");

    while (money == '' || money == null || isNaN(money)) {
        money = prompt("Ваш бюджет на месяц?", "30000");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();

    let userDate = new Date(Date.parse(time));
    yearValue.value = userDate.getFullYear();
    monthValue.value = userDate.getMonth() + 1;
    dayValue.value = userDate.getDate();
})

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let expense = expensesItem[i].value,
            cost = expensesItem[++i].value;

        if (typeof (expense) != null && typeof (cost) != null
            && expense != '' && cost != '' && expense.length < 50) {
            appData.expenses[expense] = cost;
            sum += +cost;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
})

optionalExpensesBtn.addEventListener('click', function () {
    let sum = 0;
    let sumOptionalExpenses = optionalExpensesItem.forEach(item =>
        sum += +item.value);
    optionalExpensesValue.textContent = sum;
})

countBudgetBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 100) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
})

incomeItem.addEventListener('input', function (event) {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
})

savings.addEventListener('click', function () {
    appData.savings != appData.savings;
})

sumValue.addEventListener('input', function () {
    if ( checkSavings.checked == true) {
        let sum = + sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if ( checkSavings.checked == true) {
        let sum = + sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: parseInt(money),
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
};

