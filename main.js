
let form = document.getElementById('form-valida');
const formEvalido = false;

form.addEventListener("submit", function(e){
    e.preventDefault();

    validaForm();
});

function validaForm(e){

    let campoA = document.getElementById('campo-a');
    let campoB = document.getElementById('campo-b');
    let valorcampoA = parseInt(campoA.value);
    let valorcampoB = parseInt(campoB.value);
    let mensagemSucesso= ` O valor do campo B <b>${campoB.value}</b> é maior que o valor do campo A <b>${campoA.value}</b>`;
    let mensagemErro= ` O valor do campo B <b>${campoB.value}</b> é menor que o valor do campo A <b>${campoA.value}</b>`;
    let formEvalido = valorcampoB > valorcampoA;

    if (formEvalido){
        let containerSucesso = document.querySelector(".sucess-message");
        containerSucesso.innerHTML = mensagemSucesso;
        containerSucesso.style.display = "block";
        /*document.querySelector(".sucess-message").style.display='none';*/

        campoA.value = "";
        campoB.value = "";

    } else  {
        let containerErro = document.querySelector(".error-message");
        containerErro.innerHTML = mensagemErro;
        containerErro.style.display = "block";
        /*document.querySelector(".error-message").style.display='none';*/

        campoA.value = "";
        campoB.value = "";
    }
}