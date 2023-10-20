import React from 'react'
import styles from 'common.module.scss'
import SvgSelector from '@/app/Utils/SvgSelector'
import {useState} from 'react'

interface NavBurgerI {
    focus:boolean
    communityTarget:boolean
}

export const NavBurger:React.FC<NavBurgerI> = (focus, communityTarget) => {
  // const [searhBurger, setSearchBurger] = useState(false)
  if (focus){
    return(
      <div className={styles.NavBarWrapper}>
        <div className={styles.searchWrapper}>
          <div className={styles.inputWrapper}>
            <input className={styles.searchInput} type="text" />
            <div className={styles.burgerWrapper}>
              <div
                // onClick={setSearchBurger(!searhBurger)}
                className={styles.burgerSocket}>
                  <SvgSelector
                    value='burger'
                    tier='standart'
                    focus={false}
                  />
              </div>
            </div>
          </div>
          <div className={styles.searchIconWrapepr}>
            <div className={styles.searchIconSocket}>
              <SvgSelector
                value='search'
                tier='standart'
                focus={true}
              />
            </div>
          </div>
          <div className={styles.outputPresetWrapper}>
            <div className={styles.outputPresetWrapper}>
              <div className={styles.outputPresetSocket}>
                <SvgSelector
                  value='vibe'
                  tier='standart'
                  focus={!communityTarget?true:false}
                />
              </div>
              <div className={styles.outputPresetSocket}>
                <SvgSelector
                  value='community'
                  tier='standart'
                  focus={communityTarget?true:false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else
  return (
    <div className={styles.NavBarWrapper}>
        <div className={styles.inputWrapper}>
            <input className={styles.searchInput} type="text" />
            <div className={styles.burgerWrapper}>
              <div
                // onClick={setSearchBurger(!searhBurger)}
                className={styles.burgerSocket}>
                  <SvgSelector
                    value='burger'
                    tier='standart'
                    focus={false}
                  />
              </div>
            </div>
          </div>
          <div className={styles.searchIconWrapepr}>
            <div className={styles.searchIconSocket}>
              <SvgSelector
                value='search'
                tier='standart'
                focus={false}
              />
            </div>
          </div>
    </div>
  )
}
