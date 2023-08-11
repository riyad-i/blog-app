import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";


export const postsSlice = createSlice({
    name: 'posts',
    initialState: [
        {id: '1', title: 'first post', content: 'Hello!'},
        {id: '2', title: 'second post', content: 'More Text!'}
    ],
    reducers:{
        addPost: {
            reducer: (state, action) => {
            const {payload} = action
            state.push(payload)
        },
            prepare(title, content) {
                return {
                    payload: {
                        title,
                        content,
                        id: nanoid(),
                        created_at : new Date().toISOString(),
                    }
                }

            }

        },


        editPost: (state, action) => {
            const {payload} = action
            const indexOfPost = state.findIndex(post => post.id === payload.id)
            state[indexOfPost] = payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            const {payload} = action
            return state = state.concat(payload)
            
        })
    }
})


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data);
    return data
})


//export action

export const {addPost, editPost} = postsSlice.actions
export default postsSlice.reducer;