var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector('#primeiro-paciente');

var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;

//var alturaDireto = ((paciente.querySelector('.info-altura')).textContent);
var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector('.info-imc');

var pesoValido = true;
var alturaValida = true;

if(peso < 0 || peso >= 200){
    console.log("peso inválido");
    var pesoValido = false;
    tdImc.textContent = "Peso Inválido!";
}

if(altura < 0 || altura >= 3.00){
    console.log("altura inválida");
    var alturaValida = false;
    tdImc.textContent = "Altura Inválida!";
}
if(pesoValido && alturaValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}




