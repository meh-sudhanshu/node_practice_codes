import express from 'express'
import bcrypt from 'bcrypt'

import UserTable from '../model/userTable.js'

const router = express.Router()


router.post("/register",async(req,res)=>{
    const user = req.body

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(user.password,salt)
    user.password = hashedPassword
    //console.log(user)
    const savedUser = UserTable.saveUser(user)
    // console.log(savedUser)
    res.send("user saved succesfully")
})

router.get("/find-by-email",(req,res)=>{
    res.send("find by email logic executed")
})

router.get("/get-all-users",(req,res)=>{
    res.send("get all users logic executed")
})

router.get("/login",async(req,res)=>{
    const {email,password} = req.body
    const usersList = await UserTable.getAllUsers()
    for(var i=0;i<usersList.length;i++){
        const user = usersList[i]
        if(user.email === email ){
            const hashedPassword = user.password
            var isMatched = await bcrypt.compare(password,hashedPassword)
            return res.send([email,password,isMatched])
        }
    }
    res.send("not so happy path")
})


export default router