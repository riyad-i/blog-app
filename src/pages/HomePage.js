import PostsList from "../components/PostsLists"
import AddPostForm from "../components/AddPostForm"

export default function HomePage() {
    return (
        <main>
            <h1 className="text-5xl my-5">Home Page</h1>

            <PostsList/>
            <AddPostForm/>
        </main>
    )
}