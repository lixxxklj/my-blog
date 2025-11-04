import express from "express"
import { 
  getPosts, 
  getPost, 
  createPost, 
  deletePost,
  uploadAuth
} from '../controller/post.js'

const router = express.Router()

// 将请求和操作分开来：操作放controller中
// 要放在/:slug前面，防止被他覆盖掉
router.get('/upload-auth', uploadAuth)
router.get('/', getPosts)
router.get('/:slug', getPost)
// 任何人都可以查看文章，但是发布或者删除文章只能是用户
router.post('/', createPost)
router.delete('/:id', deletePost)

export default router