import { useState } from 'react'
import PostLists from '../components/PostLists'
import SideMenu from '../components/SideMenu'

const PostListPage = () => {
  const [ open, setOpen ] = useState(false)
  return (
    <div>
      <h1 className='my-8 text-2xl'>Development Blog</h1>
      <button 
        className='px-6 py-2 bg-blue-800 text-white text-sm rounded-2xl mb-4 md:hidden'
        onClick={() => setOpen((prev) => !prev)}
      >
        { open ? '关闭' : 'Filter or Select'}
      </button>
      {/* flex-col-reverse：垂直方向倒序排列子元素 */}
      <div className='flex flex-col-reverse gap-8 md:flex-row'>
        <PostLists />
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  )
}
export default PostListPage;