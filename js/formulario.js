let nomeExperimentoEnviar = '';
let desafioResolveEnviar = '';
let descricaoExperimentoEnviar = '';

let formularioEnvio = [nomeExperimentoEnviar, desafioResolveEnviar, descricaoExperimentoEnviar];

console.log(formularioEnvio); // Saída: ['', '', '']

const form = document.getElementById('formulario__sugestoes');

const inputs = document.querySelectorAll('input');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    inputs.forEach(input => {
        
        const inputName = input.name;
        console.log(`O nome do input é ${inputName}`)

    })


});