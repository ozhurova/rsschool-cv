console.log('Hi');

    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const link = [...document.querySelectorAll('.nav-link')];


    burger.addEventListener('click',burgerToggle);
    link.forEach(i => i.addEventListener('click',burgerToggle));

    function burgerToggle(){
        burger.classList.toggle('active');
        menu.classList.toggle('nav-burger');
    }




