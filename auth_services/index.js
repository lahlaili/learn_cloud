const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const User = require('./user.model')


mongoose.connect("mongodb://127.0.0.1/auth_services")
mongoose.connection.on("connected",()=>{
    console.log('auth_services mongodb connected')
})



app.post('/auth/register',(req,res)=>{
    const {email,password} = req.body
    const newUser = new User({
        email,password
    })
    newUser.save()
    return res.json(newUser)
})











app.use(express.json())

app.listen(port,()=>{
    console.log(`auth services is running at ${port}`)
})