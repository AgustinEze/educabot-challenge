import express from 'express'
import cors from 'cors'
import {MetricsHandler} from './handlers/metrics.ts'
import { BooksRepository } from './repositories/booksRepository.ts'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

const booksRepository = new BooksRepository()
const metricsHandler = new MetricsHandler(booksRepository)
app.get('/', metricsHandler.get)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export { app }
