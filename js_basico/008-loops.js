const age = 18;
const isAccompanied = true;
let haveTicketPurchased = false;
const destination = "Tokyo";


const destinationList = new Array(
    "São Paulo", "Buenos Aires", "Tokyo", "Vancouver"
);

const canBuy = age >= 18 || isAccompanied;

let count = 0;
while (count < destinationList.length){
    if (destinationList[count] == destination){
        console.log("Destino encontrado!");
        break;
    }
    count++;
}


console.log("Embarque...\n\n");
if (age >= 18 && haveTicketPurchased) {
    console.log("Boa viagem!");
    haveTicketPurchased = true;
} else {
    console.log("Você não pode embarcar.");
    haveTicketPurchased = false;
}

for (let cont = 0; cont < destinationList.length; cont++){
    if (destinationList[count] == destination){
        console.log("Destino encontrado!");
        break;
    }
}