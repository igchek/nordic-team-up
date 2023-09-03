import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { contentTypes, chat } from './publicContent'

interface focusLoad {
    focusedContent:contentTypes|null,
    isCommunityFocused:boolean,
    focusedChat:chat|null,

}


const initialState :focusLoad = {
    focusedContent:null,
    isCommunityFocused:false,
    focusedChat:null



}

const FocusSlice = createSlice ({
    name:'focus',
    initialState,
    reducers:{
        setFocusedContent: (state, action:PayloadAction<contentTypes|null>) =>{
            if (action.payload===null){
                state.focusedContent=null
            }
            else {
                state.focusedContent=action.payload
            }
                
            
        },
        setFocusedChat: (state, action:PayloadAction<chat|null>) =>{
            if (action.payload===null){
                state.focusedChat=null
            }
            else {
                state.focusedChat=action.payload
            }

    
        }
    }
})

export const {setFocusedContent,setFocusedChat} = FocusSlice.actions
export default FocusSlice.reducer