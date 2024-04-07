import React from 'react'
import styles from './styles.module.scss';

const PublicCommunityOff:React.FC = () => {
  return (
    <div className={styles.svgTemplateWrapper} >
        <svg width="100%" height="100%" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="66" height="66" fill="#F5F5F5"/>
        <g id="Community Controls">
        <path d="M-1494 -574H2351V-674H-1494V-574ZM2401 -524V2900H2501V-524H2401ZM2351 2950H-1494V3050H2351V2950ZM-1544 2900V-524H-1644V2900H-1544ZM-1494 2950C-1521.61 2950 -1544 2927.61 -1544 2900H-1644C-1644 2982.84 -1576.84 3050 -1494 3050V2950ZM2401 2900C2401 2927.61 2378.61 2950 2351 2950V3050C2433.84 3050 2501 2982.84 2501 2900H2401ZM2351 -574C2378.61 -574 2401 -551.614 2401 -524H2501C2501 -606.843 2433.84 -674 2351 -674V-574ZM-1494 -674C-1576.84 -674 -1644 -606.843 -1644 -524H-1544C-1544 -551.614 -1521.61 -574 -1494 -574V-674Z" fill="black"/>
        <g id="Public Chat Icon">
        <rect x="-19.5" y="-19.5" width="104.898" height="190.789" rx="4.5" stroke="#9747FF" stroke-dasharray="10 5"/>
        <g id="focus=off">
        <path id="Polygon 10" d="M22.1615 14.0312L43.9368 14.1482L54.7231 33.0647L43.734 51.8641L21.9587 51.7471L11.1725 32.8306L22.1615 14.0312Z" stroke="#BFBFBF" stroke-width="4"/>
        </g>
        </g>
        <g id="Pointers">
        </g>
        </g>
        </svg>
    </div>
  )
}

export default PublicCommunityOff

