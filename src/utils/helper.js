    export const quickOrderViaWhatsApp = () => {
        const phone = import.meta.env.VITE_PHONE_NUMBER
        const message = 'Greetings, Please  I\'d like to learn more about your menu and place an order.'

        const encodedMessage = encodeURIComponent(message)
        // const param = new URLSearchParams({ text: message })

        // Open WhatsApp in a new tab with the pre-filled message
        // window.open(`https://wa.me/${phone}?${param}`, '_blank')
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
    }

    