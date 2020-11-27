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