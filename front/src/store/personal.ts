import {createSlice , PayloadAction} from '@reduxjs/toolkit'
import { standartUserProfile } from './modules/libraries/Profiles/Template'
import { geo } from './modules/libraries/Community/Chats/Template'



const initialState:standartUserProfile | null = {
    profileId:'mock1',
    profileLog:'Newb',
    password:'mockPass1',
    token:'fjopawfm',

    profileFlavour:{
        profilePic:'doge1',
        profileNick:'Doge'
        
    }


}
const PersonalSlice = createSlice({
    name:'personal',
    initialState,
    reducers:{
        setUserNick:(state, action:PayloadAction<string>) => {
            state.profileFlavour.profileNick = action.payload
        },
        setPassword:(state,action:PayloadAction<string>) => {
            state.password = action.payload
        },
        setUserLog:(state,action:PayloadAction<string>) => {
            state.profileLog=action.payload
        },
        setGeo:(state, action:PayloadAction<geo>) => {
            state.profileGeo = action.payload
        },
        setMail:(state, action:PayloadAction<string>) => {
            if('profileMail' in state.profileFlavour && state.profileFlavour?.profileMail){
                if (!state.profileFlavour.profileMail.includes(action.payload)){
                    state.profileFlavour.profileMail.push(action.payload)
                }
                }
            },
        setProfile:(state, action:PayloadAction<standartUserProfile>)=>{
            state=action.payload
        }
    }
}
        
    
)

export const {setGeo, setMail, setPassword, setUserLog, setUserNick, setProfile} = PersonalSlice.actions
export default PersonalSlice.reducer