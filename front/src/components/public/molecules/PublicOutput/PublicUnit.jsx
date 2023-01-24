import React from "react";
import PublicPoster from "../../atoms/PublicOutput/PublicPoster";
import PublicSourceData from "../../atoms/PublicOutput/PublicSourceData";
import PublicTitles from "../../atoms/PublicOutput/PublicTitles";
import styles from "./PublicUnit.module.scss"
import { useDispatch, useSelector } from "react-redux";
import focus, { setFocusedContent } from "../../../../store/focus";
import { useEffect, useState } from "react";
import publicContent from "../../../../store/publicContent";



const PublicUnit = (props) => {
    const UnitId = props.id
    const currentFocusedContent = useSelector(({focus})=> focus.focusedContent)
    const publicContent = useSelector(({publicContent})=> publicContent.content)
    const getContentbById = () => {
        for (let contentPiece of publicContent){
            if (contentPiece.id === UnitId){
                return contentPiece
            }
        }
    }
    const dispatch = useDispatch()
    const [isFocused, setFocus] = useState('false')


    // отслеживаем передвижение элементов в фокусе и подсвечиваем текущий фокус
    useEffect(()=>{
        if (currentFocusedContent&&currentFocusedContent.id!==UnitId||!currentFocusedContent){
            setFocus('false')
        }
        else if (currentFocusedContent&&currentFocusedContent.id===UnitId){
            setFocus('true')
        }
    },[currentFocusedContent])

    // клик ивент - загружаем в фокус выбранный элемент или выгружаем из фокуса уже выбранный
    const onClick = () => {
        if (currentFocusedContent.id===UnitId){
            setFocus('false')
            dispatch(setFocusedContent(''))
        }
        else if (currentFocusedContent.id!==UnitId&&currentFocusedContent||!currentFocusedContent){
            dispatch(setFocusedContent(getContentbById()))
        }
    }



    return (
        <div onClick={onClick} className={props.focus==='true'?styles.activeWrapper:styles.passiveWrapper}>
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
                modality={props.modality}
            />
        </div>
    )
}

export default PublicUnit