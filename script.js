
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "30000");
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (money == '' || money == null || isNaN(money)) {
        money = prompt("Ваш бюджет на месяц?", "30000");
    }
}
start();

let appData = {
    budget: parseInt(money),
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses() {
        for (let i = 0; i < 2; i++) {
            let expense = prompt("Введите обязательную статью расходов в этом месяце", "");
            let cost = +prompt("Во сколько это обойдется?", '');

            if (typeof (expense) != null && typeof (cost) != null
                && expense != '' && cost != '' && expense.length < 50) {
                appData.expenses[expense] = cost;
            } else {
                i = i - 1;
            }
        }
    },
    detectBudget() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Бюджет на 1 день:' + appData.moneyPerDay + "рублей");
    },
    detectLevel() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 100) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", '');
            let percent = +prompt("Под какой процент?", '');
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с Вашего депозита:' + appData.monthIncome)
        }
    },

    chooseIncome() {
        let items = prompt('Что принесет дополнительный доход?(перечислите через запятую)', '');
        let arr = items.split(',');
        arr.map( item => appData.income.push(item))
    }
};



appData.chooseExpenses();
appData.detectBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseIncome();

