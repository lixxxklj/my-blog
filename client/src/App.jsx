import Navbar from './components/Navbar'
const App = () => {
  return (
    /* 
      px-4：默认情况下，左右内边距各1rem（相对浏览器窗口）
      md:px-8：当屏幕达到md断点（≥768px时，左右内边距变为2rem）
      lg:px-16：当屏幕 ≥1024px 时，左右内边距变为 4rem
      2xl:px-64：当屏幕 ≥1536px 时，左右内边距变为 16rem
     */
    <div className='px-4 md:px-8 lg:px-16 2xl:px-64'>
      <Navbar />
    </div>
  )
}

export default App