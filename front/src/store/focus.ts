import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { contentTypes, chat } from './publicContent'

interface focusLoad {
    focusedContent:contentTypes|undefined,
    isCommunityFocused:boolean,
    focusedChat:chat|undefined,

}


const initialState :focusLoad = {
    focusedContent:undefined,
    isCommunityFocused:false,
    focusedChat:undefined



}

const FocusSlice = createSlice ({
    name:'focus',
    initialState,
    reducers:{
        setFocusedContent: (state, action:PayloadAction<contentTypes|undefined>) =>{
            if (action.payload===undefined){
                state.focusedContent=undefined
            }
            else {
                state.focusedContent=action.payload
            }
                
            
        },
        setFocusedChat: (state, action:PayloadAction<chat|undefined>) =>{
            if (action.payload===undefined){
                state.focusedChat=undefined
            }
            else {
                state.focusedChat=action.payload
            }

    
        }
    }
})

export const {setFocusedContent,setFocusedChat} = FocusSlice.actions
export default FocusSlice.reducer