import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    focusedContent:'',
    focusedFormat:'',
    focusedGenre:'',


}

const FocusSlice = createSlice ({
    name:'focus',
    initialState,
    reducers:{
        setFocusedContent: (state, {type, payload:content}) =>{
            state.focusedContent=content
        },
        setFocusedFormat: (state, {type, payload:format}) =>{
            state.focusedFormat=format
        },
        setFocusedGenre: (state, {type, payload:genre}) =>{
            state.focusedGenre=genre
        },
    }
})

export const {setFocusedContent, setFocusedFormat, setFocusedGenre} = FocusSlice.actions
export default FocusSlice.reducer