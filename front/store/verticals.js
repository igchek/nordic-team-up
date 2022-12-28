import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    focusArtist:[],
    focusVenue:[],
    focusContent:[],

}
const verticalsSlice = createSlice({ 
    name: 'verticals',
    initialState,
    reducers:{
        setFocusArtist:(state,{type, payload: focusArtist}) => {
            state.focusArtist = focusArtist
        },
        setFocusVenue:(state,{type, payload:focusVenue}) => {
            state.focusVenue = focusVenue
        },
        setFocusContent:(state,{type, payload:focusContent}) => {
            state.focusContent = focusContent
        }
}})

export const {setFocusArtist, setFocusContent, setFocusVenue} = verticalsSlice.actions
export default verticalsSlice.reducer
