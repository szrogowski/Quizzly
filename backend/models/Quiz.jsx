import mongoose from "mongoose";
import bcrypt from "bcryptjs";
 // template of user 
const userSchema = mongoose.Schema(
    {
        first_name: {
            type:String,
            required:true,
        },
        second_name: {
            type:String,
            required:true,
        },
        birth_date: {
            type:Date,
            default:Date.now,
            
        },
        email: {
            type:String,
            required:true,
            unique:true,
        },  
        password: {
            type:String,
            required:true,
        }
    },{timestamps:true}
)


const Quiz = mongoose.model("Quiz",quizSchema)
export default Quiz;