import { ArtistData } from '@/lib/models/profiles/artist.model'
import { VenueData } from '@/lib/models/profiles/venue.model'
import { TargetGroupData } from '@/lib/models/target/targetGroup.models'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Playball } from 'next/font/google'
import { artist } from './modules/libraries/Profiles/Artist'


interface engagementInput{
        artists:{
            focus?:string
            accounts:ArtistData[]
        }
        venues:{
            focus?:string
            accounts:VenueData[]
        }
        targetGroups:{
            focus?:string
            accounts:TargetGroupData[]
        }

}

export interface SubAccountShort{
    _id:string
    title:string
    image:string
}

interface UserStateI {
    id:string|null,
    focusSubAccount:{
        _id:string
        type:'artist'|'venue'|'targetGroup'
        title:string
        pic:string
    }|null
    subAccounts:{
    artist:{
        isSelected:boolean
        focusAccount:SubAccountShort|undefined,
        accounts:SubAccountShort[]
    }
    venue:{
        isSelected:boolean
        focusAccount:SubAccountShort|undefined,
        accounts:SubAccountShort[]
    }
    targetGroup:{
        isSelected:boolean
        focusAccount:SubAccountShort|undefined,
        accounts:SubAccountShort[]
    }
}


}


const initialState:UserStateI = {
    id:null,
    focusSubAccount:null,
    subAccounts:{
        artist:{
            isSelected:false,
            focusAccount:undefined,
            accounts:[]
        },
        venue:{
            isSelected:false,
            focusAccount:undefined,
            accounts:[]
        },
        targetGroup:{
            isSelected:false,
            focusAccount:undefined,
            accounts:[]
        },
    }

}

const UserStateSlice = createSlice({
    name:'UserState',
    initialState:initialState,
    reducers:{
        setUserId:(state, action:PayloadAction<string|null>)=>{
            state.id=action.payload
        },
        setUserAccountFocus:(state, action:PayloadAction)=>{
            state.focusSubAccount=null
            state.subAccounts.artist.isSelected=false
            state.subAccounts.venue.isSelected=false
            state.subAccounts.targetGroup.isSelected=false
        },
        setArtistAccountFocus:(state, action:PayloadAction<string>)=>{
            if( !state.subAccounts.artist.focusAccount){
                state.subAccounts.artist.accounts.forEach((artistAc)=>{
                    if(artistAc._id===action.payload){
                        state.subAccounts.artist.focusAccount=artistAc
                    }
                    
                })          
                      
                
            }else if(state.subAccounts.artist.focusAccount && state.subAccounts.artist.focusAccount._id===action.payload ){
                state.subAccounts.artist.focusAccount=undefined
            }
            else if(state.subAccounts.artist.focusAccount && state.subAccounts.artist.focusAccount._id!==action.payload ){
                state.subAccounts.artist.focusAccount= state.subAccounts.artist.accounts.find((sub)=>{sub._id===action.payload})
            }

        },
        setVenueAccountFocus:(state, action:PayloadAction<string>)=>{
            if( !state.subAccounts.venue.focusAccount){
                state.subAccounts.venue.focusAccount= state.subAccounts.venue.accounts.find((sub)=>{sub._id===action.payload})
                
            }else if(state.subAccounts.venue.focusAccount && state.subAccounts.venue.focusAccount._id===action.payload ){
                state.subAccounts.venue.focusAccount=undefined
            }
            else if(state.subAccounts.venue.focusAccount && state.subAccounts.venue.focusAccount._id!==action.payload ){
                state.subAccounts.venue.focusAccount= state.subAccounts.venue.accounts.find((sub)=>{sub._id===action.payload})
            }

        },

        setTargetGroupAccountFocus:(state, action:PayloadAction<string>)=>{
            if( !state.subAccounts.targetGroup.focusAccount){
                state.subAccounts.targetGroup.focusAccount= state.subAccounts.targetGroup.accounts.find((sub)=>{sub._id===action.payload})
                
            }else if(state.subAccounts.targetGroup.focusAccount && state.subAccounts.targetGroup.focusAccount._id===action.payload ){
                state.subAccounts.targetGroup.focusAccount=undefined
            }
            else if(state.subAccounts.targetGroup.focusAccount && state.subAccounts.targetGroup.focusAccount._id!==action.payload ){
                state.subAccounts.targetGroup.focusAccount= state.subAccounts.targetGroup.accounts.find((sub)=>{sub._id===action.payload})
            }

        },
        setFocusAccountSelection:(state, action:PayloadAction<string>)=>{
            if(action.payload==='artist'){
                if(state.focusSubAccount?.type==='artist'){
                    state.focusSubAccount=null
                    state.subAccounts.artist.isSelected=false
                }
                else{
                    state.focusSubAccount={
                        _id:state.subAccounts.artist.focusAccount?._id!,
                        type:'artist',
                        title:state.subAccounts.artist.focusAccount?.title!,
                        pic:state.subAccounts.artist.focusAccount?.image!
                    }
                    state.subAccounts.artist.isSelected=true
                    state.subAccounts.venue.isSelected=false
                    state.subAccounts.targetGroup.isSelected=false
                }
            }
            else if(action.payload==='targetGroup'){
                if(state.focusSubAccount?.type==='targetGroup'){
                    state.focusSubAccount=null
                    state.subAccounts.targetGroup.isSelected=false
                }
                else{
                    state.focusSubAccount={
                        _id:state.subAccounts.targetGroup.focusAccount?._id!,
                        type:'targetGroup',
                        title:state.subAccounts.targetGroup.focusAccount?.title!,
                        pic:state.subAccounts.targetGroup.focusAccount?.image!
                    }
                    state.subAccounts.targetGroup.isSelected=true
                    state.subAccounts.venue.isSelected=false
                    state.subAccounts.artist.isSelected=false
                }
            }
            else if(action.payload==='venue'){
                if(state.focusSubAccount?.type==='venue'){
                    state.focusSubAccount=null
                    state.subAccounts.venue.isSelected=false
                }
                else{
                    state.focusSubAccount={
                        _id:state.subAccounts.venue.focusAccount?._id!,
                        type:'venue',
                        title:state.subAccounts.venue.focusAccount?.title!,
                        pic:state.subAccounts.venue.focusAccount?.image!
                    }
                    state.subAccounts.venue.isSelected=true
                    state.subAccounts.venue.isSelected=false
                    state.subAccounts.artist.isSelected=false
                }
            }
        },

        setSubAccountFocus:(state, action:PayloadAction<'artist'|'venue'|'targetGroup'|null>)=>{
            if(action.payload==='artist'){
                const focusAccount = state.subAccounts.artist.focusAccount as SubAccountShort
                state.focusSubAccount={
                    _id:focusAccount._id,
                    type:'artist',
                    title:focusAccount.title,
                    pic:focusAccount.image
                }
            }
            else if(action.payload ==='targetGroup'){
                const focusAccount = state.subAccounts.targetGroup.focusAccount as SubAccountShort
                state.focusSubAccount={
                    _id:focusAccount._id,
                    type:'targetGroup',
                    title:focusAccount.title,
                    pic:focusAccount.image
                }
            }
            else if(action.payload ==='venue'){
                const focusAccount = state.subAccounts.venue.focusAccount as SubAccountShort
                state.focusSubAccount={
                    _id:focusAccount._id,
                    type:'venue',
                    title:focusAccount.title,
                    pic:focusAccount.image
                }
            }
            else if(!action.payload){
                state.focusSubAccount=null
            }
        },
        parseUserEngagementData:(state, action:PayloadAction<engagementInput>)=>{
            action.payload.artists.accounts.forEach((artist)=>{
                state.subAccounts.artist.accounts.push({
                    _id:artist._id,
                    title:artist.description?.title!,
                    image:artist.media?.logo!
                })
                if(action.payload.artists.focus && artist._id===action.payload.artists.focus){
                    state.subAccounts.artist.focusAccount={
                        _id:artist._id,
                        title:artist.description?.title!,
                        image:artist.media?.logo!

                    }
                }
                // debugger
            })
            // debugger
            action.payload.venues.accounts.forEach((venue)=>{
                state.subAccounts.artist.accounts.push({
                    _id:venue._id,
                    title:venue.description?.title!,
                    image:venue.media?.logo!
                })
                if(action.payload.venues.focus && venue._id===action.payload.venues.focus){
                    state.subAccounts.venue.focusAccount={
                        _id:venue._id,
                        title:venue.description?.title!,
                        image:venue.media?.logo!

                    }
                }
            })
            // debugger
            action.payload.targetGroups.accounts.forEach((targetGroup)=>{
                state.subAccounts.targetGroup.accounts.push({
                    _id:targetGroup._id,
                    title:targetGroup.core.title,
                    image:targetGroup.core.pic!
                })
                if(action.payload.targetGroups.focus && targetGroup._id===action.payload.targetGroups.focus){
                    state.subAccounts.targetGroup.focusAccount={
                        _id:targetGroup._id,
                        title:targetGroup.core.title,
                        image:targetGroup.core.pic!

                    }
                }
            })
            // debugger

            
            
           },
        dispatchArtist:(state, action:PayloadAction<SubAccountShort>)=>{
            state.subAccounts.artist.accounts.push({
                _id:action.payload._id,
                title:action.payload.title,
                image:action.payload.image
            })
        }
    }
})

export const {setUserId,setUserAccountFocus, setArtistAccountFocus,setFocusAccountSelection, setVenueAccountFocus,setTargetGroupAccountFocus, setSubAccountFocus, parseUserEngagementData, dispatchArtist} = UserStateSlice.actions
export default UserStateSlice.reducer