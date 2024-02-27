"use client"
import { VibeDataStructure, fetchVibePresent, fetchVibeI } from '@/lib/actions/content/vibe.actions';
import styles from './styles.module.scss';



export async function VibePage({ params }: { params: { id: string } }){
    const vibe:Promise<VibeDataStructure> = fetchVibePresent({vibeId:params.id})
    const VibeData = await vibe

    
    if(VibeData.gig){
        return(
            <div className={styles.VibeDisplay}>
    
            </div>
        )
    }
    if(VibeData.sync&&!VibeData.gig){
        return(
            <div className={styles.VibeDisplay}>
    
            </div>
        )
    }
    else{
        return(
            <div className={styles.VibeDisplay}>
    
            </div>
        )
    }

}