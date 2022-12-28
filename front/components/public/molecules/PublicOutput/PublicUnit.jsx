import React from "react";
import PublicPoster from "../../atoms/PublicOutput/PublicPoster";
import PublicSourceData from "../../atoms/PublicOutput/PublicSourceData";
import PublicTitles from "../../atoms/PublicOutput/PublicTitles";
import classes from './PublicUnit.modules.css'
import { useDispatch, useSelector } from "react-redux";
import focus, { setFocusedContent } from "../../../../store/focus";
import { useEffect, useState } from "react";
import publicContent from "../../../../store/publicContent";



const PublicUnit = (props) => {
    const UnitId = props.id
    const currentFocusedContent = useSelector(({focus})=> state.focusedContent)
    const publicContent = useSelector(({publicContent})=> state.content)
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
        <div onClick={onClick} className={props.focus==='true'?classes.activeWrapper:classes.passiveWrapper}>
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