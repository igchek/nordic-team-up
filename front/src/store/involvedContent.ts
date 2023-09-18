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
            AudienceParams:{
               total:157
            }, 
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
        setMocks :(state, action:PayloadAction)=>{
            for (let mock of state.mockContent){
                if (mock.sourceType==='content'){
                    if (mock.modality==='vibe'){
                        state.content.push(new vibe
                            (
                                mock.id,
                                mock.title,
                                mock.author,
                                mock.AudienceParams,
                                mock.modality,
                                mock.promoLogo,
                                mock.sourceType,
                                mock.authorLogo
                            ))
                    }
                    else if (mock.modality==='sync'){
                        state.content.push( new sync(
                            new vibe(
                                mock.id,
                                mock.title,
                                mock.author,
                                mock.AudienceParams,
                                mock.modality,
                                mock.promoLogo,
                                mock.sourceType,
                                mock.authorLogo
                            )
                        ))
                    }
                    else if (mock.modality==='gig'){
                        state.content.push(new gig(
                             new sync(
                            new vibe(
                                mock.id,
                                mock.title,
                                mock.author,
                                mock.AudienceParams,
                                mock.modality,
                                mock.promoLogo,
                                mock.sourceType,
                                mock.authorLogo
                            )
                        )
                        )
                        )
                    }
                }
                else if (mock.sourceType==='artist'){
                    state.content.push(
                        new artist(
                            mock.id,
                            mock.providerTitle,
                            mock.sourceType,
                            mock.logo,
                            mock.sourceType
                        )
                    )
                }
                else {
                    state.content.push(
                        new venue(
                            mock.id,
                            mock.title,
                            mock.sourceType,
                            mock.logo,
                            mock.unitType,
                            mock.sourceType
                        )
                    )
                }
            }
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

export const {setInvolvedContent, setInvolvolvedSearchSettings} = InvolvedContentSlice.actions
export default InvolvedContentSlice.reducer