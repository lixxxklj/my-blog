import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { SignedOut, UserButton, useAuth } from '@clerk/clerk-react'
import Image from './Image'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { getToken } = useAuth()

  useEffect(() => {
    getToken().then((token) => {
      console.log(token);
    }).catch((err) => {
      
    });
  }, [])

  return (
    // 宽度 100%、默认高 64px（≥768px 时 80px）的横条，内部元素垂直居中、水平方向上两端对齐
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}
      <Link to='/' className="flex items-center gap-4 text-2xl font-bold">
        {/* 32×32px、带 12px 大圆角、1px 白色细边的“小方块” */}
        <Image
          src='/logo.jpg'
          className="rounded-xl border-1 border-white"
          alt='头像'
          w={32}
          h={32}
        />
        <span>luxin</span>
      </Link>
      {/* mobile menu：如果屏幕大于MD，隐藏 */}
      <div className="md:hidden">
        {/* mobile button */}
        <div
          className="text-4xl font-bold cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >{open ? '×' : '≡'}</div>
        {/* mobile menu list */}
        {/* transition-all ease-in-out：慢快慢的动画效果 */}
        <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
          open ? '-right-0' : '-right-[100%]'
        }`}>
          <Link to="/">首页</Link>
          <Link to="/">趋势</Link>
          <Link to="/">热门</Link>
          <Link to="/">关于</Link>
          <SignedOut>
            <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                登录✍️
              </button>
            </Link>
          </SignedOut>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      {/* desktop menu：如果屏幕大于MD，显示 */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">首页</Link>
        <Link to="/">趋势</Link>
        <Link to="/">热门</Link>
        <Link to="/">关于</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              登录✍️
            </button>
          </Link>
        </SignedOut>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}
export default Navbar