import moment from "moment"
import 'moment-precise-range-plugin'



export const calculateSumOfNumbers = (mockDonates) => {
    const arr = mockDonates.reduce((acc, item) => {
        return acc + item.amount
    }, 0)
    return arr

}

export const getFormattedTime = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')

}