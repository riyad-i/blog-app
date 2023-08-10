import { useSelector, useDispatch } from 'react-redux'
import PostItem from './PostItem'

export default function PostsList(){
    const posts = useSelector((state) => state.posts)
    // console.log(posts);
    return (
        <div>
            <h1>Posts List</h1>

            <section>
                {posts.length ? posts.map(post => <h3 key={post.id}>{<PostItem post={post}/>}</h3>): <h2>Loading...</h2>}

            </section>
        </div>
    )
}