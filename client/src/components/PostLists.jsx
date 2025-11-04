import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import PostListItem from './PostListItem'

const fetchPosts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/posts`)
  return res.data
}

const PostLists = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'], 
    queryFn: () => fetchPosts()
  }
  )
  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  // console.log(data);
  return (
    <div className='flex flex-col gap-12 mb-8'>
      {
        data.map(item => {
          <PostListItem postData={item} />
        })
      }
    </div>
  )
}
export default PostLists;