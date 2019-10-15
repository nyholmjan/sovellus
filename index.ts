import * as express from 'express'

const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port, () => console.info(`listening on ${port}`))