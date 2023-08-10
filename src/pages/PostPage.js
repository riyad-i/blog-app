import PostItem from "../components/PostItem"
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function PostPage() {
    const {id} = useParams()

    const post = useSelector(state => state.posts.find(post => post.id === id))

    console.log(post);

    return (
        <h1>Post Page</h1>

    )
}