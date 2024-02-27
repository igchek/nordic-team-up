import { communitiesCoreData, communityCoreData } from '@/lib/actions/community/comunity.actions'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'


export interface communititesState{
        publicCommunities:communityCoreData[]
        privateCommunities?:communityCoreData[]|null
        targetCommunities?:communityCoreData[]|null
        pushLoad?:communityCoreData[]|null
}

const initialState:communititesState = {
    publicCommunities:[]
}


const CommunitiesSlice = createSlice({
    name:'communitites',
    initialState:initialState,
    reducers:{
        setCommunities:((state, action:PayloadAction<communitiesCoreData>)=>{
            state={
                publicCommunities:[]
            }
            action.payload.publicCommunities.forEach((c)=>{state.publicCommunities.push(c)})
            state.privateCommunities=action.payload.privateCommunities
            state.targetCommunities=action.payload.targetCommunities
            state.pushLoad=action.payload.pushLoad
        })
    }
})

export const {setCommunities} = CommunitiesSlice.actions
export default CommunitiesSlice.reducer