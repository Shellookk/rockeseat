// variaveis

const form = document.querySelector('form');
const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')


form.onsubmit = function (event){
    event.preventDefault()

    const peso = inputPeso.value
    const altura = inputAltura.value

}