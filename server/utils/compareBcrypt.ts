import bcrypt from "bcrypt"

export const compareBcrypt = async (password: string, userPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, userPassword)
}