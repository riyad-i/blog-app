import { useState } from "react"

export default function AddPostForm(){
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    })

    const handleSubmit = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            {/* onSubmit */}
            <form >
                <label htmlFor="title">Title: </label>
                <input value={formData.title} onChange={handleSubmit} name='title' id='title' type="text"/>
                {/* onChange={(e) => setFormData({title : e.value})} */}

                <br/>
                <br/>
                
                <label htmlFor="content">Content: </label>
                <textarea value={formData.content} onChange={handleSubmit} name="content" id="content"/>
                {/* onChange={(e) => setFormData({content: e.value})} */}

                <button> Add Post</button>
            </form>
        </div>
    )
}