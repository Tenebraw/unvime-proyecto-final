function nuevaPregunta() {
    //const menuextra = document.querySelector('.menu-extra');
    const newPreguntadiv = document.createElement('div');
    const newTextarea = document.createElement('textarea');
    const newLabel = document.createElement('label');
    newLabel.className = 'labelclass';
    newLabel.innerHTML = 'Introduzca su nueva pregunta...';
    newPreguntadiv.className = 'content-create';
    newTextarea.className = 'question';

    newPreguntadiv.appendChild(newTextarea);
    newPreguntadiv.appendChild(newLabel)
        //La siguiente linea permite que cada nueva pregunta tenga su propio id.
    const newid = Date.now().toString(36) + Math.random().toString(36).substr(2);
    newPreguntadiv.setAttribute('id', newid);
    //document.querySelector('#form-encuesta').insertBefore(newPreguntadiv, menuextra);
    const formultimo = document.querySelector('#form-encuesta').lastElementChild;
    document.querySelector('#form-encuesta').insertBefore(newPreguntadiv, formultimo);
    MenuTipo();

}

///// Muestra los tipos de preguntas.
function tipoPreguntas() {
    document.querySelector('.dropdown-content').classList.toggle("show");
}

/////// Muestra las opciones del campo "Nombre de la encuesta". A corregir.
let menu = document.querySelector('.btn');
let extra = document.querySelector('.hid');

menu.addEventListener("click", function() {
    extra.classList.toggle('mostrar');

});

/// Posibilita que se cierre las opciones del campo "Nombre de la encuesta" si se hace click fuera de ellas.
window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
        let dropdowns = document.querySelectorAll('.hid');
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('mostrar')) {
                openDropdown.classList.remove('mostrar');
            }
        }
    }
}

//Aun en proceso. Si bien se crea el correspondiente menutipo en cada nueva pregunta, al hacer click solo muestra las opciones de la primera. 
function MenuTipo() {

    const test = document.createElement('div');
    test.className = 'test';
    test.innerHTML = `<div class="dropdown">
    <button onclick="tipoPreguntas(this)" class="dropbtn">Tipo</button>
    <i class="fas fa-sort-down icon"></i>
    <div class="dropdown-content">
        <ul>
            <li><a href="">Multiple-choice (simple)</a></li>
            <li><a href="">Multiple-choice (multiple)</a></li>
            <li><a href="">Menu Desplegable</a></li>
            <li><a href="">Escala Opinion</a></li>
            <li><a href="">Pregunta Abierta</a></li>
            <li><a href="">Formulario de Contacto</a></li>
        </ul>
    </div>
</div>`;

    const lastID = document.querySelectorAll('#form-encuesta .content-create');
    const lastIDprueba = lastID[lastID.length - 1];
    const idlast = lastIDprueba.id;
    document.querySelector(`#${idlast}`).appendChild(test);

}