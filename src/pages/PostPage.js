import PostItem from "../components/PostItem"
import {useParams} from 'react-router-dom'

export default function PostPage() {
    const {id} = useParams()

    console.log(id);

    return (
        <h1>Post Page</h1>

    )
}