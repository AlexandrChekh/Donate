import DonateForm from "./donate-form"
import DonateList from './donate-list'
import * as otherFunctions from '../core/utils/index'

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
];



export default class App {
    #state
    #donateList
    #donateForm

    constructor() {
        this.#state = {
            donates: [...mockDonates],
            totalAmount: otherFunctions.calculateSumOfNumbers(mockDonates),
        }
        this.#donateForm = new DonateForm(this.#state.totalAmount, this.createNewDonate.bind(this))
        this.#donateList = new DonateList(this.#state.donates)
    }
    run() {
        const donateForm = this.#donateForm.render()
        const donateList = this.#donateList.render()
        document.body.append(donateForm, donateList)


    }
    createNewDonate(newDonate) {
        this.#state.donates.push(newDonate)
        this.#state.totalAmount += Number(newDonate.amount)
        this.#donateList.updatedDonates()
        this.#donateForm.updateTotalAmount(this.#state.totalAmount)
    }
}


