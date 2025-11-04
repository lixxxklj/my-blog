import { Link } from 'react-router-dom'
import Image from '../components/Image'
import PostMenuActions from '../components/PostMenuActions'
import SearchBox from '../components/SearchBox'
import Comments from '../components/Comments'

const SinglePage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-4'>
          <h1 className='text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold'>
            前端数据库 IndexedDB 详解：构建强大的离线Web应用
          </h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by</span>
            <Link className='text-blue-800'>John Doe</Link>
            <span>on</span>
            <Link className='text-blue-800'>Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className='text-gray-600 font-medium'>
            在现代Web开发中，我们经常需要处理大量结构化数据。传统的localStorage和
            sessionStorage虽然简单易用，但只能存储少量字符串数据，无法满足复杂应用的需求。
            IndexedDB应运而生——这是一个功能强大的浏览器内置数据库，支持存储大量结构化数据，
            提供索引、事务等高级功能，是实现离线应用、缓存机制和复杂数据处理的理想选择。
          </p>
        </div>
        <div className='hidden lg:block w-2/5'>
          <Image
            src='postImg.jpeg'
            className='rounded-2xl'
            w='500'
          />
        </div>
      </div>
      {/* content */}
      <div className='flex flex-col md:flex-row gap-12'>
        {/* text */}
        <div className='lg:text-lg flex flex-col gap-4 text-justify'>
          <p>
            在现代Web开发中，我们经常需要处理大量结构化数据。传统的localStorage和
            sessionStorage虽然简单易用，但只能存储少量字符串数据，无法满足复杂应用的需求。
            IndexedDB应运而生——这是一个功能强大的浏览器内置数据库，支持存储大量结构化数据，
            提供索引、事务等高级功能，是实现离线应用、缓存机制和复杂数据处理的理想选择。
          </p>
          <p>
            在现代Web开发中，我们经常需要处理大量结构化数据。传统的localStorage和
            sessionStorage虽然简单易用，但只能存储少量字符串数据，无法满足复杂应用的需求。
            IndexedDB应运而生——这是一个功能强大的浏览器内置数据库，支持存储大量结构化数据，
            提供索引、事务等高级功能，是实现离线应用、缓存机制和复杂数据处理的理想选择。
          </p>
          <p>
            在现代Web开发中，我们经常需要处理大量结构化数据。传统的localStorage和
            sessionStorage虽然简单易用，但只能存储少量字符串数据，无法满足复杂应用的需求。
            IndexedDB应运而生——这是一个功能强大的浏览器内置数据库，支持存储大量结构化数据，
            提供索引、事务等高级功能，是实现离线应用、缓存机制和复杂数据处理的理想选择。
          </p>
          <p>
            在现代Web开发中，我们经常需要处理大量结构化数据。传统的localStorage和
            sessionStorage虽然简单易用，但只能存储少量字符串数据，无法满足复杂应用的需求。
            IndexedDB应运而生——这是一个功能强大的浏览器内置数据库，支持存储大量结构化数据，
            提供索引、事务等高级功能，是实现离线应用、缓存机制和复杂数据处理的理想选择。
          </p>
          <p>
            在现代Web开发中，我们经常需要处理大量结构化数据。传统的localStorage和
            sessionStorage虽然简单易用，但只能存储少量字符串数据，无法满足复杂应用的需求。
            IndexedDB应运而生——这是一个功能强大的浏览器内置数据库，支持存储大量结构化数据，
            提供索引、事务等高级功能，是实现离线应用、缓存机制和复杂数据处理的理想选择。
          </p>
          <p>
            在现代Web开发中，我们经常需要处理大量结构化数据。传统的localStorage和
            sessionStorage虽然简单易用，但只能存储少量字符串数据，无法满足复杂应用的需求。
            IndexedDB应运而生——这是一个功能强大的浏览器内置数据库，支持存储大量结构化数据，
            提供索引、事务等高级功能，是实现离线应用、缓存机制和复杂数据处理的理想选择。
          </p>
          <p>
            在现代Web开发中，我们经常需要处理大量结构化数据。传统的localStorage和
            sessionStorage虽然简单易用，但只能存储少量字符串数据，无法满足复杂应用的需求。
            IndexedDB应运而生——这是一个功能强大的浏览器内置数据库，支持存储大量结构化数据，
            提供索引、事务等高级功能，是实现离线应用、缓存机制和复杂数据处理的理想选择。
          </p>
          <p>
            在现代Web开发中，我们经常需要处理大量结构化数据。传统的localStorage和
            sessionStorage虽然简单易用，但只能存储少量字符串数据，无法满足复杂应用的需求。
            IndexedDB应运而生——这是一个功能强大的浏览器内置数据库，支持存储大量结构化数据，
            提供索引、事务等高级功能，是实现离线应用、缓存机制和复杂数据处理的理想选择。
          </p>
          <p>
            在现代Web开发中，我们经常需要处理大量结构化数据。传统的localStorage和
            sessionStorage虽然简单易用，但只能存储少量字符串数据，无法满足复杂应用的需求。
            IndexedDB应运而生——这是一个功能强大的浏览器内置数据库，支持存储大量结构化数据，
            提供索引、事务等高级功能，是实现离线应用、缓存机制和复杂数据处理的理想选择。
          </p>
        </div>
        {/* menu */}
        {/* px-4 h-max sticky top-8：左右内边距为1rem（16px），高度由内容决定，滚动时贴在距离顶部32px的位置 */}
        <div className='px-4 h-max sticky top-8'>
          <div className='flex flex-col gap-4'>
            <h1 className='mb-2 text-sm font-semibold'>作者</h1>
            <div className='flex items-center gap-8'>
              <Image 
                src='logo.jpg'
                className='w-12 h-12 rounded-full object-cover'
                w="48"
                h="48"
              />
              <Link className='text-blue-800 text-lg'>luxin</Link>
            </div>
            <p className='text-sm text-grap-500'>这个人没有写个人介绍...</p>
            <div className='flex gap-2'>
              <Link>
                <Image src='facebook.svg' />
              </Link>
              <Link>
                <Image src='instagram.svg' />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className='mt-8 mb-2 text-sm font-semibold'>分类</h1>
          <div className='flex flex-col gap-2 text-sm'>
            <Link className='underline'>All</Link>
            <Link className='underline'>Wen Design</Link>
            <Link className='underline'>Development</Link>
            <Link className='underline'>Database</Link>
            <Link className='underline'>Search Engines</Link>
            <Link className='underline'>Marketing</Link>
          </div>
          <h1 className='mt-8 mb-2 text-sm font-semibold'>Search</h1>
          <SearchBox />
        </div>
      </div>
      {/* comments */}
      <Comments />
    </div>
  )
}
export default SinglePage;