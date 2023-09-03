import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import Modality from '../components/involved/atoms/InvolvedContent/Modality';

export interface AudienceParams<Aggregation> {
    total:number;
    aggregated?:Aggregation
}
    export interface Aggregation {
        name:string;
        id:number;
        total:number;
    }

export interface vibe {
    id: number;
    title: string;
    author: string;
    AudienceParams:AudienceParams<Aggregation>;
    modality:string;
    promoLogo:string;
    sourceType:string;
    authorLogo:string;


}
export interface sync {
    id: number;
    title: string;
    author: string;
    AudienceParams:AudienceParams<Aggregation>;
    modality:string;
    promoLogo:string;
    sourceType:string;
    authorLogo:string;
}
export interface gig {
    id: number;
    title: string;
    author: string;
    AudienceParams:AudienceParams<Aggregation>;
    modality:string;
    promoLogo:string;
    sourceType:string;
    authorLogo:string;
}

export interface artist {
    id:number;
    providerTitle:string;
    providerType:string;
    logo: string;
    sourceType:string
}

export interface venue {
    id:number;
    providerTitle:string;
    providerType:string;
    logo:string;
    unitType:string
    sourceType:string
}

export interface PublicSearchSettings {
    indexInput:string;
}



export interface PublicLoad<contentTypes>  {
    content: Array <contentTypes>;
    publicSearchSettings:PublicSearchSettings;
    sortedContent:(contentTypes)[];

}

export type chatType = 'public' | 'local' | 'private' | 'target'

export interface chatParams {
    
}

export interface chat {
    chatId:number,
    hostContentId:number,
    chatTitle:string,
    hostContentTitle:string,
    chatType:chatType,
    audience:number,
    chatParams: chatParams

}

 export type contentTypes = vibe | sync | gig | artist | venue
    
export type publicContent = vibe | sync | gig
export type publicHost = artist | venue

const initialState: PublicLoad<contentTypes> = {
    content: [
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
    publicSearchSettings: {
        indexInput:''
    },
    sortedContent: []
}
 const publicContentSlice = createSlice({
    name:'public Content',
    initialState,
    reducers: {
        setPublicContent: (state, action:PayloadAction<[]>) => {
            state.content = action.payload
        },
        setPublicSearchSettings: (state, action:PayloadAction<PublicSearchSettings>) => {
            state.publicSearchSettings = action.payload
        },
        setSortByVibePreset: (state, action:PayloadAction<boolean>) =>{
            if (action.payload){
                for (let content of state.content){
                    if ('modality' in content && content?.modality&& content.modality==='vibe'){
                        state.sortedContent.push(content)
                    }
            }}
            else {
                state.sortedContent=state.sortedContent.filter((c)=>'modality' in c && c?.modality&& c.modality==='vibe')
            }
        }
        ,
        setSortBySyncPreset: (state, action:PayloadAction<boolean>) =>{
            if (action.payload){
                for (let content of state.content){
                    if ('modality' in content && content?.modality&& content.modality==='sync'){
                        state.sortedContent.push(content)
                    }
            }}
            else {
                state.sortedContent=state.sortedContent.filter((c)=>'modality' in c && c?.modality&& c.modality==='sync')
            }
        },
        setSortByGigPreset: (state, action:PayloadAction<boolean>) =>{
            if (action.payload){
                for (let content of state.content){
                    if ('modality' in content && content?.modality&& content.modality==='gig'){
                        state.sortedContent.push(content)
                    }
            }}
            else {
                state.sortedContent=state.sortedContent.filter((c)=>'modality' in c && c?.modality&& c.modality==='gig')
            }    
        },
        setSortByArtistPreset: (state, action:PayloadAction<boolean>) =>{
            if (action.payload){
                for (let content of state.content){
                    if (content.sourceType==='artist'){
                        state.sortedContent.push(content)
                    }
            }}
            else {
                state.sortedContent=state.sortedContent.filter((c)=>c.sourceType==='artist')
            }
        },
        setSortByVenuePreset: (state, action:PayloadAction<boolean>) =>{
            if (action.payload){
                for (let content of state.content){
                    if (content.sourceType==='venue'){
                        state.sortedContent.push(content)
                    }
            }}
            else {
                state.sortedContent=state.sortedContent.filter((c)=>c.sourceType==='venue')
            }
            
        }
    }
})

 export const { setPublicContent, setPublicSearchSettings, setSortByGigPreset, setSortBySyncPreset, setSortByVibePreset, setSortByVenuePreset, setSortByArtistPreset} =publicContentSlice.actions
 export default publicContentSlice.reducer