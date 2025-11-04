import express from "express"

const router = express.Router()

router.get('/anotherTest', (req, res) => {
  res.status(200).send('user')
})

export default router