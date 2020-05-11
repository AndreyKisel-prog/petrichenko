let money = prompt("Ваш бюджет на месяц?", "30000 рублей"),
    time = prompt("Введите дату в формате YYYY-MM-DD", '2020-05-11');

let appData = {
    budget: parseInt(money),
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
};

for (let i = 0; i < 2; i++) {
    let expense = +prompt("Введите обязательную статью расходов в этом месяце", "");
    let cost = +prompt("Во сколько это обойдется?", '');

    if (typeof (expense) === "string"
        && typeof (expense) != null && typeof (cost) != null
        && expense != '' && cost != '') {
        appData.expenses[expense] = cost;
    } else {


    }
}


appData.moneyPerDay = appData.budget / 30;
alert('Бюджет на 1 день:' + appData.moneyPerDay + "рублей");

