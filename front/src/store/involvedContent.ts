import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { vibe } from './modules/libraries/Content/Vibe'
import { sync } from './modules/libraries/Content/Sync'
import { gig } from './modules/libraries/Content/Gig'
import { artist } from './modules/libraries/Profiles/Artist'
import { venue } from './modules/libraries/Profiles/Venue'
import { involvedSearchSettings } from './modules/libraries/Profiles/Template'

export interface involvedLoad {
    mockContent:any[]
    content:(vibe|sync|gig|artist|venue)[],
    sortedContent:(vibe|sync|gig|artist|venue)[],
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
        setInvolvedMocks :(state, action:PayloadAction<any[]> )=>{
            const inMocks:any[] = action.payload
            const setMocks:(vibe|sync|gig|artist|venue)[] = []
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
                else if (mock.sourceType==='artist'){
                    let artistSample:artist= new artist(
                        mock.id,
                        mock.providerTitle,
                        mock.providerType,
                        mock.logo,
                        mock.sourceType
                    )
                    setMocks.push(artistSample)
                }
                else {
                    let venueSample:venue = new venue(
                        mock.id,
                        mock.providerTitle,
                        mock.providerType,
                        mock.logo,
                        mock.sourceType,
                        mock.sourceType
                    )
                    setMocks.push(venueSample)
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

export const {setInvolvedContent, setInvolvolvedSearchSettings, setInvolvedMocks} = InvolvedContentSlice.actions
export default InvolvedContentSlice.reducer