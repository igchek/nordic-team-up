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
        {id:'3',
         title:'Cookey Rave',
         author:'Cookey monster', 
         totalAudience:157, 
         modality:'vibe', 
         promoLogo:'CookieMonster',
         sourceType:'content',
         authorLogo:'CookieMonster',
        },
         {id:'2',
         title:'Debasement',
         author:'Electric Wizard', 
         totalAudience:95,
         modality:'vibe', 
         promoLogo:'BlackKeys',
         sourceType:'content',
         authorLogo:'BlackKeys',     
        },
         {id:'4',
         title:'New album!',
         author:'Two Door Cinema Club', 
         totalAudience:56,
         modality:'vibe', 
         promoLogo:'TwoDoorCinemaClub',
         sourceType:'content',
         authorLogo:'TwoDoorCinemaClub', 
        },
         {id:'6',
         title:'Nostalgic Tour',
         author:'Radio Head', 
         totalAudience:354,
         modality:'gig', 
         promoLogo:'RadioHead',
         sourceType:'content',
         authorLogo:'RadioHead',      
        },
         {id:'7',
         title:'New EP presentation',
         author:'Spring King', 
         totalAudience:48,
         modality:'vibe', 
         promoLogo:'SpringKing',
         sourceType:'content',
         authorLogo:'SpringKing',          
        },
         {id:'8',
         title:'Беларусь starter pack',
         author:'Слава Комиссаренко', 
         totalAudience:25 ,
         modality:'sync', 
         promoLogo:'Komissarenko',
         sourceType:'content',
         authorLogo:'SlavaKomissarenko'      
        },
         {id:'9',
         title:'Sleeper showcase',
         author:'Leisure Society', 
         totalAudience:89,
         modality:'vibe', 
         promoLogo:'LeisureSociety',
         sourceType:'content',
         authorLogo:'LeisureSociety'      
        },
         {id:'10',
         title:'Ницшеанская бессоница live',
         author:'Ежи Сармат', 
         totalAudience:109,
         modality:'vibe', 
         promoLogo:'EjiSarmat',
         sourceType:'content',
         authorLogo:'EjiSarmat'      
        },
         {id:'11',
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
        setMocks: (state, action:PayloadAction<any[]>)=>{
            const mocks:any[] = action.payload
            const sets:any[] = []
            console.log('payload is', mocks)
            for (let mock of mocks){
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
                            sets.push(mockVibeSample)
                        
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
                        sets.push(mockSyncSample)
                        
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
                        sets.push(mockGigSample)
                        
                    }}
                else {
                    if (mock.providerType==='artist'){
                        let artistSample:artist= new artist(
                            mock.id,
                            mock.providerTitle,
                            mock.providerType,
                            mock.logo,
                            mock.sourceType
                        )
                        sets.push(artistSample)
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
                        sets.push(venueSample)
                    }
                }
            }
            console.log('mocks are set. sets are ', sets)
            state.content=[...state.content, ...sets]
            console.log('sets spread. State content is', state.content)


                
                
            }
        }
    }
)

 export const { setPublicContent, setPublicSearchSettings, setSortByGigPreset, setSortBySyncPreset, setSortByVibePreset, setSortByVenuePreset, setSortByArtistPreset, setMocks} =publicContentSlice.actions
 export default publicContentSlice.reducer