import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    focusedContent:'',
    focusedSection:'',
    focusedSubsection:'',
    foucsPublicSettings:''


}

const FocusSlice = createSlice ({
    name:'focus',
    initialState,
    reducers:{
        setFocusedContent: (state, {type, payload:content}) =>{
            state.focusedContent=content
        },
        setFocusedSection: (state, {type, payload:section}) =>{
            state.focusedSection=section
            state.focusedSubsection=''
        },
        setFocusedSubsection: (state, {type, payload:subsection}) => {
            state.focusedSubsection=subsection
        },
        setPublicSettingsFocus: (state, {type, payload:isPublicSettingsOn}) =>{
            if(isPublicSettingsOn==='true'){
            state.foucsPublicSettings='true'
            }
            else {
                state.foucsPublicSettings=''
            }

    
        }
    }
})

export const {setFocusedContent, setFocusedSection, setFocusedSubsection,setPublicSettingsFocus} = FocusSlice.actions
export default FocusSlice.reducer