import Image from '../components/Image'

const Comment = () => {
  return (
    <div className='p-4 w-full bg-white rounded-xl'>
      <div className='flex items-center gap-4'>
        <Image 
          src='userImg.jpeg'
          className='w-10 h-10 rounded-full object-cover'
          w="40"
          h="40"
        />
        <span>John Doe</span>
        <span className='text-sm text-gray-500'>2 days ago</span>
      </div>
      <p className='mt-4'>
        React 是一个用于构建用户界面的 JavaScript 库。与传统的前端开发框架不同，
        React 采用了组件化的开发模式，将页面拆分为一个个独立的组件，
        每个组件只负责自身的状态和渲染。通过这种方式，可以显著提高代码的可复用性和可维护性。
      </p>
    </div>
  )
}
export default Comment;