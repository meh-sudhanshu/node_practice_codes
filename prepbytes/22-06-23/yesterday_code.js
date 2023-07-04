const express = require('express')
const env = require('dotenv')
const bcrypt = require('bcrypt')

const jwt = require("jsonwebtoken")


const { use } = require('express/lib/application')


const app = express()
app.use(express.json())

env.config()

const users = []

app.use("/send-reset-email",(req,res)=>{
    const {email} = req.body
    if(email){
        const user ={
            _id:"1",
            email:"sudhanshukumar8816@gmail.com",
            password:"Test@123",
        }
        if(user){
            const secret = user._id + process.env.JWT_SECRET_KEY
            const token = jwt.sign({userId:user._id},secret,{expiresIn:"15m"})
            const link = `http://127.0.0.1.3000/api/user/reset-password/${user._id}/${token}`
            console.log(link)

            res.send({
                "success":"link generated successfully"
            })
            
        }else{
            res.send({
                email:email,
                message:"No user exists with such email"
            })
        }
    }else{
        res.send({
            "failure":"Email is required to reset the password"
        })
    }
})
app.use("/reset-password/:_id/:token",async (req,res)=>{
    const {newPassword, confNewPassword} = req.body
    if(newPassword && confNewPassword){
        if(newPassword !== confNewPassword){
            res.send({
                "failure":"Fields do not match"
            })
        }else{
           const {_id,token} = req.params
           const user = {
                _id:"1",
                email:"sudhanshukumar8816@gmail.com",
                password:"Test@123",
           }
           const newSecret = _id+ process.env.JWT_SECRET_KEY

           //1sjcbudwbc3r3827y@343hr34h

           try{
                jwt.verify(token,newSecret)
                const salt = await bcrypt.genSalt(10)
                const newHashedPassword = await bcrypt.hash(newPassword,salt)
                user.password = newHashedPassword
                console.log(user)
                res.send({
                    "success":"password updated successfully"
                })
           }catch{
                res.send({
                    "message":"Something went wrong"
                })
           }
        }
    }else{
        res.send({
            "failure":"Either password or conf_password is missing"
        })
    }
})


const port = process.env.PORT

app.listen(port,()=>{
    console.log('server is up and running on port 8080')
})

// http://127.0.0.1.3000/api/user/reset-password/1/{jwt_token}

            // create the link suing which you can can fetch user data
            // install nodemailer as a prod dependemcies in you app