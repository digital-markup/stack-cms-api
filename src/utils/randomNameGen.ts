import crypto from "crypto"

const randomGenerator = (key: number = 32) => crypto.randomBytes(key).toString("hex")

export default randomGenerator