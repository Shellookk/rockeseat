import state from './state.js'
import * as elements from './elements.js'
import { reset } from './actions.js'

export function countDown(){
    if(!state.isRunning){
        return
    }

    let minutes = Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)

    seconds--   

    if(seconds <0){
        seconds = 59
    }

    if(minutes<0){
        reset()
        return

    }


    updateDisplay(minutes,seconds)
    setTimeout( () => countDown(), 1000)
}


export function updateDisplay (minutes,seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    elements.minutes.textContent = String(minutes).padStart(2, "0")
    elements.minutes.textContent = String(seconds).padStart(2, "0")
}