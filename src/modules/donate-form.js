import { max } from "moment"
import { settings as money } from "../core/constants/settings"


export default class DonateForm {
    constructor(defaultNumber, totalAmount) {
        this.defaultNumber = defaultNumber
        this.createNewDonate = totalAmount

    }

    render() {
        const form = document.createElement('form')
        form.className = 'donate-form'
        const label = document.createElement('label')
        label.className = 'donate-form__input-label'
        label.textContent = `Введите сумму в ${money.currency}`
        const h1 = document.createElement('h1')
        h1.setAttribute('id', 'total-amount')
        h1.textContent = `${this.defaultNumber} ${money.currency}`
        const input = document.createElement('input')
        input.className = 'donate-form__donate-input'
        input.setAttribute('name', 'amount')
        input.setAttribute('type', 'number')
        input.setAttribute('max', 100)
        input.setAttribute('min', 1)
        input.setAttribute('required', '')
        label.append(input)
        const button = document.createElement('button')
        button.className = 'donate-form__submit-button'
        button.textContent = 'Задонатить'
        button.setAttribute('type', 'submit')
        form.append(h1, label, button)
        form.addEventListener('submit', ((event) => {
            event.preventDefault()
            const newDonate = {
                amount: input.value, date: new Date()
            }
            this.createNewDonate(newDonate)


        })
        )
        return form
    }
    updateTotalAmount(total) {
        const h1 = document.querySelector('#total-amount')
        h1.textContent = `${total} ${money.currency}`

    }
}