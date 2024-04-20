import state from './state.js'
import * as elements from './elements.js'
import * as sounds from './sounds.js'
import * as timer from './timer.js'


//botões
export function play(){

    elements.buttonPlay.addEventListener('click', function() {
        state.isRunning = document.documentElement.classList.toggle('running')
        timer.countdown()
    });
}
   
export function stop(){

    elements.buttonStop.addEventListener('click', function() {
       
        state.isRunning = false
        document.documentElement.classList.remove('running')
        elements.minutes.setAttribute('contenteditable', true)
        elements.minutes.focus()
        timer.updateDisplay()
    });
}
  
export function setFiveMinutes(){
    elements.buttonSetFiveMinutes.addEventListener('click', function() {

        const minutes = parseInt(elements.minutes.textContent)

        const increment = minutes + 5
        elements.minutes.textContent = increment      

    })

}

export function decreaseFiveMinutes(){
    elements.buttonDescreaseFiveMinutes.addEventListener('click', function() {

        const minutes = parseInt(elements.minutes.textContent)

        const increment = minutes - 5

        if(increment < 0){
            timer.updateDisplay()
            return
        }

        elements.minutes.textContent = increment
        
    })
}


// Musicas 
export function setFlorest(){

    elements.buttonMusicFlorest.addEventListener('click', function() {
       
        state.isMute = document.documentElement.classList.toggle('music-on')
    
        if(state.isMute) {
            sounds.musicForest.play()
            return
        }
        sounds.musicForest.pause()
    });
}

export function setRain(){
    
    elements.buttonMusicRain.addEventListener('click', function() {
        state.isMute = document.documentElement.classList.toggle('music-on')

        if(state.isMute) {
            sounds.musicRain.play()
            return
        }
    
        sounds.musicRain.pause()
    });
}

export function setCoffee(){

    elements.buttonMusicCoffee.addEventListener('click', function(){
    
        state.isMute = document.documentElement.classList.toggle('music-on')

        if(state.isMute) {
            sounds.musicCoffee.play()
            return
        }

        sounds.musicCoffee.pause()

    });


}

export function setFire(){

    elements.buttonMusicFire.addEventListener('click', function(){

        state.isMute = document.documentElement.classList.toggle('music-on')

        if(state.isMute) {
            sounds.musicFire.play()
            return
        }

        sounds.musicFire.pause()
    });
}


// funcções extras
export function editMinutes() {
    elements.minutes.addEventListener('focus', () => {
       elements.minutes.textContent = ""
    })
   
    elements.minutes.onkeypress = (event) => /\d/.test(event.key)
   
    elements.minutes.addEventListener('blur', (event) => {
       let time = event.currentTarget.textContent
   
       time = time > 60 ? 60 : time
   
       state.minutes = time
       state.seconds = 0
   
       updateDisplay()
       elements.minutes.removeAttribute('contenteditable')
    })
}
export function set() {
    elements.minutes.setAttribute('contenteditable', false)
    elements.minutes.focus()
    
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}