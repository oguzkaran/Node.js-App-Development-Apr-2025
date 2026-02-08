import dgram from 'dgram';

import crypto from 'crypto-js'

const OK_MESSAGE_KEY = "csd1993"
const PANIC_MESSAGE_KEY = "csystem1993"

const messageHandler = (msg, info) => {
    try {
        console.log("####################################################")
        console.log(`Received from ${info.address}:${info.port}`)
        console.log(`Encrypted Message: ${msg}`)

        const decryptedMsg = crypto.AES.decrypt(msg.toString(), OK_MESSAGE_KEY).toString(crypto.enc.Utf8)
        console.log(`Decrypted Message: ${decryptedMsg}`)
        console.log("####################################################")
    }
    catch (e) {
        console.error("Error decrypting message:", e)
    }
}

const main = () => {
    const receiver = dgram.createSocket('udp4')

    receiver.on("message", messageHandler)
    receiver.on("listening", () =>  console.log(`UDP Receiver is listening on ${receiver.address().address}:${receiver.address().port}`))
    receiver.bind(60700)
}

main()
