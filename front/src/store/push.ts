import {createSlice, PayloadAction} from '@reduxjs/toolkit'


export interface pushLoad {
    vibes:{
        vibeId:string
        note:boolean
        progression?:boolean
    }[]
    communities:{
        likes:boolean
        replies:boolean
        note:boolean
    }[]
}

const initialState:pushLoad = {
    vibes:[],
    communities:[]
} 

const PushSlice = createSlice({
    name:'push',
    initialState:initialState,
    reducers:{
        setVibePushes:(state, action:PayloadAction<{
            vibeId:string
            note:boolean
            progression?:boolean
        }[]>)=>{
            action.payload.forEach((p)=>{state.vibes.push(p)})
        }
    }
})

export const {setVibePushes} = PushSlice.actions
export default PushSlice.reducer