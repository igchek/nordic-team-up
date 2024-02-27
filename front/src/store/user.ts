import { ArtistData } from '@/lib/models/profiles/artist.model'
import { VenueData } from '@/lib/models/profiles/venue.model'
import { TargetGroupData } from '@/lib/models/target/targetGroup.models'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'


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
    
        setArtistAccountFocus:(state, action:PayloadAction<boolean>)=>{
            if(action.payload && state.subAccounts.artist.focusAccount){
                state.focusSubAccount={
                    _id:state.subAccounts.artist.focusAccount._id,
                    title:state.subAccounts.artist.focusAccount.title,
                    pic:state.subAccounts.artist.focusAccount.image,
                    type:'artist'
                }
            }else state.focusSubAccount=null
        },
        setVenueAccountFocus:(state, action:PayloadAction<boolean>)=>{
            if(action.payload && state.subAccounts.venue.focusAccount){
                state.focusSubAccount={
                    _id:state.subAccounts.venue.focusAccount._id,
                    title:state.subAccounts.venue.focusAccount.title,
                    pic:state.subAccounts.venue.focusAccount.image,
                    type:'venue'
                }
            }else state.focusSubAccount=null
        },
        setTargetGroupAccountFocus:(state, action:PayloadAction<boolean>)=>{
            if(action.payload && state.subAccounts.targetGroup.focusAccount){
                state.focusSubAccount={
                    _id:state.subAccounts.targetGroup.focusAccount._id,
                    title:state.subAccounts.targetGroup.focusAccount.title,
                    pic:state.subAccounts.targetGroup.focusAccount.image,
                    type:'targetGroup'
                }
            }else state.focusSubAccount=null
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
            if(action.payload.artists.accounts||action.payload.targetGroups.accounts||action.payload.venues.accounts)
           { for (let artist of action.payload.artists.accounts){
                let chunk:SubAccountShort = {
                    _id:artist._id,
                    title:artist.description?.title as string,
                    image:artist?.media?.logo as string
                }
                state.subAccounts.artist.accounts.push(chunk)
                if(action.payload.venues.focus && chunk._id===action.payload.artists.focus) state.subAccounts.artist.focusAccount=chunk
            }
            for (let venue of action.payload.venues.accounts){
                let chunk:SubAccountShort = {
                    _id:venue._id,
                    title:venue.description?.title as string,
                    image:venue?.media?.logo as string
                }
                state.subAccounts.venue.accounts.push(chunk)
                if(action.payload.venues.focus && chunk._id===action.payload.venues.focus) state.subAccounts.venue.focusAccount=chunk
            }
            for (let targetGoup of action.payload.targetGroups.accounts){
                let chunk:SubAccountShort = {
                    _id:targetGoup._id,
                    title:targetGoup.core.title as string,
                    image:targetGoup.core.pic as string
                }
                state.subAccounts.venue.accounts.push(chunk)
                if(action.payload.venues.focus && chunk._id===action.payload.venues.focus) state.subAccounts.venue.focusAccount=chunk
            }
        }}
    }
})

export const {setUserId, setArtistAccountFocus, setVenueAccountFocus,setTargetGroupAccountFocus, setSubAccountFocus, parseUserEngagementData} = UserStateSlice.actions
export default UserStateSlice.reducer