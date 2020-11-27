//Menu Encuestas. Ocultar y Desplegar.
const $btnSurvey = document.querySelector('#btn-menu-survey');
const $menuSurvey = document.querySelector('#survey-menu');

function desplegarMenuSurvey() {
    $menuSurvey.classList.toggle('desplegado-survey');
    $menuSurvey.classList.toggle('ocult');
}
$btnSurvey.addEventListener("click", desplegarMenuSurvey);

//Menu Encuestas 2. A corregir. Es ineficaz que existan dos funciones identicas.
const $btnSurvey2 = document.querySelector('#btn-menu-survey2');
const $menuSurvey2 = document.querySelector('#survey-menu2');

function desplegarMenuSurvey2() {
    $menuSurvey2.classList.toggle('desplegado-survey');
    $menuSurvey2.classList.toggle('ocult');
}
$btnSurvey2.addEventListener("click", desplegarMenuSurvey2);

//Cerrar Menu al hacer click en el boton cerrar del sub-menu Encuestas.
function cerrarMenu() {
    $menuSurvey.classList.toggle('ocult');
    $menuSurvey.classList.toggle('desplegado-survey');
}

//Funcion identica a la anterior. Mal!
function cerrarMenu2() {
    $menuSurvey2.classList.toggle('ocult');
    $menuSurvey2.classList.toggle('desplegado-survey');
}