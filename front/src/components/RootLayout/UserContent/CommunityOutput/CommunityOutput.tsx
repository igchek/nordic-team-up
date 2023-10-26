"use client"

import styles from './styles.module.scss';

import CommunityOutputSegment from './CommunityOutputSegment';
import CommunityToping from './CommunityToping';

interface CommunityOutputI {

}


const CommunityOutput:React.FC<CommunityOutputI> = (props) => {

    

    return(
        <div className={styles.wrapper}>
               <CommunityToping
                        logo={'logo'}
                        contentTitle={'Def Title'}
                        modality={'vibe'}
                />
                    <div className={styles.CommunityOutput}>
                        <CommunityOutputSegment
                            segmentType='public'
                            selection={false}                       
                        />
                        <CommunityOutputSegment
                            segmentType='local'
                            selection={false}                       
                        />
                        {/* best to map a selector state correspondendt 
                        to community contents of a selected vibe */}
                    </div>
        </div>
    )


}

export default CommunityOutput