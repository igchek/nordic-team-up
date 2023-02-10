import React from "react";
import PublicPoster from "../../atoms/PublicOutput/PublicPoster";
import PublicSourceData from "../../atoms/PublicOutput/PublicSourceData";
import PublicTitles from "../../atoms/PublicOutput/PublicTitles";
import styles from "./PublicUnit.module.scss"
import { useDispatch, useSelector } from "react-redux";
import  { setFocusedContent } from "../../../../store/focus";
import { useEffect, useState } from "react";



const PublicUnit = (props) => {
    
    const currentFocusedContent = useSelector(({focus})=> focus.focusedContent)
    const publicContent = useSelector(({publicContent})=> publicContent.content)
    
    const thisPublicUnit = publicContent.find(item=>item.id===props.id)
    const dispatch = useDispatch()
    const [isFocused, setFocus] = useState(false)

    // useEffect(()=>{
    //     console.log(`${props.contentTitle} focus if ${isFocused}`)
        
    // },
    // [])


    // отслеживаем передвижение элементов в фокусе и подсвечиваем текущий фокус
    useEffect(()=>{
        if (currentFocusedContent.length>0){
            if (currentFocusedContent[0].id===props.id){
                setFocus(true)
            }
            else{
                setFocus(false)
            }
        }
        else {
            setFocus(false)
        }
        
    },[currentFocusedContent])

    useEffect(()=>{
        console.log(`${thisPublicUnit.title} focus if now ${isFocused}`)
    },
    [isFocused])



    // клик ивент - загружаем в фокус выбранный элемент или выгружаем из фокуса уже выбранный
    const onClick = () => {
        if (!currentFocusedContent.length>0){
            dispatch(setFocusedContent(thisPublicUnit))
            console.log(`${thisPublicUnit.title} is selected and focus mounted`)
        }
        else {
            if(currentFocusedContent[0].id===props.id){
                dispatch(setFocusedContent(null))
                console.log(`${thisPublicUnit.title} is deselected`)
            }
            else{
                dispatch(setFocusedContent(thisPublicUnit))
                console.log(`${thisPublicUnit.title} is selected, focus altered`)
            }
        }
    }

 



    return (
        <div onClick={()=>onClick()} className={isFocused?styles.activeWrapper:styles.passiveWrapper}>
            <PublicPoster 
                poster={props.poster}
            />
            <PublicTitles 
                focus={isFocused}
                sourceType={props.sourceType}
                contentTitle={props.contentTitle}
                sourceTitle={props.sourceTitle}
                providerTitle={props.providerTitle}
            />
            <PublicSourceData 
                focus={isFocused}
                audience={props.audience}
                modality={props.modality||props.providerType}
                sourceType={props.sourceType}
                title={props.contentTitle}
            />
        </div>
    )
}

export default PublicUnit