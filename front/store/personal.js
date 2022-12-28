import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentAvatar:'../assets/avatars/maestro/maestro.jpg',
    userName:'Maestro',
    password:'qwerty12345',
    userLog:'@maestro',
    mail:'maestro@casual.com',
    habitat:'Moscow',
    viewSettings:{},
    paymentSource:{},
    avatarHistory:[{
                    id:1,
                    src:'../assets/avatars/maestro/maestro.jpg'
                    
                    }]
}

const PersonalSlice = createSlice({
    name:'personal',
    initialState,
    reducers:{
        setUserName:(state,{type, payload:userName}) => {
            state.userName = userName
        },
        setPassword:(state,{type, payload:password}) => {
            state.password = password
        },
        setUserLog:(state,{type, payload:userLog}) => {
            if (userLog[0] ==='@'){
                state.userLog = userLog
            }
            else {
                state.userLog = '@' + userLog
            }
        },
        setHabitat:(state, {type, payload:habitat}) => {
            state.habitat = habitat
        },
        setMail:(state, {type, payload:mail}) => {
            state.mail = mail
        },
        setPaymentSource:(state, {type, payload:source}) => {
            state.paymentSource = source
        }
        }
    }
)

export const {setHabitat, setMail, setPassword, setPaymentSource, setUserLog, setUserName} = PersonalSlice.actions
export default PersonalSlice.reducer