import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    focusedContent:[],
    focusedSection:[],
    focusedSubsection:[],
    foucsPublicSettings:[]


}

const FocusSlice = createSlice ({
    name:'focus',
    initialState,
    reducers:{
        setFocusedContent: (state, {type, payload:content}) =>{
            if (content!==null){
                if (state.focusedContent.length>0){
                    state.focusedContent.splice(0,1, content)
                }
                else {
                    state.focusedContent.push(content)
                }
            }
            else{
                state.focusedContent=[]
            }
                
            
        },
        setFocusedSection: (state, {type, payload:section}) =>{
            if(section!==''){
                state.focusedSection.push(section)
            }
            else{
                state.focusedSection=[]
            }
        },
        setFocusedSubsection: (state, {type, payload:subsection}) => {
            if(subsection!==''){
                state.focusedSubsection.push(subsection)
            }
            else{
                state.focusedSubsection=[]
            }
        },
        setPublicSettingsFocus: (state, {type, payload:isPublicSettingsOn}) =>{
            if(isPublicSettingsOn){
            state.foucsPublicSettings=true
            }
            else {
                state.foucsPublicSettings=false
            }

    
        }
    }
})

export const {setFocusedContent, setFocusedSection, setFocusedSubsection,setPublicSettingsFocus} = FocusSlice.actions
export default FocusSlice.reducer