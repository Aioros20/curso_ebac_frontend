function validarFormulario() {
    const campoA = document.getElementById('campoA').value
    const campoB = document.getElementById('campoB').value

    const numeroA = parseFloat(campoA);
    const numeroB = parseFloat(campoB);

    const mensagemElement = document.getElementById('mensagem')

    if (numeroB > numeroA){
        mensagemElement.textContent = "Formulario Valido! O numero B é maior que A";
        return true;
    } else{
        mensagemElement.textContent = "Formulario Invalido! O numero B deve ser maior que A";
        return false;
    }
}