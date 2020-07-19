const express = require('express')
const app = express()

const port = process.env.PORT || 3000


app.get("/",(req,res)=>{
    res.send("Hello Akilan, Node APP 1!!!")
})

app.listen(port, () => console.log(`Node app 1 listening on port ${port}!`))