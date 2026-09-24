export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("da-DK", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(price)
}