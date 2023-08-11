import { useState } from "react"
import { addPost } from "../redux/slices/postsSlice"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"



export default function AddPostForm(){
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    })

    const dispatch = useDispatch()

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // const newPost = {...formData, id: nanoid()}

        //dispatch action
        // dispatch(addPost(newPost))

        dispatch(addPost(formData.title, formData.content))

        //reset form state

        setFormData({
            title: '',
            content: ''
        })

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