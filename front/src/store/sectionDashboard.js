import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formats:[
        'concert',
        'stand up',
        'rave',
        'free talk'


    ],
    content:[
        {id:'3',
         title:'Cookey Rave',
         author:'Cookey monster', 
         currentAudience:157, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/CookieMonster.jpg',
         sourceType:'content',
         format:[
            'rave'
         ],
         meta:[],
         authorLogo:'../../../../assets/ArtistLogo/CoockieMonster.jpg'    
        },
         {id:'4',
         title:'Debasement',
         author:'Electric Wizard', 
         currentAudience:95, 
         modality:'vibe', 
         promoLogo:'.../../../../assets/PromoLogo/ElectricWizard.jpg',
         sourceType:'content',
         format:[
            'mosh pit',
            'doom',
            'outrage',
            'concert'
         ],
         meta:[],
         authorLogo:'../../../../assets/ArtistLogo/ElectricWizard.jpg'      
        },
         {id:'5',
         title:'New album!',
         author:'Two Door Cinema Club', 
         currentAudience:56, 
         modality:'vibe', 
         promoLogo:'.../../../../assets/PromoLogo/TwoDoorCinemaClub.jpg',
         sourceType:'content',
         format:[
            '80s',
            'techno',
            'concert'
         ],
         meta:[],
         authorLogo:'../../../../assets/ArtistLogo/TwoDoorCinemaClub.jpg'      
        },
         {id:'6',
         title:'Nostalgic Tour',
         author:'Radio Head', 
         currentAudience:354, 
         modality:'gig', 
         promoLogo:'.../../../../assets/PromoLogo/RadioHead.jpg',
         sourceType:'content',
         format:[
            'rock',
            'concert'
         ],
         meta:[],
         authorLogo:'../../../../assets/ArtistLogo/RadioHead.jpg'      
        },
         {id:'7',
         title:'New EP presentation',
         author:'Spring King', 
         currentAudience:48, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/SpringKing.jpg',
         sourceType:'content',
         format:[
            'post punk',
            'mosh',
            'some debased tag',
            'concert'
         ],
         meta:[],
         authorLogo:'../../../../assets/ArtistLogo/SpringKing.jpg'           
        },
         {id:'8',
         title:'Беларусь starter pack',
         author:'Слава Комиссаренко', 
         currentAudience:132, 
         modality:'sync', 
         promoLogo:'../../../../assets/PromoLogo/Komissarenko.jpg',
         sourceType:'content',
         format:[
            'stand up'
         ],
         meta:[],
         authorLogo:'../../../../assets/ArtistLogo/SlavaKomissarenko.jpg'       
        },
         {id:'9',
         title:'Sleeper showcase',
         author:'Leisure Society', 
         currentAudience:89, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/LeisureSociety.jpg',
         sourceType:'content',
         format:[
            'chill',
            'melodic',
            'concert',
            'for ladies'
         ],
         meta:[],
         authorLogo:'../../../../assets/ArtistLogo/LeisureSociety.jpg'

        },
         {id:'10',
         title:'Ницшеанская бессоница live',
         author:'Ежи Сармат', 
         currentAudience:109, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/EjiSarmat.jpg',
         sourceType:'content',
         formats:[
            'russian lower internet',
            'midget talks'
         ],
         meta:[
            'trending',
            'some meta 2'
         ],
         authorLogo:'../../../../assets/ArtistLogo/EjiSarmat.jpg'       
        }
         
    ],
    formatedContent:{},
    subSections:[],
    subSectionedContent:{}
}
const sectionDashboardSlice =createSlice({
    name: 'sectionDashboard',
    initialState,
    reducers:{
        setFormats:(state, {type, payload:formats}) => {
            state.formats = formats
        },
        setFormatedContent:(state, {type, payload:content}) => {
            for (let section of state.formats){
                  if(!state.formatedContent.section){
                     state.formatedContent={...state.formatedContent, section:[]}
                     if (content.format===section){
                        state.formatedContent.section.push(content)
                     }
                     }
                  else{
                     if (content.format==={section}){
                        state.formatedContent.section.push(content)
                     }
                  }
                  }
               },
         setSubsections:(state, {type, payload:tags}) => {
            if (tags!==''){   
               state.subSections=tags}
            else {
               state.subSections=''
            }
         },
         setSubSectionedContent:(state, {type, payload:contents}) =>{
            if (contents!==''){
               for (let subsection of state.subSections){
                  for (let content of contents){
                     if (!state.subSectionedContent.subsection){
                        state.subSectionedContent={...state.subSectionedContent, subsection:[]}
                        if (content.formats.include(subsection)){
                           state.subSectionedContent.subsection.push(content)
                        }
                     else {
                        if (content.formats.include(subsection)){
                           state.subSectionedContent.subsection.push(content)
                        }
                     }
                     }
                  }
               }}
            else {
               state.subSectionedContent={}
            }
         }
            }
            
        
    }
   
    )

export const {setFormatedContent, setFormats, setSubsections, setSubSectionedContent} = sectionDashboardSlice.actions
export default sectionDashboardSlice.reducer