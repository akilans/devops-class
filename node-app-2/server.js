const express = require('express')
const app = express()

const port = process.env.PORT || 3000


app.get("/",(req,res)=>{
    res.send("Hello Akilan, Node APP 2!!!")
})

app.listen(port, () => console.log(`Node app 2 listening on port ${port}!`))