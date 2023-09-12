import React from "react";
import PublicPoster from "../../atoms/PublicOutput/PublicPoster";
import PublicContentSourceData from "../../atoms/PublicOutput/PublicContentSourceData";
import PublicContentTitles from "../../atoms/PublicOutput/PublicContentTitles";
import styles from "./PublicUnit.module.scss"
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import  { setCommunityFocus, setFocusedContent } from "../../../../store/focus";
import { useEffect, useState } from "react";
import { sync } from "../../../../store/modules/libraries/Content/Sync";
import { gig } from "../../../../store/modules/libraries/Content/Gig";
import { AudienceParams, vibe } from "../../../../store/modules/libraries/Content/Vibe";


import {motion} from 'framer-motion'
 


interface PublicContentUnitI {

    id:string
    poster:string
    sourceType:string
    contentTitle:string
    sourceTitle:string
    audience:AudienceParams
    modality:string
    this:vibe|sync|gig
    isInvolved:boolean

}


const PublicContentUnit:React.FC<PublicContentUnitI> = (props) => {
    
    const involvedContent = useAppSelector(({involvedContent})=>involvedContent.content)
    const currentFocusedContent  = useAppSelector(({focus})=> focus.focusedContent)
    const dispatch = useAppDispatch()
    const [isFocused, setFocus] = useState<boolean>(false)


    // отслеживаем передвижение элементов в фокусе и подсвечиваем текущий фокус
    useEffect(()=>{
        if (currentFocusedContent!=null){
            if (currentFocusedContent.id===props.id){
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



    // клик ивент - загружаем в фокус выбранный элемент или выгружаем из фокуса уже выбранный
    const onClick = () => {
        if (currentFocusedContent===null){
            dispatch(setFocusedContent(props.this))
            console.log(`${props.this!.title} is selected and focus mounted`)
        }
        else {
            if( currentFocusedContent!=null && currentFocusedContent.id===props.id){
                dispatch(setFocusedContent(null))
                console.log(`${props.this!.title} is deselected`)
            }
            else{
                dispatch(setFocusedContent(props.this))
                if (props.isInvolved){
                    dispatch(setCommunityFocus(true))

                }
                console.log(`${props.this.title} is selected, focus altered`)
            }
        }

        // проверяем на наличие в залайканном контенте


    }

 



    return (
        <motion.div onClick={()=>onClick()} className={isFocused?styles.activeWrapper:styles.passiveWrapper}>
            <PublicPoster 
                poster={props.poster}
            />
            <PublicContentTitles 
                focus={isFocused}
                contentTitle={props.contentTitle}
                sourceTitle={props.contentTitle}
                modality={props.modality}
            />
            <PublicContentSourceData 
                focus={isFocused}
                audience={props.audience}
                modality={props.modality}
            />
        </motion.div>
    )
}

export default PublicContentUnit