let rub = document.querySelector('#rub');
let usd = document.querySelector('#usd');

function calcCurrency() {
    return new Promise((resolve, reject) => {
        rub.addEventListener('input', () => {
            let request = new XMLHttpRequest();
            // request.open(method, URL, async, login, pass);
            request.open("GET", "/currency.json");
            request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
            request.send();

            request.addEventListener('readystatechange', function () {
                if (request.readyState == 4 && request.status == 200) {
                    resolve();
                } else if (request.readyState !== 4 && !request.status == 200) {
                    resolve();
                } else {
                    alert(request.readyState);
                    reject();
                }
            });
    })
})
}

calcCurrency()
    .then(() => {
        let data = JSON.parse(request.response);
        usd.value = (rub.value / data.usd).toFixed(2);
        alert('a');
    })
    .catch(() => {
        usd.value = "Что-то пошло не так!";
    })







