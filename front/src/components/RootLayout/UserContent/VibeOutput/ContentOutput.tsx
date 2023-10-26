"use client";

import { NavBurger } from './NavBurger';
import styles from './styles.module.scss';
import { useAppSelector } from '@/hooks';
import Content from './Content';

interface ContentOutputI {
    focus:boolean
    communityTarget:boolean
}

const ContentOutput:React.FC<ContentOutputI> = (props) =>{
    const involvedContent = useAppSelector(({involvedContent})=>involvedContent.content)
    const focusedContent = useAppSelector(({focus})=>focus.focusedContent)

    return(
        <div className={styles.wrapper}>
            <NavBurger
                focus={props.focus}
                communityTarget={props.communityTarget}
            />
            {involvedContent.map(content=>
                    {return(
                        <Content
                            id={content.id}
                            poster={`src/assets/PromoLogo/${content.promoLogo}.jpg`}
                            contentTitle={content.title}
                            authorTitle={content.author}
                            modality={content.modality}
                            audience={content.totalAudience}
                            focus={focusedContent?.id===content.id?true:false}
                            communityFocus={false}
                        />
                    )}
                )}

        </div>
    )
}

export default ContentOutput