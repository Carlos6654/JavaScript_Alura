import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    #saldo = 0; //# usando na frente da variável pra torná-la privada, podendo ser acessada apenas dentro da classe. Atualmente usa-se _saldo, porém pode ser acessado fora se quiser;

    get saldo(){
        return this.#saldo;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Cliente: ${this._cliente.nome}. Valor sacado: R$ ${valor}. Saldo atual: R$ ${this.#saldo}`);
            return valor; 
        }else{
            console.log(`Não foi possível realizar o saque. Saldo Insuficiente = R$ ${this.saldo}`);
        }
        
    }

    depositar(valor){
        if(valor <= 0) return;

        this.#saldo += valor;
        console.log(`Cliente: ${this._cliente.nome}. Valor depositado: R$ ${valor}. Saldo atual: R$ ${this.#saldo}`);
        return valor   
    }

    transferir(valor, conta){
        if(valor > this.#saldo) return;
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);


    }
}
