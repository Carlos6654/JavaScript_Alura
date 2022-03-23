var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";



var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoTrue = true;
    var alturaTrue = true;

    if (peso <= 0 || peso >= 1000){
        console.log("Peso inválido!")
        pesoTrue = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00){
        console.log("Altura inválida!")
        alturaTrue = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoTrue && alturaTrue){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}