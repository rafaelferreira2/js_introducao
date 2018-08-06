
var botaoAdiciona = document.querySelector("#adicionar-paciente");
botaoAdiciona.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

   var paciente = obtemPacientesForm(form);

   var pacienteTr = montaTr(paciente);

   var erros = validaPaciente(paciente);
    console.log(erros);
   if(erros.length > 0){
       exibeMensagnesDeErro(erros);
       return;
   }
   
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});
function exibeMensagnesDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

   erros.forEach(function(erro) {
       var li = document.createElement("li");
       li.textContent = erro;
       ul.appendChild(li);
   });
}

function obtemPacientesForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcumaImc(form.peso.value, form.altura.value)
    }

    return paciente;

}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push ("O NOME não pode ser em branco!");
    }

    if(!validaPeso(paciente.peso)){
         erros.push("Peso é Inválido!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("ALTURA é Inválida!");
    } 

    if(!validaGordura(paciente.gordura)){
        erros.push("% de GORDURA Inválida!");
    }

    if (paciente.peso.length == 0){
        erros.push("O PESO não pode ser em branco!");
    }
   
    if (paciente.altura.length == 0){
        erros.push("A ALTURA não pode ser em branco!");
    }

    if(paciente.gordura.length == 0) {
        erros.push("A GORDURA não pode ser em branco!");
    }

    return erros;

}