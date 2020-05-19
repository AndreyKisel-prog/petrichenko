let countPeopleInput = document.querySelectorAll('.counter-block-input')[0];
let countDayInput = document.querySelectorAll('.counter-block-input')[1];
let cities = document.querySelector('#select');
let totalOuter = document.querySelector('#total');
let total = 0;


totalOuter.innerHTML = 0;

countPeopleInput.addEventListener('change', function () {
    showCalcPrise();
})
countDayInput.addEventListener('change', function () {
    showCalcPrise();
})
cities.addEventListener('change', function () {
    showCalcPrise();
})

function showCalcPrise() {
    if (countPeopleInput != "" && countDayInput != "") {
        let result = +countPeopleInput.value * countDayInput.value * cities.value * 4000;
        totalOuter.innerHTML = result;
    }
}