const generateCouponCode = (length = 10) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let couponCode = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length)
        couponCode += chars[randomIndex]
    }
    return couponCode
}

module.exports = generateCouponCode