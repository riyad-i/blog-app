

export default function AddPostForm(){
    return(
        <div>

            <form>
                <label htmlFor="title">Title: </label>
                <input id='title' type="text"/>
                <br/>
                <br/>
                
                <label htmlFor="content">Content: </label>
                <textarea id="content"/>

                <button> Add Post</button>
            </form>
        </div>
    )
}