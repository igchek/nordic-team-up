"use client";

import { NavBurger } from './NavBurger';
import styles from './styles.module.scss';
import { useAppDispatch,useAppSelector } from '@/hooks';
import Content from './Content';
import { useEffect } from 'react';
import { setInvolvedVibes } from '@/store/involvedContent';
import { userVibe } from '@/lib/models/profiles/user.models';

interface ContentOutputI {
    vibes:userVibe[]|null
    focus:boolean
    communityTarget:boolean
}

const ContentOutput:React.FC<ContentOutputI> = ({vibes, focus, communityTarget}) =>{
    const dispatch = useAppDispatch()
    const focusedVibe = useAppSelector(({focus})=>focus.focusVibe)
    useEffect(()=>{
        if(vibes && vibes.length>0){
            dispatch(setInvolvedVibes(vibes))
        }
        
    },[])

    return(
        <div className={styles.involvementWrapper}>
            <NavBurger
                focus={focus}
                communityTarget={communityTarget}
            />
            <div className={styles.contentOutput}>
                {vibes?
                    vibes.map(vibe=>
                        {return(
                            <Content
                                key={vibes.indexOf(vibe) + 1}
                                _id={vibe.content._id}
                                vibeId={vibe.content.vibeId}
                                poster={`src/assets/PromoLogo/${vibe.content.core.media.promoLogo}.jpg`}
                                contentTitle={vibe.content.core.contentTitle}
                                authorTitle={vibe.content.core.creatorTitle}
                                modality={vibe.modality}
                                audience={vibe.content.vibrations.total.quantity}
                                focus={focusedVibe?.vibeId===vibe.content.vibeId?true:false}
                                communityFocus={false}
                            />
                        )}
                    )
                :
                null}
                
            </div>
            

        </div>
    )
}

export default ContentOutput