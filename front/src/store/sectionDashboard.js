import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formats:[
        'concert',
        'stand up',
        'rave',
        


    ],
    content:[
        {id:'3',
         title:'Cookey Rave',
         author:'Cookey monster', 
         currentAudience:157, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/CookieMonster.jpg',
         sourceType:'content',
         formats:[
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
         formats:[
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
         formats:[
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
         formats:[
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
         formats:[
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
         formats:[
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
         formats:[
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
                     if (content.formats===section){
                        state.formatedContent.section.push(content)
                     }
                     }
                  else{
                     if (content.formats===section){
                        state.formatedContent.section.push(content)
                     }
                  }
                  }
               },
         setSubsections:(state, {type, payload:tags}) => {
            if (tags!==null){   
               for (let tag of tags){
                  state.subSections.push(tag)
               }   
            }
            else {
               state.subSections=null
            }
         },
         setSubSectionedContent:(state, {type, payload:contents}) =>{
            if (contents!==null){
               for (let subsection of state.subSections){
                  for (let content of contents){
                     if (state.subSectionedContent.subsection===undefined){
                        state.subSectionedContent={...state.subSectionedContent, subsection:[]}
                        if (content.formats.includes(subsection)){
                           state.subSectionedContent.subsection.push(content)
                        }
                     else {
                        if (content.formats.includes(subsection)){
                           state.subSectionedContent.subsection.push(content)
                        }
                     }
                     }
                  }
               }}
            else {
               state.subSectionedContent=[]
            }
         }
            }
            
        
    }
   
    )

export const {setFormatedContent, setFormats, setSubsections, setSubSectionedContent} = sectionDashboardSlice.actions
export default sectionDashboardSlice.reducer