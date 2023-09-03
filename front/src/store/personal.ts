import {createSlice , PayloadAction} from '@reduxjs/toolkit'

type AvatarHistoryChunk = {
    id:number;
    src:String
}

type PersonalConfig<AvatarHistoryChunk> = {
    currentAvatar: String;
    userName:String;
    password:String;
    userLog:String;
    mail:String,
    habitat:String,
    viewSettings:Object,
    paymentSource:Object,
    avatarHistory: AvatarHistoryChunk[]

}

const initialState:PersonalConfig<AvatarHistoryChunk> = {
    currentAvatar:'doge1',
    userName:'Maestro',
    password:'qwerty12345',
    userLog:'@maestro',
    mail:'maestro@casual.com',
    habitat:'Moscow',
    viewSettings:{},
    paymentSource:{},
    avatarHistory:[{
                    id:1,
                    src:'doge1'
                    
                    }]
}

const PersonalSlice = createSlice({
    name:'personal',
    initialState,
    reducers:{
        setUserName:(state, action:PayloadAction<string>) => {
            state.userName = action.payload
        },
        setPassword:(state,action:PayloadAction<string>) => {
            state.password = action.payload
        },
        setUserLog:(state,action:PayloadAction<string>) => {
            if (action.payload[0] !=='@'){
                state.userLog = `@${action.payload}`
            }
            else {
                state.userLog = action.payload
            }
        },
        setHabitat:(state, action:PayloadAction<string>) => {
            state.habitat = action.payload
        },
        setMail:(state, action:PayloadAction<string>) => {
            state.mail = action.payload
        },
        setPaymentSource:(state, action:PayloadAction<string>) => {
            state.paymentSource = action.payload
        }
        }
    }
)

export const {setHabitat, setMail, setPassword, setPaymentSource, setUserLog, setUserName} = PersonalSlice.actions
export default PersonalSlice.reducer