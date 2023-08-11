
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

export default function PostPage() {
    let {id} = useParams()
    id = Number(id)
    

    // const post = useSelector(state => state.posts.find(post => post.id === id))

    const posts = useSelector(state => state.posts)
    const post = posts.find(post => post.id === id)

    console.log(posts);

    return (
        <>
        <h1>Post Page</h1>

        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>

        <Link to={`/post/edit/${id}`} >Edit</Link>
        </>
    )
}