console.log("Trabalhando com Listas");

const salvador = "Salvador";
const saoPaulo = "São Paulo";
const rioDeJaneiro = "Rio de Janeiro";

console.log("Destinos Possíveis");
console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);
listaDeDestinos.push("Curitiba") //adicionar item na lista
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1) //deleta a partir da posição 2, 1 elemento
console.log(listaDeDestinos);

//Array Methods
list = new Array(
    "Maça", "Banana"
);

//Adiciona item ao final do array
list.push("Laranja");
console.log(list);
//["Maça", "Banana", "Laranja"]

//Remove último item do Array
list.pop();
console.log(list);
//["Maça", "Banana"]

//Remove item do início do Array
list.shift();
console.log(list);
//["Banana"]

//Adiciona item ao início do Array
list.unshift("Morango");
console.log(list);
//["Morango", "Banana"]

//Convertendo Arrays to Strings
console.log(list.toString());
//Morango,Banana
console.log(list.join(' * ')); //igual o toString(), mas pode colocar o separador que quiser
//Morango * Banana

//Retornos
let pushed = list.push("Kiwi"); //retorna o novo tamanho do array
console.log("Addeded = " + pushed);
console.log(list);

let popped = list.pop(); // retorna o item retirado da lista
console.log("Popped" + popped);
console.log(list);

//Acesso ao item da lista
console.log(list[0]);

let list1 = new Array(
    "Carlos", "Nicolas"
);
let list2 = new Array(
    "Fábio", "Lucas"
);
let list3 = new Array(
    "Danilo", "Léo"
);
let meninos = list1.concat(list2, list3)
console.log(meninos)

