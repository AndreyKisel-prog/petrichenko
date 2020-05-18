window.addEventListener('DOMContentLoaded', function () {


    let infoHeader = document.querySelector('.info-header');
    let infoHeaderTab = document.querySelectorAll('.info-header-tab');
    let infoTabContent = document.querySelectorAll('.info-tabcontent');


    infoHeader.addEventListener('click', function (event) {
        if (event.target.classList.contains('info-header-tab')) {

            for (let i = 0; i < infoHeaderTab.length; i++) {
                if (event.target == infoHeaderTab[i]) {



                    for (let j = 0; j < infoTabContent.length; j++) {
                        if (j != i) {
                            infoTabContent[j].classList.add('hide')
                            infoTabContent[j].classList.remove('show')
                        } else {
                            infoTabContent[j].classList.add('show')
                            infoTabContent[j].classList.remove('hide');
                        }
                    }
                }
            }
        }
    })


    // add modal window
    let btnModalShow = document.querySelector('.more'),
        modalWindow = document.querySelector('.overlay'),
        popupClose = document.querySelector('.popup-close');

    btnModalShow.addEventListener('click', function () {
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
        this.classList.add('more-splash')
    })

    popupClose.addEventListener('click', function () {
        modalWindow.style.display = 'none';
        document.body.style.overflow = '';
        btnModalShow.classList.remove('more-splash');
    })

    // Form1
    let message = {
        loading: 'Загрузка...',
        success: "Спасибо! Мы свяжемся с Вами в ближайшее время!",
        failure: "Произошла ошибка"
    }

    let formModal = document.querySelector('.main-form');
    let formEmail = document.querySelector('#form');
    let inputs = document.querySelectorAll('input');
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    let json;

    sendForm(formModal);
    sendForm(formEmail);

    function sendForm(form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            form.appendChild(statusMessage);
            let formData = new FormData(form);

            function postData(json) {

                return new Promise((resolve, reject) => {
                    let xhr = new XMLHttpRequest();

                    xhr.open('POST', "server.php");

                    xhr.setRequestHeader("Content-Type", "application/json");

                    xhr.addEventListener('readystatechange', () => {
                        if (xhr.readyState < 4) {
                            resolve();
                            // statusMessage.innerHTML = message.loading;
                        } else if (xhr.readyState === 4) {
                            if (xhr.status == 200 && xhr.status < 300) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    })

                    let obj = {};
                    formData.forEach((value, key) => { obj[key] = value })
                    json = JSON.stringify(obj);
                    xhr.send(json);

                })
            }// end postData

            function clearInput() {
                inputs.forEach(input => input.value = '');
            }

            postData(json)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    // thanksModal.style.dysplay = 'block';
                    // mainModal.style.display = 'none';
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)

        });
    }
})



//  Form2
