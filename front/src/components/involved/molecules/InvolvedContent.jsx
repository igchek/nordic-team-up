import React from "react";
import styles from "./InvolvedContent.module.scss"
import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from "react";
import InvolvedContentPoster from "../atoms/InvolvedContent/InvolvedContentPoster.jsx";
import InvolvedTitles from "../atoms/InvolvedContent/InvolvedTitles.jsx";
import InvolvedData from "../atoms/InvolvedContent/InvolvedData.jsx";
import { setFocusedContent } from "../../../store/focus";
import { getInvolvedContentById } from "../../../store/involvedContent";


const InvolvedContent = (props) => {
    const dispatch = useDispatch()
    const focusedContent = useSelector(({focus}) => focus.focusedContent)
    const [isFocused, setFocus] = useState (false)

    useEffect(()=>{
        if(props.id !== focusedContent.id && focusedContent){
            setFocus(false)
        }
        else if (props.id === focusedContent.id && focusedContent){
            setFocus(true)
        }
    },[focusedContent])

    const click = (event) => {
        if(props.id === focusedContent.id && focusedContent){
            dispatch(setFocusedContent(''))
        }
        else if ((props.id !==focusedContent.id && focusedContent)||(!focusedContent)){
            dispatch(setFocusedContent(getInvolvedContentById(props.id)))
            setFocus(true)
        }
    }
    console.log(`${props.ContentTitle} focus is ${isFocused}`)
        return(
            
            <div onClick={click} className={isFocused?styles.wrapperActive:styles.wrapperPassive}>
                <InvolvedContentPoster 
                    img={props.img} 
                    focus={isFocused}
                />
                <InvolvedTitles 
                    providerTitle={props.providerTitle} 
                    ContentTitle={props.ContentTitle} 
                    focus={isFocused}
                />
                <InvolvedData 
                    modality={props.modality}
                    audience={props.audience}
                    focus={isFocused}
                />
            </div>
        )
    }

    export default InvolvedContent