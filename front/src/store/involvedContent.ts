import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { involvedSearchSettings } from './modules/libraries/Profiles/Template'
import { userVibe } from '@/lib/models/profiles/user.models'

export interface involvedLoad {
    vibes:any[]
    
    sortedContent:userVibe[],
    involvedSearchSettings?:involvedSearchSettings
}

const initialState:involvedLoad = {
    vibes:[],
    sortedContent:[]
}

const InvolvedContentSlice = createSlice({
    name: 'involvedContent',
    initialState,
    reducers: {
        
        setInvolvedVibes:(state, action:PayloadAction<userVibe[]>)=>{
            action.payload.forEach((conent:userVibe)=>state.vibes.push(conent))
        },
        sortByModalityPreset:(state, action:PayloadAction<string|null>)=>{
            if(action.payload){
                if(action.payload==='vibe'){
                    state.sortedContent=[]
                    state.vibes.forEach((vibe)=>{
                        if(vibe.modality==='vibe'){
                            state.sortedContent.push(vibe)
                        }

                    })
                }
                else if(action.payload==='sync'){
                    state.sortedContent=[]
                    state.vibes.forEach((vibe)=>{
                        if(vibe.modality==='sync'){
                            state.sortedContent.push(vibe)
                        }

                    })
                }
                else if(action.payload==='gig'){
                    state.sortedContent=[]
                    state.vibes.forEach((vibe)=>{
                        if(vibe.modality==='gig'){
                            state.sortedContent.push(vibe)
                        }

                    })
                }
                else if(!action.payload){
                    state.sortedContent=[]
                }
            }
            
        }
    }
})


export const {setInvolvedVibes, sortByModalityPreset} = InvolvedContentSlice.actions
export default InvolvedContentSlice.reducer