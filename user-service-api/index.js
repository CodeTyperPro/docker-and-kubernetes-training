const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([
    {
        name: 'Bob',
        email: 'bob@gmail.com'
    },
    {
        name: 'Alice',
        email: 'alice@yahoo.com'
    },
    {
        name: 'Jack',
        email: 'jack@hotmail.com'
    },
    {
        name: 'Énio',
        email: 'enio@facebook.com.uk'
    }
])})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})