import { fetchCommunity, fetchCommunityI } from "@/lib/actions/community/comunity.actions";
import styles from './styles.module.scss';
import { Suspense } from "react";


export async function Community({params}:{params:{id:string}}){
    const userId = 'id'
    const community:Promise<fetchCommunityI> = fetchCommunity({communityId:params.id, userId:userId, messageLoad:30 })
    const {communityData, messages} = await community



    return(
        <div className={styles.threadWrapper}>

                {messages.map((message)=>{
                    return(
                        <div>
                            message
                        </div>
                    )
                })}

            
        </div>
    )
}