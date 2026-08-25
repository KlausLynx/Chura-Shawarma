    export const quickOrderViaWhatsApp = () => {
        const phone = import.meta.env.VITE_PHONE_NUMBER
        const message = 'Greetings, Please  I\'d like to learn more about your menu and place an order.'

        const encodedMessage = encodeURIComponent(message)

        window.open(`https://wa.me/${phone}?text=${encodedMessage}, '_blank'`)
    }

    