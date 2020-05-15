let btn = document.querySelector('button')
let box = document.querySelector('.box');

function myAnimation() {
    let pos = 0;
    let rad = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 360) {
            clearInterval(id);
        }else {
            pos++;
            rad += 0.1;
            color = 000000;
            box.style.top = pos + "px";
            box.style.left = pos + "px";
           //делаем из квадрата круг
            box.style.borderRadius = rad + "px";
            box.style.border = rad + "px "+"solid red" ;
            
        }
    }
}


btn.addEventListener('click', myAnimation);