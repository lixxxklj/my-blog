import { Link } from 'react-router-dom'
import MainCategories from '../components/MainCategories'
import FeaturedPosts from '../components/FeaturedPosts'
import Image from '../components/Image'
import PostLists from '../components/PostLists'

const HomePage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      {/* bread crumb */}
      <div className='flex gap-4'>
        <Link to='/'>首页</Link>
        <span>·</span>
        <span className='text-blue-800'>博客文章</span>
      </div>
      {/* introduction */}
      <div className='flex items-center justify-between'>
        {/* title */}
        <div>
          <h1 className='text-gray-800 text-2xl md:text-3xl lg:text-4xl font-bold'>Clerk 用户认证系统集成文档</h1>
          <p className='mt-4 text-md md:text-xl'>
            Clerk是一个现代化的用户认证和用户管理平台，提供了完整的身份验证解决方案
          </p>
        </div>
        {/* animation button */}
        <Link to='/write' className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            // animate-spin：animation: span 1s linear infinite; 文字环匀速旋转
            className="text-lg tracking-widest animate-spin animateButton"
          >
            <path 
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"
            />
            <text>
              <textPath href='#circlePath' startOffset='0%'>write your story ·</textPath>
              <textPath href='#circlePath' startOffset='50%'>share your ideal ·</textPath>
            </text>
          </svg>
          {/* absolute + top-0 left-0 right-0 bottom-0 + m-auto：水平垂直居中 */}
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg 
              t="1757838838561" 
              className="icon" 
              viewBox="0 0 1024 1024" 
              version="1.1" 
              xmlns="http://www.w3.org/2000/svg" 
              p-id="3567" 
              width="50" 
              height="50"
            >
              <path 
                d="M128 896h768v-64H128zM256 704v-146.752l224-224L626.752 480l-224 224H256zM608 205.248L754.752 352 672 434.752 525.248 288 608 205.248z m214.624 169.408l0.032-0.032a32 32 0 0 0 0-45.248l-0.032-0.032-191.968-191.968-0.032-0.032a32 32 0 0 0-45.248 0l-0.032 0.032L192 530.752V768h237.248l393.376-393.344z" 
                fill="#ffffff" 
                p-id="3568"
              >
              </path>
            </svg>
          </button>
        </Link>
      </div>
      {/* main categories */}
      <MainCategories />
      {/* featured posts */}
      <FeaturedPosts />
      {/* posts list */}
      <div>
        <h1 className='my-8 text-2xl text-gray-600'>Recent Posts</h1>
        <PostLists />
      </div>
    </div>
  )
}
export default HomePage;