import express from 'express'
import router from './routes/userRouter.routes'

const app=express()


app.get('/',(req,res)=>{
    res.send("Hi this app is working")
})


app.use('/api/v1/users',router)

export default app;