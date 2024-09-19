const getCurrentDate = () => {
    const today = new Date()
    const day = String(today.getDate()).padStart(2, '0')
    const month = String(today.getMonth() + 1).padStart(2, '0') 
    const year = today.getFullYear()
    return `${day}/${month}/${year}`
}

const getFutureDate = (daysFromNow, monthsFromNow, yearsFromNow) => {
    const today = new Date()
    
    today.setFullYear(today.getFullYear() + yearsFromNow)
    today.setMonth(today.getMonth() + monthsFromNow)
    today.setDate(today.getDate() + daysFromNow)

    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return today.toLocaleDateString('en-US', options)
}

module.exports = {
    getCurrentDate,
    getFutureDate
}