import { useUser, useAuth } from '@clerk/clerk-react'
import "react-quill-new/dist/quill.snow.css"
import ReactQuill from "react-quill-new"
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { IKContext, IKImage } from 'imagekitio-react'

const authenticator = async () => {
  try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/posts/upload-auth`
      );
      if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Request failed with status ${response.status}: ${errorText}`);
      }
      
      const data = await response.json();
      const { signature, expire, token, publicKey } = data;
      return { signature, expire, token, publicKey };
  } catch (error) {
      console.error("Authentication error:", error);
      throw new Error("Authentication request failed");
  }
};

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth()
  const [value, setValue] = useState("")

  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken()
      return axios.post(`${import.meta.env.VITE_BASE_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    },
    // 发布成功之后，跳转到发布的文章上面
    onSuccess: (res) => {
      toast.success('文章发布成功')
      navigate(`/${res.data.slug}`)
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.response?.data?.msg || '发布失败，请稍后再试~')
    }
  })

  if (!isLoaded) {
    return <div>Loading...</div>
  }
  if (!isLoaded && !isSignedIn) {
    return <div>请先登录！</div>
  }
  // 提交
  const handleSubmit = e => {
    // 组织表单提交的默认事件，防止页面刷新
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value
    }
    // console.log(data, '@@@发布post的data');
    mutation.mutate(data)
  }

  const onError = (err) => {
    console.log(err);
    toast.err('上传图片失败')
  }
  const onSuccess = (res) => {
    console.log(res);
    toast('上传图片失败')
  }

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className='text-xl font-light'>Create a New Post</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 flex-1 mb-6'>
        {/* w-max：让元素的宽度由内部撑开，不会自动换行，也不会占满父级宽度 */}
        <IKContext
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
          authenticator={authenticator}
        >
          <IKUpload
            useUniqueFileName
            onError={onError}
            onSuccess={onSuccess}
          />
        </IKContext>
        {/* outline-none：移除元素在获取焦点时浏览器现实的轮廓线 */}
        <input 
          type="text"
          placeholder='My Awesome Story' 
          className='text-4xl font-semibold bg-transparent outline-none' 
          name="title"
        />
        <div className='flex items-center gap-2'>
          <label>Choose a Category：</label>
          <select name='category' className='p-2 rounded-xl shadow-md'>
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">DataBase</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea name="desc" placeholder='A Short Description' className='p-4 rounded-xl' />
        <ReactQuill 
          theme="snow" 
          className='flex-1 rounded-xl bg-white shadow-md' 
          value={value}
          onChange={setValue}
        />
        <button 
          disabled={mutation.isPending} 
          className='w-36 px-4 py-2 bg-blue-800 rounded-xl text-white disabled:bg-blue-400 disabled:cursor-not-allowed'
        >
          {mutation.isPending ? "加载中..." : "发布"}
        </button>
        {/* {mutation.isError && <span>提交错误：{mutation.error.message}</span>} */}
      </form>
    </div>
  )
}
export default Write;