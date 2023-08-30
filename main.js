
const form = document.getElementById('form-valida');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const mensagemSucesso= document.querySelector('.sucess-message');
const mensagemErro= document.querySelector('.error-message');


form.addEventListener('submit', function(){
    Event.preventDefault();
    
    const valorcampoA = parseFloat(campoA.value);
    const valorcampoB = parseFloat(campoB.value);


    if (valorcampoA > valorcampoB){

        mensagem.textContent = mensagemSucesso 
    } else {
        mensagem.textContent = mensagemErro
    }
})