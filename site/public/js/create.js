function nuevaPregunta() {
    const menuextra = document.querySelector('.menu-extra');
    const newPreguntadiv = document.createElement('div');
    const newTextarea = document.createElement('textarea');
    const newLabel = document.createElement('label');
    newLabel.innerHTML = 'Introduzca su nueva pregunta...';
    newPreguntadiv.className = 'content-create';
    newTextarea.className = 'question';

    newPreguntadiv.appendChild(newTextarea);
    newPreguntadiv.appendChild(newLabel)
    const newid = Date.now().toString(36) + Math.random().toString(36).substr(2);
    newPreguntadiv.setAttribute('id', newid);
    document.querySelector('#form-encuesta').insertBefore(newPreguntadiv, menuextra);
}

///// Muestra los tipos de preguntas.
function tipoPreguntas() {
    document.querySelector("#myDropdown").classList.toggle("show");
}

/////// Muestra las opciones del campo "Nombre de la encuesta"
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