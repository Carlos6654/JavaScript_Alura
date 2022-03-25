

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoForm(form);

    var erros = validaPaciente(paciente); 

    if (erros.length > 0){
        exibeMensangensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = ""
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensangensDeErro(erros){
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = ""; //resetando as mensagens de erro

    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)

    return td;
}


function validaPaciente(paciente){

    var erros = [];

    if (paciente.nome.length == 0) erros.push("Insira um  nome para o paciente.");
    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido!");
    if (paciente.peso.length == 0) erros.push("Insira um peso ao paciente.")
    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida!");
    if (paciente.altura.length == 0) erros.push("Insira uma altura ao paciente.")
    if (paciente.gordura.length == 0) erros.push("Insira a % de gordura do paciente.");

    return erros;
}
