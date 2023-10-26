import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { vibe } from './modules/libraries/Content/Vibe'
import { sync } from './modules/libraries/Content/Sync'
import { gig } from './modules/libraries/Content/Gig'
import { involvedSearchSettings } from './modules/libraries/Profiles/Template'

export interface involvedLoad {
    mockContent:any[]
    content:(vibe|sync|gig)[],
    sortedContent:(vibe|sync|gig)[],
    involvedSearchSettings?:involvedSearchSettings
}

const initialState:involvedLoad = {
    mockContent: [
        {id:'3',
            title:'Cookey Rave',
            author:'Cookey monster', 
            totalAudience:157, 
            modality:'vibe', 
            promoLogo:'CookieMonster',
            sourceType:'content',
            authorLogo:'CookieMonster',
        }
         
    ],
    content:[],
    sortedContent:[]
    // involvedSearchSettings: []
}

const InvolvedContentSlice = createSlice({
    name: 'involvedContent',
    initialState,
    reducers: {
        setInvolvedContent: (state, action:PayloadAction<[]>) => {
            state.content = action.payload
        },
        setInvolvolvedSearchSettings: (state, action:PayloadAction<[]>) => {
            state.involvedSearchSettings = action.payload
        },
        sortByPreset:(state, action:PayloadAction<string|null>)=>{
            if(!action.payload){
                state.sortedContent=[]
            }
            else if (action.payload==='vibe'){
                state.content.map((c)=>{
                    if (c instanceof vibe){
                        state.sortedContent.push(c)
                    }
                })
            }
        },
        setInvolvedMocks :(state, action:PayloadAction<any[]> )=>{
            const inMocks:any[] = action.payload
            const setMocks:(vibe|sync|gig)[] = []
            for (let mock of inMocks){
                if (mock.sourceType==='content'){
                    if (mock.modality==='vibe'){
                        let mockVibeSample:vibe = new vibe (mock.id,
                            mock.title,
                            mock.author,
                            mock.modality,
                            mock.promoLogo,
                            mock.sourceType,
                            mock.authorLogo,
                            mock.totalAudience)
                            setMocks.push(mockVibeSample)
                    }
                    else if (mock.modality==='sync'){
                        let mockVibeSample:vibe = new vibe (mock.id,
                            mock.title,
                            mock.author,
                            mock.modality,
                            mock.promoLogo,
                            mock.sourceType,
                            mock.authorLogo,
                            mock.totalAudience)
                        let mockSyncSample:sync = new sync (mockVibeSample)
                        setMocks.push(mockSyncSample)
                    }
                    else if (mock.modality==='gig'){
                        let mockVibeSample:vibe = new vibe (mock.id,
                            mock.title,
                            mock.author,
                            mock.modality,
                            mock.promoLogo,
                            mock.sourceType,
                            mock.authorLogo,
                            mock.totalAudience)
                        let mockSyncSample:sync = new sync (mockVibeSample)
                        let mockGigSample:gig = new gig (mockSyncSample)
                        setMocks.push(mockGigSample)
                    }
                }
            }
            state.content=[...state.content, ...setMocks]
        }
    }
})

export const pickInvolved = (id:string)=>{
    for (let c of initialState.content){
        if (c.id===id){
            return c
        }
    }
}

export const {setInvolvedContent, setInvolvolvedSearchSettings, setInvolvedMocks, sortByPreset} = InvolvedContentSlice.actions
export default InvolvedContentSlice.reducer