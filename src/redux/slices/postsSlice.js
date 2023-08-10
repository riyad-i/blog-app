import { createSlice } from "@reduxjs/toolkit";


export const postsSlice= createSlice({
    name: 'posts',
    initialState: [
        {id: '1', title: 'first post', content: 'Hello!'},
        {id: '2', title: 'second post', content: 'More Text!'}
    ],
    reducers:{

    }
})


//export action

export default postsSlice.reducer;