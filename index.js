require('dotenv').config
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get ('/facebook',(req,res) => {
    res.send('getabhisheksinghal')
})


app.get('/youtube', (req, res) => {
  res.json({
    name: 'kamal jain',
    number: 234874874
  });
});
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})