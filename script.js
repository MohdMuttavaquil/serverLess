import express from "express"
import serverless from "serverless-http"

const app = express()

app.get('/', (req,res)=> {
    res.send("server is running fine")
})

export const handler = serverless(app)