var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');


for(var i = 0; i < pacientes.length; i++){

    paciente = pacientes[i];

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
        paciente.classList.add("paciente-invalido");
    }

    if(altura < 0 || altura >= 3.00){
        console.log("altura inválida");
        var alturaValida = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor = "orange";
    }
    if(pesoValido && alturaValida){
        var imc = peso / (altura * altura);
         tdImc.textContent = imc.toFixed(2);
         
    }

}


