
const form = document.getElementById('form-valida');
let formEvalido = false;

form.addEventListener('submit', function(e){
    e.preventDefault();

    validaForm();
});

function validaForm(){

    var campoA = document.getElementById('campo-a');
    var campoB = document.getElementById('campo-b');
    var mensagemSucesso= ` O valor do campo B <b>${campoA.value}</b> é maior que o valor do campo A <b>${campoA.value}</b>`;
    var mensagemErro= ` O valor do campo B <b>${campoA.value}</b> é menor que o valor do campo A <b>${campoA.value}</b>`;
    var formEvalido = valorcampoB > valorcampoA;

    if (validaForm){
        var containerSucesso = document.querySelector(".sucess-message");
        containerSucesso.innerHTML = mensagemSucesso;
        containerSucesso.style.display = "block";

        campoA.value = "";
        campoB.value = "";

    } else  {
        var containerErro = document.querySelector(".error-message");
        containerErro.innerHTML =mensagemErro;
        containerErro.style.display = "block";

        campoA.value = "";
        campoB.value = "";
    }
}