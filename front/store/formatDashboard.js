import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formats:[],
    content:[]
}
const formatDashboardSlice =createSlice({
    name: 'formatDashboard',
    initialState,
    reducers:{
        setFormats:(state, {type, payload:formats}) => {
            state.formats = formats
        },
        setFormatContent:(state, {type, payload:content}) => {
            state.content = content
        }
    }
})

export const {setFormatContent, setFormats} = formatDashboardSlice.actions
export default formatDashboardSlice.reducer