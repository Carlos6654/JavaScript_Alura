var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso); //true ou false
    var alturaValida = validaAltura(altura); //true ou false

    if (!pesoValido){
        console.log("Peso inválido!")
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida){
        console.log("Altura inválida!")
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida){
        var imc = calculaIMC(peso, altura);
        tdImc.textContent = imc ;
    }
}

titulo.addEventListener("click", function (){
    console.log("Chamando uma função anônima.");
});

function calculaIMC(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}

function validaAltura(altura){
    if (altura >=0 && altura <= 3.0){
        return true;
    }else {
        return false;
    }
}


function validaPeso(peso){
    if (peso >= 0 && peso < 1000){
        return true;
    }else {
        return false;
    }
}

