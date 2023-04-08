import Users from "~/server/model/Users";
import bcrypt from "bcrypt";


export default defineEventHandler(async (event) => {
    console.log("POST /api/signUp")
    const validate = (str: any) => str !== null && typeof str !== "undefined" && str !== ""

    const {firstName, lastName, username, password, email} = await readBody(event)
    if (!(validate(firstName) && validate(lastName) && validate(username) && validate(password) && validate(email)))
        return {
            statusCode: 401,
            statusMessage: "All Of Fields Are Required!"
        }
    const user = await Users.findOne({username: username})
    if (user)
        return {
            statusCode: 401,
            statusMessage: "This Username Is Already Exist." + user
        }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new Users({
        first_name: firstName,
        last_name: lastName,
        username: username,
        password: hashedPassword,
        email: email
    })

    await newUser.save()
    return {statusCode: 200, statusMessage: "done!"}

})