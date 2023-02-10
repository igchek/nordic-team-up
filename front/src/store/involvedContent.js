import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    content: [
        {id:'1',
         title:'28.11 MSC',
         author:'Black Keys', 
         currentAudience:236, 
         modality:'vibe', 
         promoLogo:'../../../../assets/PromoLogo/BlackKeys.jpg',
         artistLogo:'../../../../assets/ArtistLogo/BlackKeys.jpg'

        }
         
    ],
    involvedSearchSettings: []
}

const InvolvedContentSlice = createSlice({
    name: 'involvedContent',
    initialState,
    reducers: {
        setInvolvedContent: (state, {type, payload: content}) => {
            state.content = content
        },
        setInvolvolvedSearchSettings: (state, {type, payload: settings}) => {
            state.involvedSearchSettings = settings
        },
        getInvolvedContentById: (state, {type, payload:involvedId}) => {
            for (let contentUnit of state.content){
                if (contentUnit.id === involvedId) {
                    return contentUnit
                }
            }
        }
    }
})

export const pickInvolved = (id)=>{
    for (let c of initialState.content){
        if (c.id===id){
            return c
        }
    }
}

export const {setInvolvedContent, setInvolvolvedSearchSettings, getInvolvedContentById} = InvolvedContentSlice.actions
export default InvolvedContentSlice.reducer