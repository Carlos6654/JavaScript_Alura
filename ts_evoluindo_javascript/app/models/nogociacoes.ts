import { Negociacao } from './negociacao.js';

export class Negociacoes {
    private negociacoes: Negociacao[]; //Negociacao[] = Array<Negociacao> (generics)
    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> { //ReadonlyArray<Negociacao> == readonly Negociacao[]   idêntico ao array, porém apenas leitura, não retorna métodos de lista que podem alterá-la
        return this.negociacoes;

    }
    /*
    lista(): Array<Negociacao> {
        return [...this.negociacoes]; //[...lista] spread array, está pedindo pra colocar cada item da lista em uma nova lista - não inserindo uma lista dentro da outra., 

    }*/
}

