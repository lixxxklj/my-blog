const SearchBox = () => {
  return (
    <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
      <svg 
        t="1757849156403" 
        className="icon" 
        viewBox="0 0 1024 1024" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        p-id="3283" 
        width="25" 
        height="25"
      >
        <path d="M192 448c0-141.152 114.848-256 256-256s256 114.848 256 256-114.848 256-256 256-256-114.848-256-256z m710.624 409.376l-206.88-206.88A318.784 318.784 0 0 0 768 448c0-176.736-143.264-320-320-320S128 271.264 128 448s143.264 320 320 320a318.784 318.784 0 0 0 202.496-72.256l206.88 206.88 45.248-45.248z" 
          fill="#dbdbdb" 
          p-id="3284"
        >
        </path>
      </svg>
      <input type="text" placeholder='search a post...' className="bg-transparent outline-none" />
    </div>
  )
}
export default SearchBox;