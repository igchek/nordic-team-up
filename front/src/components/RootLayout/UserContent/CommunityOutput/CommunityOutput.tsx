"use client"

import styles from './styles.module.scss';

import CommunityOutputSegment from './CommunityOutputSegment';
import CommunityToping from './CommunityToping';
import { useAppDispatch, useAppSelector } from '@/hooks';

interface CommunityOutputI {

}


const CommunityOutput:React.FC<CommunityOutputI> = (props) => {
    const publicCommunitites = useAppSelector(({communities})=>communities.publicCommunities)
    const privateCommunities = useAppSelector(({communities})=>communities.privateCommunities)
    const targetCommunities = useAppSelector(({communities})=>communities.targetCommunities)
    const pushLoad = useAppSelector(({communities})=>communities.pushLoad)
    

    return(
        <div className={styles.wrapper}>
               <CommunityToping
                        logo={'logo'}
                        contentTitle={'Def Title'}
                        modality={'vibe'}
                />
                    <div className={styles.CommunityOutput}>
                        <CommunityOutputSegment
                            communities={publicCommunitites}
                            segmentType='public'
                            selection={false}                       
                        />
                        {
                            privateCommunities &&
                            <CommunityOutputSegment
                            communities={privateCommunities}
                            segmentType='private'
                            selection={privateCommunities.length>3?false:true}                       
                        />
                        }
                        {
                            targetCommunities &&
                            <CommunityOutputSegment
                            communities={targetCommunities}
                            segmentType='target'
                            selection={false}                       
                        />
                        }
                        {/* best to map a selector state correspondendt 
                        to community contents of a selected vibe */}
                    </div>
        </div>
    )


}

export default CommunityOutput