import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    content: [
        {id:'3',
         title:'Cookey Rave',
         author:'Cookey monster', 
         currentAudience:157, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/CookeyMonster.jpg',
         sourceType:'content'    
        },
         {id:'4',
         title:'Debasement',
         author:'Electric Wizard', 
         currentAudience:95, 
         modality:'vibe', 
         promoLogo:'.../../../../assets/PromoLogo/ElectricWizard.jpg',
         sourceType:'content'      
        },
         {id:'5',
         title:'New album!',
         author:'Two Door Cinema Club', 
         currentAudience:56, 
         modality:'vibe', 
         promoLogo:'.../../../../assets/PromoLogo/TwoDoorCinemaClub.jpg',
         sourceType:'content'      
        },
         {id:'6',
         title:'Nostalgic Tour',
         author:'Radio Head', 
         currentAudience:354, 
         modality:'gig', 
         promoLogo:'.../../../../assets/PromoLogo/RadioHead.jpg',
         sourceType:'content'      
        },
         {id:'7',
         title:'New EP presentation',
         author:'Spring King', 
         currentAudience:48, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/SpringKing.jpg',
         sourceType:'content'          
        },
         {id:'8',
         title:'Беларусь starter pack',
         author:'Слава Комиссаренко', 
         currentAudience:132, 
         modality:'sync', 
         promoLogo:'../../../../assets/PromoLogo/Komissarenko.jpg',
         sourceType:'content'      
        },
         {id:'9',
         title:'Sleeper showcase',
         author:'Leisure Society', 
         currentAudience:89, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/LeisureSociety.jpg',
         sourceType:'content'      
        },
         {id:'10',
         title:'Ницшеанская бессоница live',
         author:'Ежи Сармат', 
         currentAudience:109, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/EjiSarmat.jpg',
         sourceType:'content'      
        },
         {id:'11',
          providerTitle:'Black Keys',
          providerType:'artist',
          logo:'../../../../assets/ArtistLogo/BlackKeys.jpg',



         }   
    ],
    publicSearchSettings: '',
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
            if (isVibePreset==='true') {
                for (let contents of state.content){
                    if (contents.sourceType==='content'&& contents.modality==='vibe'){
                        state.sortedContent.push(contents)
                    }
                }
            }
            else {
                if (state.sortedContent.length>0){
                    const vibesExcludedSort =[]
                    for (let contents of state.sortedContent){
                        if  (!(contents.modality&& contents.modality==='vibe')){
                            vibesExcludedSort.push(contents)
                        }
                    }
                    state.sortedContent=vibesExcludedSort
                }
            }
        },
        setSortBySyncPreset: (state, {type, payload:isSyncPreset}) =>{
            if (isSyncPreset==='true') {
                for (let contents of state.content){
                    if (contents.sourceType==='content'&& contents.modality==='sync'){
                        state.sortedContent.push(contents)
                    }
                }
            }
            else {
                if (state.sortedContent.length>0){
                    const syncsExcludedSort =[]
                    for (let contents of state.sortedContent){
                        if  (!(contents.modality&& contents.modality==='sync')){
                            syncsExcludedSort.push(contents)
                        }
                    }
                    state.sortedContent=syncsExcludedSort
                }
            }
        },
        setSortByGigPreset: (state, {type, payload:isGigPreset}) =>{
            if (isGigPreset==='true') {
                for (let contents of state.content){
                    if (contents.sourceType==='content'&& contents.modality==='gig'){
                        state.sortedContent.push(contents)
                    }
                }
            }
            else {
                if (state.sortedContent.length>0){
                    const gigsExcludedSort =[]
                    for (let contents of state.sortedContent){
                        if  (!(contents.modality&& contents.modality==='gig')){
                            gigsExcludedSort.push(contents)
                        }
                    }
                    state.sortedContent=gigsExcludedSort
                }
            }
        },
        setSortByArtistPreset: (state, {type, payload:isArtistPreset}) =>{
            if (isArtistPreset==='true') {
                for (let contents of state.content){
                    if (contents.sourceType==='artist'){
                        state.sortedContent.push(contents)
                    }
                }
            }
            else {
                if (state.sortedContent.length>0){
                    const artistsExcludedSort =[]
                    for (let contents of state.sortedContent){
                        if  (!contents.sourceType==='artist'){
                            artistsExcludedSort.push(contents)
                        }
                    }
                    state.sortedContent=artistsExcludedSort
                }
            }
        },
        setSortByVenuePreset: (state, {type, payload:isVenuePreset}) =>{
            if (isVenuePreset==='true') {
                for (let contents of state.content){
                    if (contents.sourceType==='venue'){
                        state.sortedContent.push(contents)
                    }
                }
            }
            else {
                if (state.sortedContent.length>0){
                    const venuesExcludedSort =[]
                    for (let contents of state.sortedContent){
                        if  (!contents.sourceType==='venue'){
                            venuesExcludedSort.push(contents)
                        }
                    }
                    state.sortedContent=venuesExcludedSort
                }
            }
        }
    }
 })

 export const {setPublicContent, setPublicSearchSettings, setSortByGigPreset, setSortBySyncPreset, setSortByVibePreset, setSortByVenuePreset, setSortByArtistPreset} =publicContentSlice.actions
 export default publicContentSlice.reducer