import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
export const signUp=async(req,response)=>{
    try {
        const {fullname,email,password,mobile,role}=req.body
        const user=await User.findOne({email})
        if(user)
        {
            return res.status(400).json({message:"User already exist."})
        }
        if (password.length<6)
        {
            return res.status(400).json({message:"password must be atleast of 6 characters."})
        }
        if(mobile.length<10)
        {
            return res.status(400).json({message:"Mobile number is invalid"})
        }

        const hashedPassword=await bcrypt.hash(password,10)

        user=await user.create({
            fullname,
            email,
            role,
            mobile,
            password:hashedPassword
        })

        const tojen=await gentoken(user._id)
        res.cookie("token",Token,{
            secure:false,
            samsite:"strict",
            maxAge:7*24*60*1000,
            httpsOnly:true
        })

        return res.status(201).json(user)

    }catch(error)
    {
        return res.status(500).json(`sign up error ${error}`)

    }
    
}

export const signIn=async(req,response)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user)
        {
            return res.status(400).json({message:"User doesnot exist."})
        }

        const ismatch=await bcrypt.compare(password,user.password)

        if(!ismatch){
            return res.status(400).json({message:"incorrect password"})
        }


        const tojen=await gentoken(user._id)
        res.cookie("token",Token,{
            secure:false,
            samsite:"strict",
            maxAge:7*24*60*1000,
            httpsOnly:true
        })

        return res.status(200).json(user)

    }catch(error)
    {
        return res.status(500).json(`sign in error ${error}`)

    }
    
}

export const signOut=async (req,res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"log out successfully"})


    } catch (error) {
        
    }
}