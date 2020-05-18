window.addEventListener('DOMContentLoaded', function () {

    let chbox = document.querySelector('.checkbox'),
        changeBtn = document.querySelector('.changeBtn'),
        form = document.querySelector('.loginForm');

    if (localStorage.getItem('rememberUser') == 'true') {
        chbox.checked = true;
    }
    chbox.addEventListener('change', () => {
        chbox.checked ? localStorage.setItem("rememberUser", true)
            : localStorage.removeItem("rememberUser", true);
    })



    if (localStorage.getItem('bg') === 'changed') {
        form.style.background = 'red';

    }

    changeBtn.addEventListener('click', () => {

        localStorage.setItem('bg', 'changed');
    })



    let btnShowCircle = document.querySelector('button.showCircle');
    btnShowCircle.addEventListener('click', () => {
        showCircle(50, 50, 20).then(circle => {
            let text = document.createElement('div');
            circle.append(text);
            text.textContent = 'blabla';
            console.log('1');
        });
    })

    function showCircle(cx, cy, radius) {
        let circle = document.createElement('div');
        circle.style.width = 0;
        circle.style.height = 0;
        circle.style.left = cx + "px";
        circle.style.top = cy + "px";
        circle.classList.add('circle');
        document.body.prepend(circle);

        return new Promise(resolve => {
            setTimeout(() => {
                circle.style.width = radius * 2 + 'px';
                circle.style.height = radius * 2 + 'px';
                circle.addEventListener('transitionend', function handler() {
                    circle.removeEventListener('transitionend', handler);
                    resolve(circle);
                })
            }, 0)
        })
    }
})

let textArea = document.querySelector('textarea');
if (localStorage.getItem('textAreaUserText') )  {
    textArea.value = localStorage.getItem('textAreaUserText');
}

textArea.addEventListener('input', () => {
    localStorage.setItem('textAreaUserText',textArea.value);
})


