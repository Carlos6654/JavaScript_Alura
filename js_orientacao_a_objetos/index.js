import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Carlos", 11122233304, 1234567890);
const cliente2 = new Cliente("Nicolas", 44455566607);

console.log(cliente1);
console.log(cliente2.cpf);

const contaCorrenteCarlos = new ContaCorrente(cliente1, 1001);
contaCorrenteCarlos.depositar(500);

const contaCorrenteNick = new ContaCorrente(cliente2, 1002);

console.log(ContaCorrente.numeroDeContas);

let valorTransferencia = 200
contaCorrenteCarlos.transferir(valorTransferencia, contaCorrenteNick);

console.log(contaCorrenteCarlos);
console.log(contaCorrenteNick);