let rub = document.querySelector('#rub');
let usd = document.querySelector('#usd');


rub.addEventListener('input', () => {
    let request = new XMLHttpRequest();
    // request.open(method, URL, async, login, pass);
    request.open("GET", "/currency.json");
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    request.send();
   
    request.addEventListener('readystatechange', function (){
        if( request.readyState == 4 && request.status == 200 ){
            let data = JSON.parse(request.response);        
            usd.value = (rub.value / data.usd).toFixed(2);
        } else {
            usd.value = "Что-то пошло не так!";
        }
    });
})

