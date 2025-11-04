import { Link } from 'react-router-dom'
import Image from './Image'
const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* first */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        {/* image */}
        <Image
          src='featured1.jpeg'
          // object-cover：铺满 + 不变形 + 可能被裁剪【object-contain：完整显示，可能留白、object-fill：拉伸变形 + 填满】
          className='rounded-3xl object-cover'
          w="895"
        />
        {/* details */}
        <div className='flex items-center gap-4'>
          <h1 className='font-semibold lg:text-lg'>01.</h1>
          <Link className='text-blue-800 lg:text-lg'>Web Design</Link>
          <span className='text-gray-500'>2 days ago</span>
        </div>
        {/* title */}
        <Link to="/test" className='text-2xl lg:text-3xl font-semibold lg:font-bold'>
          第一篇文章
        </Link>
      </div>
      {/* other */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        <div className='lg:h-1/3 flex justify-between gap-4'>
          <div className='w-1/3 aspect-video'>
            <Image
              src='featured2.jpeg'
              // aspect-video：16:9 的封面卡片
              className='rounded-2xl object-cover w-full h-full'
            />
          </div>
          <div className='w-2/3'>
            <div className='flex items-center gap-4 test-sm lg:text-base mb-4'>
              <h1 className='font-semibold'>02.</h1>
              <Link className='text-blue-800'>Web Design</Link>
              <span className='text-gray-500 test-sm'>2 days ago</span>
            </div>
            <Link to="/test" className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium'>文章标题</Link>
          </div>
        </div>
        <div className='lg:h-1/3 flex justify-between gap-4'>
          <div className='w-1/3 aspect-video'>
            <Image
              src='featured2.jpeg'
              // aspect-video：16:9 的封面卡片
              className='rounded-2xl object-cover w-full h-full'
              w='298'
            />
          </div>
          <div className='w-2/3'>
            <div className='flex items-center gap-4 test-sm lg:text-base mb-4'>
              <h1 className='font-semibold'>02.</h1>
              <Link className='text-blue-800'>Web Design</Link>
              <span className='text-gray-500 test-sm'>2 days ago</span>
            </div>
            <Link to="/test" className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium'>文章标题</Link>
          </div>
        </div>
        <div className='lg:h-1/3 flex justify-between gap-4'>
          <div className='w-1/3 aspect-video'>
            <Image
              src='featured2.jpeg'
              // aspect-video：16:9 的封面卡片
              className='rounded-2xl object-cover w-full h-full'
            />
          </div>
          <div className='w-2/3'>
            <div className='flex items-center gap-4 test-sm lg:text-base mb-4'>
              <h1 className='font-semibold'>02.</h1>
              <Link className='text-blue-800'>Web Design</Link>
              <span className='text-gray-500 test-sm'>2 days ago</span>
            </div>
            <Link to="/test" className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium'>文章标题</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FeaturedPosts;