import crypto from 'crypto-js';

const main = async () => {
    if (process.argv.length !== 4) {
        console.error("Usage: node app.mjs <text to encrypt> <pasword>")
        process.exit(1);
    }

    const text = process.argv[2]
    const password = process.argv[3]

    console.log(`Text to encrypt: ${text} with password: ${password}`)

    const encryptedText =  crypto.AES.encrypt(text, password).toString()

    console.log(`Encrypted text: ${encryptedText}`)

    const decryptedText =  crypto.AES.decrypt(encryptedText, password).toString(crypto.enc.Utf8)
    console.log(`Decrypted text: ${decryptedText}`)
}

main()