const $btnMenu = document.querySelector('#btn-menu');

const $options = document.querySelector('#options-menu');
console.log($options);

function desplegarMenu(){
    $options.classList.toggle('desplegado');
    $options.classList.toggle('oculto')
}

$btnMenu.addEventListener("click", desplegarMenu);

