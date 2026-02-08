import net from "node:net"

const upperClientConnectionCallback = client => {
    console.log("Client connected to upper server")

    client.write(process.argv[2])
    client.end()
}

const randomNumberClientConnectionCallback = client => {
    console.log("Client connected to random number server")

    const buf = Buffer.alloc(8)

    buf.writeInt32BE(parseInt(process.argv[3]), 0)
    buf.writeInt32BE(parseInt(process.argv[4]), 4)

    client.write(buf)
    client.end()
}

const randomNumberDataCallback = d => {
    console.log("Data received from random server:", d.readInt32BE(0))
}

const main = () => {
    //Command line arguments check
    const upperClient = net.createConnection({port: 50500, host: "127.0.0.1"}, () => upperClientConnectionCallback(upperClient))
    const randomNumberClient = net.createConnection({port: 50501, host: "127.0.0.1"}, () => randomNumberClientConnectionCallback(randomNumberClient))

    upperClient.on("data", data => console.log("Data received from upper server:", data.toString()))
    upperClient.on("end", () => console.log("Disconnected from upper server"))
    randomNumberClient.on("data", randomNumberDataCallback)
    randomNumberClient.on("end", () => console.log("Disconnected from random number server"))
}

main()