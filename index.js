import express from 'express'
import IndexRouter from './src/routed/index.js'
const PORT = process.env.PORT ||8000

const app = express()

app.use('/',IndexRouter)
app.listen(PORT,()=>{
    console.log(`server is connected sucessfull port${PORT} `)
})