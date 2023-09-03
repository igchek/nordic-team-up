import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface involvedLoad {
    content:(vibe|sync|gig|artist|venue)[],
    involvedSearchSettings:[]

}

interface AudienceParams<Aggregation> {
    total:number;
    aggregated?:Aggregation
}
    interface Aggregation {
        name:string;
        id:number;
        total:number;
    }

interface vibe {
    id: number;
    title: string;
    author: string;
    AudienceParams:AudienceParams<Aggregation>;
    modality:string;
    promoLogo:string;
    sourceType:string;
    authorLogo:string;


}
interface sync {
    id: number;
    title: string;
    author: string;
    AudienceParams:AudienceParams<Aggregation>;
    modality:string;
    promoLogo:string;
    sourceType:string;
    authorLogo:string;
}
interface gig {
    id: number;
    title: string;
    author: string;
    AudienceParams:AudienceParams<Aggregation>;
    modality:string;
    promoLogo:string;
    sourceType:string;
    authorLogo:string;
}

interface artist {
    id:number;
    providerTitle:string;
    providerType:string;
    logo: string;
    sourceType:string
}

interface venue {
    id:number;
    providerTitle:string;
    providerType:string;
    logo:string;
    unitType:string
    sourceType:string
}

const initialState:involvedLoad = {
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
        }
         
    ],
    involvedSearchSettings: []
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
        // getInvolvedContentById: (state, action:PayloadAction<number>): vibe|sync|gig|artist|venue => {
        //     for (let content of state.content){
        //         if (content.id===action.payload)
        //              return content
        //         else 
        //             console.log('fuck')
        //     }

        // }
    }
})

export const pickInvolved = (id:number)=>{
    for (let c of initialState.content){
        if (c.id===id){
            return c
        }
    }
}

export const {setInvolvedContent, setInvolvolvedSearchSettings} = InvolvedContentSlice.actions
export default InvolvedContentSlice.reducer