import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const saltRounds = 8

export interface I_UserDocument extends mongoose.Document {
    name: string
    email: string
    password: string
    age: number
    createdAt: Date
}

const UserSchema: mongoose.Schema<I_UserDocument> = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 100 },
    email: { type: String, required: true, minlength: 3, maxlength: 100 },
    password: { type: String, required: true, minlength: 6, maxlength: 200 },
    age: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
})
const UserModel = mongoose.model<I_UserDocument>('User', UserSchema)

UserSchema.pre('save', async function (next) {
    const self = this
    if (self.isModified('password')) {
        self.password = await bcrypt.hash(self.password, saltRounds)
    }
    next()
})

export default UserModel
