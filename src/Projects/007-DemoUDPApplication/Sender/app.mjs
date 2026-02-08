import dgram from 'dgram'

import crypto from 'crypto-js'

const OK_MESSAGE_KEY = "csd1993"
const PANIC_MESSAGE_KEY = "csystem1993"

let counter = 0

const sendIntervalCallback = (s,rh) => {
    const messageText = `I am Ok!..., Counter: ${counter++}`
    const encryptedMessage = crypto.AES.encrypt(messageText, OK_MESSAGE_KEY).toString()

    const message = Buffer.from(encryptedMessage)

    s.send(message, 60700, rh, e => {
        if (e)
            console.error("Error sending message:", e)
        else
            console.log(`Message sent. Count: ${counter}`)
    })
}

const main = () => {
    if (process.argv.length !== 3) {
        console.error("Usage: node app.mjs <receiver_host>")
        process.exit(1)
    }

    const sender = dgram.createSocket('udp4')

    setInterval(() => sendIntervalCallback(sender, process[2]), 100)
}

main()
