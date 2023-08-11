import { useSelector, useDispatch } from 'react-redux'
import PostItem from './PostItem'


import { useEffect } from 'react'
import { fetchPosts } from '../redux/slices/postsSlice'



export default function PostsList(){
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    // console.log(posts);
    
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    
    return (
        <div>
            <h1 className='text-4xl my-5 '>Posts List</h1>

            <section>
                {posts.length ? posts.map(post => <h3 className="my-10 border-2 bg-neutral-200 border-solid border-indigo-400" key={post.id}>{<PostItem post={post}/>}</h3>): <h2>No posts to show...</h2>}

            </section>
        </div>
    )
}