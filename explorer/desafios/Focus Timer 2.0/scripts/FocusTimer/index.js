import state from './state.js'
import * as actions from './actions.js'
import * as timer from './timer.js'
//Estado inicial da aplicação
export function start (minutes,seconds){
    state.minutes = minutes
    state.seconds = seconds
    
    actions.play()
    actions.stop()
    actions.setFiveMinutes()
    actions.decreaseFiveMinutes()


    actions.setFlorest()
    actions.setRain()
    actions.setCoffee()
    actions.setFire()

    actions.set()
    actions.editMinutes()
    timer.updateDisplay()
}