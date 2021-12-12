import { getFormattedTime } from '../core/utils/index'
import { settings as money } from "../core/constants/settings"
export default class DonateList {

    constructor(updatedDonate) {
        this.updatedDonate = updatedDonate
        const donates = [
            { amount: 4, date: new Date() },
            { amount: 20, date: new Date() },
            { amount: 3, date: new Date() },
            { amount: 1, date: new Date() },
        ]
        this.donates = donates

    }
    render() {
        const div = document.createElement('div')
        div.className = 'donates-container'
        const h2 = document.createElement('h2')
        h2.className = 'donates-container__title'
        h2.textContent = 'Список донатов'
        const divContainer = document.createElement('div')
        divContainer.className = 'donates-container__donates'
        div.append(h2, divContainer)
        this.donates.forEach((elem) => {
            const donateItem = document.createElement('div')
            donateItem.className = 'donate-item'
            donateItem.textContent = `${getFormattedTime(elem.date)} - `
            const b = document.createElement('b')
            b.textContent = `${elem.amount}${money.currency}`
            donateItem.append(b)

            divContainer.append(donateItem)
        })
        return div
    }
    updatedDonates() {
        const divContainer = document.querySelector('.donates-container__donates')
        const donateItem = document.createElement('div')
        donateItem.className = 'donate-item'
        donateItem.textContent = `${getFormattedTime(this.updatedDonate[this.updatedDonate.length - 1].date)} - `
        const b = document.createElement('b')
        b.textContent = `${this.updatedDonate[this.updatedDonate.length - 1].amount}${money.currency}`
        donateItem.append(b)
        divContainer.append(donateItem)

    }

}
