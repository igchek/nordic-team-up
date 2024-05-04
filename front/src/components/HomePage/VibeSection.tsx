"use client"
import React, { useState } from 'react'
import styles from './common.module.scss'
import { styleSheet } from '@/stylesGlobal/variables'
import SeparatorWave from '../common/media/SeparatorWave'
import VibeSectionContent, { VibeSectionContentI } from './VibeSectionContent'

interface VibeSection {
    vibe:VibeSectionContentI

}


const VibeSection = ({vibe}:VibeSection) => {
    // const [focus, setFocus] = useState<"default"|"prefocus"|"focus">('default')
    return (
    <div
        className={styles.sectionTemplate}
    >
        <SeparatorWave
            fill={styleSheet.spread.vibeSection}
            position='upper'
        />

        <VibeSectionContent
            vibeId={vibe.vibeId}
            content={vibe.content}
            artist={vibe.artist}
            vibrations={vibe.vibrations}
            format={vibe.format}
            modality={vibe.modality}
        />
        <SeparatorWave
            fill={styleSheet.spread.vibeSection}
            position='lower'
        />

    </div>
  )
}

export default VibeSection