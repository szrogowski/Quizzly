import express from "express"
import User from "../models/User.js"
import jwt from "jsonwebtoken"
import { protect} from "../middleware/auth.js"
const router = express.Router();

router.post("/register", async (req,res)=> {
    const {first_name,second_name,birth_date,email,password} = req.body;
    try {
        if(!first_name || !second_name ||  !email || !password)
        {
            return res.status(400).json({message: "Please fill all the fields."})
        }

        const userExists = await User.findOne({email})
        if(userExists)
        {
            return res.status(400).json({message: "User already exists"})
        }

        const user = await User.create({first_name,second_name,birth_date,email,password})
        const token = generateToken(user._id)
        res.status(201).json(
            {
                id:user._id,
                first_name:user.first_name,
                second_name:user.second_name,
                birth_date:user.birth_date,
                email:user.email,
                token,

            })
    }catch(err){
        res.status(500).json({message: err})
    }
})  

router.post("/login",async (req,res)=> {
    const {email,password} = req.body;

    try {
          if(!email || !password)
        {
            return res.status(400).json({message: "Please fill all the fields."})
        }

        const user = await User.findOne({email})

        if(!user || !(await user.matchPassword(password)))
        {
            return res.status(401).json({message: "Invalid credentials"})
        }

        // 

        const token = generateToken(user._id)
        res.status(200).json({
            id:user._id,
            first_name:user.first_name,
            second_name:user.second_name,
            birth_date:user.birth_date,
            email:user.email,
            token,
        })
    }catch(error)
    {
        res.status(500).json({message: error});
    }
})

// me 
router.get("/me",protect , async (req,res)=> {
     res.status(200).json(req.user)
 })

 // generate jwt token
const generateToken = (id)=> {
    return jwt.sign({id},process.env.JWT_SECRET, {expiresIn: "30d"})
}

export default router;