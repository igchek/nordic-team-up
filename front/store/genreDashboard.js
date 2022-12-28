import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genres:[],
    content:[]
}

const genreDashboardSlice = createSlice({
    name:'genreDashboard',
    initialState,
    reducers:{
        setGenres: (state, {type, payload: genres}) => {
            state.genres = genres
        },
        setGenreContent:(state, {type, payload: content}) => {
            state.content = content
        }
    }
})

export const {setGenreContent, setGenres} = genreDashboardSlice.actions
export default genreDashboardSlice.reducer