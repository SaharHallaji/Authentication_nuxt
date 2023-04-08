import mongoose from "mongoose"

const schema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    password : String,
    email: String
})

export default mongoose.model("Users", schema)