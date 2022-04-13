import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    surname: String,
    name: String,
    fatherName: String,
    // birthdate: Date,
    // pasportNumber: Number,
    // phoneNumber: Number,
    // adress: String
})

const User = mongoose.model("User", UserSchema)

export default User