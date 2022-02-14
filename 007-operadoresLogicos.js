const age = 17;
const isAccompanied = true;
const haveTicketPurchased = false;
const destinationList = new Array(
    "São Paulo", "Buenos Aires", "Tokyo", "Vancouver"
);

if (age >= 18) {
    console.log("Comprador maior de idade.");
    destinationList.splice(2, 1); //remove 1 item, a partir da 2ª posição.
    console.log(destinationList);
} else if (isAccompanied) {
    console.log("Comprador está acompanhando...");
    destinationList.splice(1, 1);
    console.log(destinationList);
} else {
    console.log("Cliente não é maior de idade.");
}

if (age >= 18 || isAccompanied) {
    console.log("Comprador maior de idade.");
    destinationList.splice(2, 1); //remove 1 item, a partir da 2ª posição.
    console.log(destinationList);
} else {
    console.log("Cliente não é maior de idade.");
}

console.log("Embarque...\n\n");
if (age >= 18 && haveTicketPurchased) {
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar.");
}

//console.log(idade < 18);
//console.log(idade > 18);
//console.log(idade >= 18);
//console.log(idade <= 18);
//console.log(idade == 18);
