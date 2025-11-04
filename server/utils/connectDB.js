// 连接数据库
import mongoose from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('connectDB connected...')
  } catch (error) {
    console.log(error)
  }
}

export default connectDB