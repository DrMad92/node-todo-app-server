import express from 'express'
import morgan from 'morgan'
import { rootHandler, helloHandler } from './handlers'

const app = express()
const port = process.env.PORT || '8000'

app.use(
  morgan(
    ':date[iso] :remote-addr :method :url :status :res[content-length] - :response-time ms'
  )
)

app.get('/', rootHandler)
app.get('/hello/:name', helloHandler)

app.listen(port, () => console.log(`Server is listening on ${port}`))
