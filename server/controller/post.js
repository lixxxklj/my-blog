import Imagekit from 'imagekit'
import Post from '../models/post.js'
import User from '../models/user.js'

export const getPosts = async (req, res) => {
  // console.log(req);
  // 查找所有的
  const posts = await Post.find();
  res.status(200).json(posts)
}

export const getPost = async (req, res) => {
  // 只找一个
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).json(post)
}

export const createPost = async (req, res) => {
  const clerkUserId = req.auth().userId
  if(!clerkUserId) {
    return res.status(401).json('未授权')
  }
  const user = await User.findOne({ clerkUserId })
  if(!user) {
    return res.status(404).json('用户不存在')
  }
  // let slug = req.body.title.replace(/ /g, "-").toLowerCase()
  let slug = req.body.title
  let existingPost = await Post.findOne({ slug })
  let counter = 2
  while(existingPost) {
    slug = `${slug}-${counter}`
    existingPost = await Post.findOne({ slug })
    counter++
  }
  // console.log(user._id);
  const newPost = new Post({user: user._id, slug, ...req.body})
  const post = await newPost.save()
  res.status(200).json(post)
}

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId
  if(!clerkUserId) {
    return res.status(401).json('未授权')
  }
  const user = User.findOne({ clerkUserId })
  if(!user) {
    return res.status(404).json('用户不存在')
  }
  const deletePost = await Post.findByIdAndDelete({_id: req.params.id, user: user._id});
  if(!deletePost) {
    return res.status(403).json('禁止删除其他人的文章')
  }
  res.status(200).json("删除成功")
}

const imagekit = new Imagekit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY
})

export const uploadAuth = async (req, rea) => {
  const result = imagekit.getAuthenticationParameters()
}
