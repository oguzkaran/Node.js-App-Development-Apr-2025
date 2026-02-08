import dgram from 'dgram'

let counter = 0

const sendIntervalCallback = (s,rh) => {
    const message = Buffer.from(`I am Ok!..., Counter: ${++counter}`)

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
