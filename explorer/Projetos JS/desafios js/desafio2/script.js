let listaDeEstudantes = [
    {
        nomeDoEstudante: 'Isaque',
        primeiraNota: 5,
        segundaNota: 9,
    },

    {
        nomeDoEstudante: 'Marcos',
        primeiraNota: 3,
        segundaNota: 8,
    },

    {
        nomeDoEstudante: 'Sofia',
        primeiraNota: 9,
        segundaNota: 5,
    }        
];

function calculaMedia(primeiraNota,segundaNota) {
let media = (primeiraNota + segundaNota) / 2;
return media;
}
   

for(let estudante of listaDeEstudantes){
    mediaIndividual = calculaMedia(estudante.primeiraNota, estudante.segundaNota);
    let aprovadoOuNao = mediaIndividual < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação';

    alert(`A média de ${estudante.nomeDoEstudante} é ${mediaIndividual}.
${aprovadoOuNao}`);
};       