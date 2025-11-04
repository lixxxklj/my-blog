// 在 package.json 中规定了type为module，从而可以使用现代的 import/export 方法
import express from "express"
import { clerkMiddleware } from '@clerk/express'
import connectDB from './utils/connectDB.js'
import userRouter from './routes/user.js'
import postRouter from './routes/post.js'
import commentRouter from './routes/comment.js'
import webhookRoute from './routes/webhook.js'
import cors from 'cors'

const app = express()

app.use(cors(process.env.CLIENT_URL))
// clerkMiddleware只保护业务接口，Webhook接口要在它之前
app.use(clerkMiddleware())
// clerk的webhook要求原始body做签名验证，所以一定要放在app.use(express.json())之前
app.use("/webhooks", webhookRoute)
// 让express能够解析Content-Type:application/json的请求体，并将结果放到req.body里
app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

/* 
  req：来自客户端的请求
  res：来自服务器的响应
app.get('/test', (req, res) => {
  res.status(200).send('it works!')
})
*/
/* app.get('/auth-state', (req, res) => {
  const authState = req.auth
  res.json(authState)
}) */
/* app.get('/protect', (req, res) => {
  const { userId } = req.auth
  if(!userId) {
    return res.status(401).json('未授权')
  } 
  res.status(200).json("content")
}) */

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

// 这个中间件必须放到所有路由之后，才能接住next(err)过来的异常
app.use((err, req, res, next) => {
  const status = err.status || 500
    res.status(status).json({
      msg: err.message || "something went wrong",
      status,
      stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
  })
})

// console.log(process.env.test)  ===>  启动命令：node --env-file .env --watch index.js

// 监听3000端口
app.listen(3000, () => {
  connectDB()
  console.log("Server is running");
})