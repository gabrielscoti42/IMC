import {Modal} from "./modal.js"
import {alertError} from "./alertError.js"
import {IMC, notNumber} from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showError = notNumber(weight) || notNumber(height)

    if (showError) {
        alertError.open()
        return;
    }

    alertError.close()

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`
    Modal.open()
    Modal.message.innerText = message
}

