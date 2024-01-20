const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta',(req , res)=> {
    res.send("Struggling Sana")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
