import { Link } from 'react-router-dom'
import Image from './Image'
const PostListItem = ({postData}) => {
  console.log(postData);
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      <div className='md:hidden xl:block xl:w-1/3'>
        <Image
          src='postImg.jpeg'
          className='rounded-2xl object-cover'
          w='735'
        />
      </div>
      <div className='flex flex-col gap-4 xl:w-2/3'>
        <Link to="/test" className='text-3xl font-semibold'>
          文章标题文章标题文章标题文章标题
          文章标题文章标题文章标题文章标题文章标题文章标题
        </Link>
        <div className='flex items-center gap-2 text-gray-400 text-sm'>
          <span>Written by</span>
          <Link className='text-blue-800'>luxin</Link>
          <span>on</span>
          <Link className='text-blue-800'>Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Websocket 是基于TCP的一种新的网络协议。允许在单个 TCP 连接上进行全双工通信。
          与传统的 HTTP 请求-响应模式不同，WebSocket 提供了持久的连接，服务器和客户端
          可以随时主动推送数据，无需反复建立连接，可以进行双向数据传输。客户端可以向服务
          器发送数据，服务器也可以向客户端发送消息。
        </p>
        <Link to="/test" className='underline text-blue-800'>Read More</Link>
      </div>
    </div>
  )
}
export default PostListItem;