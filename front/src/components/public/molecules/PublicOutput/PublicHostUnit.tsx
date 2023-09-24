import React from "react";
import PublicPoster from "../../atoms/PublicOutput/PublicPoster";
import PublicHostSourceData from "../../atoms/PublicOutput/PublicHostSourceData";
import PublicHostTitles from "../../atoms/PublicOutput/PublicHostTitles";
import styles from "./PublicUnit.module.scss"
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import  { setCommunityFocus, setFocusedHost } from "../../../../store/focus";
import { useEffect, useState } from "react";

import {motion} from 'framer-motion'
import { venue } from "../../../../store/modules/libraries/Profiles/Venue";
import { artist } from "../../../../store/modules/libraries/Profiles/Artist";
 


interface PublicHostUnitI {

    id:string
    poster:string
    sourceType:string
    contentTitle:string
    sourceTitle:string
    this:venue|artist
    modality:string
    isInvolved:boolean

}


const PublicHostUnit:React.FC<PublicHostUnitI> = (props) => {
    
    const currentFocusedHost  = useAppSelector(({focus})=> focus.focusedHost)
    const dispatch = useAppDispatch()
    const [isFocused, setFocus] = useState<boolean>(false)


    // отслеживаем передвижение элементов в фокусе и подсвечиваем текущий фокус
    useEffect(()=>{
        if (currentFocusedHost!=null){
            if (currentFocusedHost.id===props.id){
                setFocus(true)
            }
            else{
                setFocus(false)
            }
        }
        else {
            setFocus(false)
        }
        
    },[currentFocusedHost])



    // клик ивент - загружаем в фокус выбранный элемент или выгружаем из фокуса уже выбранный
    const onClick = () => {
        if (currentFocusedHost===null){
            dispatch(setFocusedHost(props.this))
            console.log(`${props.this!.providerTitle} is selected and focus mounted`)
        }
        else {
            if( currentFocusedHost!=null && currentFocusedHost.id===props.id){
                dispatch(setFocusedHost(null))
                console.log(`${props.this!.providerTitle} is deselected`)
            }
            else{
                dispatch(setFocusedHost(props.this))
                if (props.isInvolved){
                    dispatch(setCommunityFocus(true))

                }
                console.log(`${props.this.providerTitle} is selected, focus altered`)
            }
        }

        // проверяем на наличие в залайканном контенте


    }

 



    return (
        <motion.div onClick={()=>onClick()} className={isFocused?styles.activeWrapper:styles.passiveWrapper}>
            <PublicPoster 
                poster={props.poster}
            />
            <PublicHostTitles 
                modality={props.modality}
                focus={isFocused}
                providerTitle={props.contentTitle}
                sourceType={props.sourceType}
            />
            <PublicHostSourceData 
                focus={isFocused}
                modality={props.modality}
            />
        </motion.div>
    )
}

export default PublicHostUnit