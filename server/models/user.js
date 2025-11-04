import mongoose from "mongoose"
const { Schema } = mongoose
const userSchema = new Schema({
  clerkUserId: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  img: {
    type: String
  },
  savePosts: {
    type: [String],
    default: []
  },
}, { timestamps: true });

export default mongoose.model("User", userSchema);