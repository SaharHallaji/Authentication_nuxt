import {tokenGenerator} from "~/server/utils/tokenGenerator"
import Users from "~/server/model/Users"
import {compareBcrypt} from "~/server/utils/compareBcrypt"


export default defineEventHandler(async (event) => {
    console.log("POST /api/logIn")
    const {username, password} = await readBody(event)

    if (!(username && password))
        throw createError({
            statusCode: 401,
            statusMessage: "Username And Password Is Required!"
        })


    const user = await Users.findOne({username: username})

    if (!user)
        return {
            statusCode: 401,
            statusMessage: "Username Or Password Is Incorrect!"
        }

    compareBcrypt(password, user.password!!).then((response) => {
        if (!response)
            return {
                statusCode: 401,
                statusMessage: "Username Or Password Is Incorrect!"
            }
    }).catch((err) => {
        throw createError({
            statusCode: 500,
            statusMessage: err
        })
    })


    const token = tokenGenerator(user.id)

    return {statusCode: 200, statusMessage: "done!", token: token}


})