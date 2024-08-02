import React, { SetStateAction } from 'react'
import styles from './styles.module.scss'

import BinarySwitcher from './BinarySwitcher'

interface ParameterSetI {
    MSVG:React.ReactNode
    title:string
    control:React.Dispatch<SetStateAction<boolean>>
    defaultState:boolean
}

const ParameterSet = ({MSVG, title, control, defaultState}:ParameterSetI) => {
    // const [focus, setFocus] = useState(state)
  return (
    <div
        className={styles.parameter}
    >
        <div
            className={styles.pic}
        >
            <div
                className={styles.socket}
            >
                {MSVG}
            </div>
        </div>
        <div
            className={styles.title}
        >
            {title}
        </div>
        <div
            className={styles.switcher}
        >
            <BinarySwitcher
                state={defaultState}
                control={control}
            />
        </div>
    </div>
  )
}

export default ParameterSet