import { NegociacaoController } from './controllers/negociacao-controller.js';
const form = document.querySelector(".form");
form.addEventListener('submit', event => {
    const controller = new NegociacaoController();
    event.preventDefault();
    controller.adiciona();
});
