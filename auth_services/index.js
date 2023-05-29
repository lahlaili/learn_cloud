const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')

mongoose.connect()

app.use(express.json)

app.listen(port,()=>{
    console.log(`auth services is running at ${port}`)
})