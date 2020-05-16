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



})

