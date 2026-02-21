import argon2 from 'argon2';

const argon2HashPassword = async (password) => await argon2.hash(password)
const argon2VerifyPassword = async (hash, password) => await argon2.verify(hash, password)

const main = async () => {
    const hash = await argon2HashPassword("csd1993")

    console.log(hash)

    const matched = await argon2VerifyPassword(hash, "csd1993")

    console.log(matched)
}


/*
import argon2 from 'argon2';

const argon2HashPassword = async (password) => await argon2.hash(password)
const argon2VerifyPassword = async (hash, password) => await argon2.verify(hash, password)

const main = async () => {
    const hash = await argon2HashPassword("csd1993")

    console.log(hash)

    const matched = await argon2VerifyPassword(hash, "csd1993")

    console.log(matched)
}

 */

main()

/*
import bcrypt from 'bcrypt';

const bcryptHashPassword = async (password, saltBound) => await bcrypt.hash(password, saltBound)
const bcryptComparePassword = async (password, hash) => await bcrypt.compare(password, hash)

const main = async () => {
    const hash = await bcryptHashPassword("csd1993", 10)

    console.log(hash)

    const matched = await bcryptComparePassword("csd1993", hash)

    console.log(matched)
}

main()

 */


/*
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

 */