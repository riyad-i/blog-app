import { createSlice } from "@reduxjs/toolkit";


export const postsSlice = createSlice({
    name: 'posts',
    initialState: [
        {id: '1', title: 'first post', content: 'Hello!'},
        {id: '2', title: 'second post', content: 'More Text!'}
    ],
    reducers:{
        addPost: (state, action) => {
            const {payload} = action
            state.push(payload)
        }
    }
})


//export action

export const {addPost} = postsSlice.actions
export default postsSlice.reducer;