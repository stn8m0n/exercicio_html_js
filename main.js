
const form = document.getElementById('form-valida');
let formEvalido = false;

form.addEventListener("submit", function(e){
    e.preventDefault();

    validaForm();
});

function validaForm(){

    let campoA = document.getElementById('campo-a');
    let campoB = document.getElementById('campo-b');
    let mensagemSucesso= ` O valor do campo B <b>${campoA.value}</b> é maior que o valor do campo A <b>${campoA.value}</b>`;
    let mensagemErro= ` O valor do campo B <b>${campoA.value}</b> é menor que o valor do campo A <b>${campoA.value}</b>`;
    let formEvalido = valorcampoB > valorcampoA;
    let valorcampoA = parseInt(campoA.value);
    let valorcampoB = parseInt(campoB.value);

    if (formEvalido){
        let containerSucesso = document.querySelector(".sucess-message");
        containerSucesso.innerHTML = mensagemSucesso;
        containerSucesso.style.display = "block";

        campoA.value = "";
        campoB.value = "";

    } else  {
        let containerErro = document.querySelector(".error-message");
        containerErro.innerHTML = mensagemErro;
        containerErro.style.display = "block";

        campoA.value = "";
        campoB.value = "";
    }
}