import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    content: [
        {id:'3',
         title:'Cookey Rave',
         author:'Cookey monster', 
         currentAudience:157, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/CookieMonster.jpg',
         sourceType:'content',
         authorLogo:'../../../../assets/ArtistLogo/CookieMonster.jpg'    
        },
         {id:'4',
         title:'Debasement',
         author:'Electric Wizard', 
         currentAudience:95, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/ElectricWizard.jpg',
         sourceType:'content',
         authorLogo:'../../../../assets/ArtistLogo/ElectricWizard.jpg'      
        },
         {id:'5',
         title:'New album!',
         author:'Two Door Cinema Club', 
         currentAudience:56, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/TwoDoorCinemaClub.jpg',
         sourceType:'content',
         authorLogo:'../../../../assets/ArtistLogo/TwoDoorCinemaClub.jpg'      
        },
         {id:'6',
         title:'Nostalgic Tour',
         author:'Radio Head', 
         currentAudience:354, 
         modality:'gig', 
         promoLogo:'../../../../assets/PromoLogo/RadioHead.jpg',
         sourceType:'content',
         authorLogo:'../../../../assets/ArtistLogo/RadioHead.jpg'      
        },
         {id:'7',
         title:'New EP presentation',
         author:'Spring King', 
         currentAudience:48, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/SpringKing.jpg',
         sourceType:'content',
         authorLogo:'../../../../assets/ArtistLogo/SpringKing.jpg'          
        },
         {id:'8',
         title:'Беларусь starter pack',
         author:'Слава Комиссаренко', 
         currentAudience:132, 
         modality:'sync', 
         promoLogo:'../../../../assets/PromoLogo/Komissarenko.jpg',
         sourceType:'content',
         authorLogo:'../../../../assets/ArtistLogo/SlavaKomissarenko.jpg'      
        },
         {id:'9',
         title:'Sleeper showcase',
         author:'Leisure Society', 
         currentAudience:89, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/LeisureSociety.jpg',
         sourceType:'content',
         authorLogo:'../../../../assets/ArtistLogo/LeisureSociety.jpg'      
        },
         {id:'10',
         title:'Ницшеанская бессоница live',
         author:'Ежи Сармат', 
         currentAudience:109, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/EjiSarmat.jpg',
         sourceType:'content',
         authorLogo:'../../../../assets/ArtistLogo/EjiSarmat.jpg'      
        },
         {id:'11',
          providerTitle:'Black Keys',
          providerType:'artist',
          logo:'../../../../assets/ArtistLogo/BlackKeys.jpg'
         }   
    ],
    publicSearchSettings: {
        indexInput:''
    },
    sortedContent: []
}
 const publicContentSlice = createSlice({
    name:'public Content',
    initialState,
    reducers: {
        setPublicContent: (state, { type, payload:content}) => {
            state.content = content
        },
        setPublicSearchSettings: (state, { type, payload:publicSearchSettings}) => {
            state.publicSearchSettings = publicSearchSettings
        },
        setSortByVibePreset: (state, {type, payload:isVibePreset}) =>{
            if (isVibePreset) {
                for (let content of state.content){
                    if (content.modality==='vibe'){
                        state.sortedContent.push(content)
                    }
                }
                    
            }
            else {
                state.sortedContent = state.sortedContent.filter(scontent=> !scontent.modality==='vibe')
            }
        }
        ,
        setSortBySyncPreset: (state, {type, payload:isSyncPreset}) =>{
            if (isSyncPreset) {
                for (let content of state.content){
                    if (content.modality==='sync'){
                        state.sortedContent.push(content)
                    }
                }
                    
            }
            else {
                state.sortedContent = state.sortedContent.filter(scontent=> !scontent.modality==='sync')
            }
        },
        setSortByGigPreset: (state, {type, payload:isGigPreset}) =>{
            if (isGigPreset) {
                for (let content of state.content){
                    if (content.modality==='gig'){
                        state.sortedContent.push(content)
                    }
                }
                    
            }
            else {
                state.sortedContent = state.sortedContent.filter(scontent=> !scontent.modality==='gig')
            }},
        setSortByArtistPreset: (state, {type, payload:isArtistPreset}) =>{
            if (isArtistPreset) {
                for (let content of state.content){
                    if (content.providerType==='artist'){
                        state.sortedContent.push(content)
                    }
                }
                    
            }
            else {
                state.sortedContent = state.sortedContent.filter(scontent=> !scontent.sourceType==='artist')
            }
        },
        setSortByVenuePreset: (state, {type, payload:isVenuePreset}) =>{
            if (isVenuePreset) {
                for (let content of state.content){
                    if (content.providerType==='venue'){
                        state.sortedContent.push(content)
                    }
                }
                    
            }
            else {
                state.sortedContent = state.sortedContent.filter(scontent=> !scontent.sourceType==='venue')
            }
            
        }
    }
})

 export const { setPublicContent, setPublicSearchSettings, setSortByGigPreset, setSortBySyncPreset, setSortByVibePreset, setSortByVenuePreset, setSortByArtistPreset} =publicContentSlice.actions
 export default publicContentSlice.reducer