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
    focusVibe:{vibeId:string}|null
    focusCommunity:{communityId:string}|null
    subAccount:{
        artist:null|{id:string}
        venue:null|{id:string}
        targetGroup:null|{id:string}
    }
    focusArtistAccount:{artistId:string}|null

}


const initialState :focusLoad = {
    focusVibe:null,
    focusCommunity:null,
    focusArtistAccount:null,
    subAccount:{
        artist:null,
        venue:null,
        targetGroup:null
    }



}

const FocusSlice = createSlice ({
    name:'focus',
    initialState,
    reducers:{
        setFocusedVibe:(state, action:PayloadAction<string|null>)=>{
            if(action.payload){
                state.focusVibe={vibeId:action.payload}
            }
            else{
                state.focusVibe=null
            }
        },
        setFocusedCommunity:(state, action:PayloadAction<string|null>)=>{
            if(action.payload){
                state.focusCommunity={communityId:action.payload}
            }
            else{
                state.focusCommunity=null
            }
        },
        setFocusArtistAccount:(state, action:PayloadAction<string|null>)=>{
            if(action.payload){
                state.subAccount.artist = {id:action.payload}
            }else state.subAccount.artist = null
        },
        setFocusVenueAccount:(state, action:PayloadAction<string|null>)=>{
            if(action.payload){
                state.subAccount.venue = {id:action.payload}
            }else state.subAccount.venue = null
        },
        setFocusTargetGroupAccount:(state, action:PayloadAction<string|null>)=>{
            if(action.payload){
                state.subAccount.targetGroup = {id:action.payload}
            }else state.subAccount.targetGroup = null
        },
    }
})

export const {setFocusedVibe, setFocusedCommunity, setFocusArtistAccount, setFocusTargetGroupAccount, setFocusVenueAccount} = FocusSlice.actions
export default FocusSlice.reducer