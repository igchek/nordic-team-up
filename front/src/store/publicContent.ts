import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { vibe } from './modules/libraries/Content/Vibe';
import { sync } from './modules/libraries/Content/Sync';
import { gig } from './modules/libraries/Content/Gig';
import { artist } from './modules/libraries/Profiles/Artist';
import { venue } from './modules/libraries/Profiles/Venue';
import { publicSearchSettings } from './modules/libraries/Profiles/Template';




export interface PublicLoad {
    mockContent:any[]
    content: (vibe|sync|gig|artist|venue)[];
    publicSearchSettings?:publicSearchSettings;
    sortedContent:(vibe|sync|gig|artist|venue)[];

}


const initialState: PublicLoad = {
    mockContent: [
        {id:3,
         title:'Cookey Rave',
         author:'Cookey monster', 
         AudienceParams:{
            total:157
         }, 
         modality:'vibe', 
         promoLogo:'CookieMonster',
         sourceType:'content',
         authorLogo:'CookieMonster',
        },
         {id:4,
         title:'Debasement',
         author:'Electric Wizard', 
         AudienceParams:{
            total:95
         },
         modality:'vibe', 
         promoLogo:'BlackKeys',
         sourceType:'content',
         authorLogo:'BlackKeys',     
        },
         {id:4,
         title:'New album!',
         author:'Two Door Cinema Club', 
         AudienceParams:{
            total:56
         },
         modality:'vibe', 
         promoLogo:'TwoDoorCinemaClub',
         sourceType:'content',
         authorLogo:'TwoDoorCinemaClub', 
        },
         {id:6,
         title:'Nostalgic Tour',
         author:'Radio Head', 
         AudienceParams:{
            total:354
         },
         modality:'gig', 
         promoLogo:'RadioHead',
         sourceType:'content',
         authorLogo:'RadioHead',      
        },
         {id:7,
         title:'New EP presentation',
         author:'Spring King', 
         AudienceParams:{
            total:48
         },
         modality:'vibe', 
         promoLogo:'SpringKing',
         sourceType:'content',
         authorLogo:'SpringKing',          
        },
         {id:8,
         title:'Беларусь starter pack',
         author:'Слава Комиссаренко', 
         AudienceParams:{
            total:132
         } ,
         modality:'sync', 
         promoLogo:'Komissarenko',
         sourceType:'content',
         authorLogo:'SlavaKomissarenko'      
        },
         {id:9,
         title:'Sleeper showcase',
         author:'Leisure Society', 
         AudienceParams:{
            total:89
         },
         modality:'vibe', 
         promoLogo:'LeisureSociety',
         sourceType:'content',
         authorLogo:'LeisureSociety'      
        },
         {id:10,
         title:'Ницшеанская бессоница live',
         author:'Ежи Сармат', 
         AudienceParams:{
            total:109
         },
         modality:'vibe', 
         promoLogo:'EjiSarmat',
         sourceType:'content',
         authorLogo:'EjiSarmat'      
        },
         {id:11,
          providerTitle:'Black Keys',
          providerType:'artist',
          logo:'BlackKeys',
          sourceType:'artist'
         }   
    ],
    content: [],
    sortedContent: []
}
 const publicContentSlice = createSlice({
    name:'public Content',
    initialState,
    reducers: {
        setPublicContent: (state, action:PayloadAction<[]>) => {
            state.content = action.payload
        },
        setPublicSearchSettings: (state, action:PayloadAction<publicSearchSettings>) => {
            state.publicSearchSettings = action.payload
        },
        setSortByVibePreset: (state, action:PayloadAction<boolean>) =>{
            if (action.payload){
                for (let content of state.content){
                    if ((content instanceof vibe)&&!(content instanceof sync)&&!(content instanceof gig)){
                        state.sortedContent.push(content)
                    }
            }}
            else {
                state.sortedContent=state.sortedContent.filter((c)=>(c instanceof vibe)&&!(c instanceof sync)&&!(c instanceof gig))
            }
        }
        ,
        setSortBySyncPreset: (state, action:PayloadAction<boolean>) =>{
            if (action.payload){
                for (let content of state.content){
                    if ((content instanceof sync)&&!(content instanceof gig)){
                        state.sortedContent!.push(content)
                    }
            }}
            else {
                state.sortedContent=state.sortedContent.filter((c)=>(c instanceof sync)&&!(c instanceof gig))
            }
        },
        setSortByGigPreset: (state, action:PayloadAction<boolean>) =>{
            if (action.payload){
                for (let content of state.content){
                    if (content instanceof gig){
                        state.sortedContent.push(content)
                    }
            }}
            else {
                state.sortedContent=state.sortedContent.filter((c)=>c instanceof gig)
            }    
        },
        setSortByArtistPreset: (state, action:PayloadAction<boolean>) =>{
            if (action.payload){
                for (let content of state.content){
                    if (content instanceof artist){
                        state.sortedContent.push(content)
                    }
            }}
            else {
                state.sortedContent=state.sortedContent.filter((c)=>c instanceof artist)
            }
        },
        setSortByVenuePreset: (state, action:PayloadAction<boolean>) =>{
            if (action.payload){
                for (let content of state.content){
                    if (content instanceof venue){
                        state.sortedContent.push(content)
                    }
            }}
            else {
                state.sortedContent=state.sortedContent.filter((c)=>c instanceof venue)
            }
            
        },
        setMocks: (state)=>{
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
                            mock.providerType,
                            mock.logo,
                            mock.sourceType
                        )
                    )
                }
            }
        }
    }
})

 export const { setPublicContent, setPublicSearchSettings, setSortByGigPreset, setSortBySyncPreset, setSortByVibePreset, setSortByVenuePreset, setSortByArtistPreset, setMocks} =publicContentSlice.actions
 export default publicContentSlice.reducer