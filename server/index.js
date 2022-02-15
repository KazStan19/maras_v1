const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 3001
 
app.use(express.json())
app.use(cors())

app.listen(PORT,()=>{

    console.log(`live server is on : ${PORT} port `)

})