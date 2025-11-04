import { Link } from "react-router-dom"
import SearchBox from '../components/SearchBox'

const SideMenu = () => {
  return (
    <div className='px-4 h-max sticky top-8'>
      <h1 className='mb-4 font-medium'>查询</h1>
      <SearchBox />
      <h1 className='mt-8 mb-4 font-medium'>筛选</h1>
      <div className='flex flex-col gap-2 text-sm'>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input 
            type="radio"
            name="sort"
            value="Newest"
            // 
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Newest
        </label>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input 
            type="radio"
            name="sort"
            value="Most popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Most popular
        </label>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input 
            type="radio"
            name="sort"
            value="Trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Trending
        </label>
        <label className='flex items-center gap-2 cursor-pointer'>
          <input 
            type="radio"
            name="sort"
            value="Oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Oldest
        </label>
      </div>
      <h1 className='mt-8 mb-4 font-medium'>分类</h1>
      <div className='flex flex-col gap-2 text-sm'>
        <Link className='underline' to="/posts">All</Link>
        <Link className='underline' to="/posts?cat=web-design">Wen Design</Link>
        <Link className='underline' to="/posts?cat=development">Development</Link>
        <Link className='underline' to="/posts?cat=databases">Databases</Link>
        <Link className='underline' to="/posts?cat=seo">Search Engines</Link>
        <Link className='underline' to="/posts?cat=marketing">Marketing</Link>
      </div>
    </div>
  )
}
export default SideMenu;