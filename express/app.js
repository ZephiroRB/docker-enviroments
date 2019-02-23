const express = require('express')

const app = express()

app.use('/', (req, res) => {
    res.sendStatus(200)
})

app.listen(process.env.PORT || 3000, () => {
        console.log('Server ON');
    });