import mongoose from "mongoose"
const { Schema } = mongoose
const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  img: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  // URL中用来标识页面或文章的固定连接标题或别名，有利于SEO和链接优化
  slug: {
    type: String,
    unique: true
  },
  desc: {
    type: String
  },
  category: {
    type: String,
    default: 'general'
  },
  content: {
    type: String,
    required: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  visit: {
    type: Number,
    default: 0
  },
}, {    // 让Mongoose自动给每条文档添加并维护createdAt和updatedAt两个字段
  timestamps: true 
});

export default mongoose.model("Post", postSchema);