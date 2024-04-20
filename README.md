# rockeseat
Reposiotorio para projetos rocketseat.


Função que registra o click da tela:


export function registerControls (){
    controls.addEventListener('click', (event) =>{
        console.log(event.target)
    })
}