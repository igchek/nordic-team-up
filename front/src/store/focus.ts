import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { vibe } from './modules/libraries/Content/Vibe'
import { sync } from './modules/libraries/Content/Sync'
import { gig } from './modules/libraries/Content/Gig'
import { artist } from './modules/libraries/Profiles/Artist'
import { venue } from './modules/libraries/Profiles/Venue'
import {  standartChat } from './modules/libraries/Community/Chats/Template'
import { PublicChat } from './modules/libraries/Community/Chats/Public'
import { LocalChat } from './modules/libraries/Community/Chats/Local'
import { PrivateChat } from './modules/libraries/Community/Chats/Private'
import { TargetChat } from './modules/libraries/Community/Chats/Target'


export interface focusLoad {
    focusedContent:null|vibe|sync|gig,
    focusedHost:null|artist|venue,
    isCommunityFocused:boolean,
    focusedChat:null|standartChat|PublicChat|LocalChat|PrivateChat|TargetChat,

}


const initialState :focusLoad = {
    focusedContent:null,
    focusedHost:null,
    isCommunityFocused:false,
    focusedChat:null



}

const FocusSlice = createSlice ({
    name:'focus',
    initialState,
    reducers:{
        setFocusedContent: (state, action:PayloadAction<null|vibe|sync|gig>) =>{
            if (action.payload!=null){
                state.focusedContent=action.payload
            }
            else {
                state.focusedContent=action.payload
            }
                
            
        },
        setFocusedHost:(state, action:PayloadAction<null|artist|venue>)=>{
            if (action.payload!=null){
                state.focusedHost=action.payload
            }
            else state.focusedHost=action.payload
        },
        setFocusedChat: (state, action:PayloadAction<null|standartChat|PublicChat|LocalChat|PrivateChat|TargetChat>) =>{
            if (action.payload!=null){
                state.focusedChat=action.payload
            }
            else {
                state.focusedChat=action.payload
            }

    
        },

        setCommunityFocus:(state, action:PayloadAction<boolean>)=>{
            if (action.payload){
                state.isCommunityFocused=false
            }
            else state.isCommunityFocused=true
        }
    }
})

export const {setFocusedContent,setFocusedHost,setFocusedChat, setCommunityFocus} = FocusSlice.actions
export default FocusSlice.reducer