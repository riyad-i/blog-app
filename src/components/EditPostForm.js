import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react'



export default function EditPostForm() {

    const {id} = useParams()
    const postToUpdate = useSelector(state => state.posts.find(post => post.id === id))

    console.log(postToUpdate);

    const [formData, setFormData] = useState(postToUpdate)

    const dispatch = useDispatch()

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

       
    }

    return(
        <div>
            <br/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input value={formData.title} onSubmit={handleSubmit} onChange={handleChange} name='title' id='title' type="text"/>
                {/* onChange={(e) => setFormData({title : e.value})} */}

                <br/>
                <br/>
                
                <label htmlFor="content">Content: </label>
                <textarea value={formData.content} onSubmit={handleSubmit} onChange={handleChange} name="content" id="content"/>
                {/* onChange={(e) => setFormData({content: e.value})} */}

                <button disabled={!(formData.title && formData.content)}> Add Post</button>
            </form>
        </div>
    )
}