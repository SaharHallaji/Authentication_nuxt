import jwt from "jsonwebtoken"
import crypto from "crypto";
export const tokenGenerator = (id: string): string => {
    const secretKey = crypto.randomBytes(256).toString('base64')
    return jwt.sign({id: id}, secretKey)
}