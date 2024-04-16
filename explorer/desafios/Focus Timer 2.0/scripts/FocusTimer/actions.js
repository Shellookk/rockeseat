// Todas as ações que precisam ser executadas dentro do projeto, isto é, as funçóes de clicar, aumentar, ouvir musica e etc....
import state from './state.js'
import * as timer from './timer.js'
import * as elements from './elements.js'
import * as sounds from './sounds.js'


export function reset() {
    timer.updateDisplay()    
}

export function set() {
    elements.minutes.setAttribute('contenteditable', true)
    elements.minutes.focus()
}
