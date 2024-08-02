"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import { styleSheet } from '@/stylesGlobal/variables'
import { uploadFiles } from './uploadhelpers'
import SwapMSVG from '@/components/common/svg/SwapMSVG'
import UploadMSVG from '@/components/common/svg/UploadMSVG'
import InputUpload from '@/components/common/media/InputUpload'
import FormExample from './FormExample'
import MotionIconUpload from './FormExample'

interface MotionIconI {
    pic:string[]
    focus:boolean
    uploadControl?:{
      fileUpload:React.Dispatch<React.SetStateAction<File[]>>,
      urlUpload:React.Dispatch<React.SetStateAction<string[]>>
    }
    
}





const MotionIcon:React.FC<MotionIconI> = ({pic, focus, uploadControl}) => {
  const [isFocused, setFocus] =useState(focus)

  const [StopOneScope, animateFirstStop] = useAnimate()
  const [StopTwoScope, animateSecondStop] = useAnimate()
  const [StopThreeScope, animateThirdStop] = useAnimate()
  const [StopFourScope, animateFourthStop] = useAnimate()
    
  


 
  

  useEffect(()=>{
    if(isFocused){
      animateFirstStop(StopOneScope.current, {stopColor:styleSheet.gradients.quaterciary.FirstStop})
      animateSecondStop(StopTwoScope.current, {stopColor:styleSheet.gradients.quaterciary.SecondStop})
      animateThirdStop(StopThreeScope.current, {stopColor:styleSheet.gradients.quaterciary.ThirdStop})
      animateFourthStop(StopFourScope.current, {stopColor:styleSheet.gradients.quaterciary.FourthStop})
    }
    else{
      animateFirstStop(StopOneScope.current, {stopColor:styleSheet.gradients.binary.FirstStop})
      animateSecondStop(StopTwoScope.current, {stopColor:styleSheet.gradients.binary.FirstStop})
      animateThirdStop(StopThreeScope.current, {stopColor:styleSheet.gradients.binary.SecondStop})
      animateFourthStop(StopFourScope.current, {stopColor:styleSheet.gradients.binary.SecondStop})
    }
  }, [isFocused])





  if(uploadControl){
    const [uploadFile, setUploadFile] = useState<File[]>([])
    const [uploadUrl, setUploadUrl] = useState<string[]>([])
    const [uploadIconHover, setUploadIconHover] = useState(false)
    const [fillImage, animateFillImage] = useAnimate()
    const [blurCircle, animateBlurCircle] = useAnimate()
    const [uploadWrapper, animateUploadWrapper] = useAnimate()



  





    useEffect(()=>{
      console.log('upload file is', uploadFile)
      // console.log('upload url is', uploadUrl)
    },[uploadFile])
    
    
    
    
    
    
    
    
    
    function SubmitFile(e:ChangeEvent<HTMLInputElement>){
        e.preventDefault()
        const fileReader = new FileReader()
        if (e.target.files){
            const file = e.target.files[0]
            fileReader.onloadend = (event) =>{
                // uploadControl?.fileUpload([file])
                const fileUrl = event.target?.result?.toString()||''
                uploadControl?.urlUpload([fileUrl])
                console.log('uploader working')
            }
            fileReader.readAsDataURL(file)
        }
    }
    return (
      <motion.div
          onMouseEnter={(e)=>{
            e.stopPropagation()
            // setFocus(true)
            animateBlurCircle(blurCircle.current,{fillOpacity:0.5})
            animateUploadWrapper(uploadWrapper.current, {opacity:1})
          }}
          onMouseLeave={(e)=>{
            e.stopPropagation()
            // setFocus(false)
            animateBlurCircle(blurCircle.current, {fillOpacity:0})
            animateUploadWrapper(uploadWrapper.current, {opacity:0})
          }}
          className={styles.MotionIcon}
      >
        
  
        <svg 
        className={styles.svg} width="100%" height="100%" viewBox="0 0 2240 2240" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <circle className={styles.fill} cx="1120" cy="1120" r="1085" fill="url(#pattern0_1_172)"/>
          <motion.circle
            ref={blurCircle}
            className={styles.blur}
            initial={{fillOpacity:0}}
            
          id={'blur'} cx="1120" cy="1120" r="1085" fill="#838383" />
          <circle
            className={styles.wrapper}
           cx="1120" cy="1120" r="1085" stroke="url(#paint0_linear_1_172)" strokeWidth="70"/>
         
          <defs>
          <pattern id="pattern0_1_172" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1_172"
           transform="translate(-0.239274) scale(0.00165017)"
           />
          </pattern>
          <linearGradient id="paint0_linear_1_172" x1="1120" y1="0" x2="1120" y2="2240" gradientUnits="userSpaceOnUse">
            <motion.stop ref={StopOneScope}/>
            <motion.stop ref={StopTwoScope} offset="0.331596"/>
            <motion.stop ref={StopThreeScope} offset="0.659721"/>
            <motion.stop ref={StopFourScope} offset="1"/>
          </linearGradient>
          <motion.image ref={fillImage} id="image0_1_172" width="896" height="606" xlinkHref={pic?pic[0]:"https://utfs.io/f/c391c7ac-6831-4013-8e22-d6f4511a3889-l3gq70.svg"}/>
          </defs>
         
        </svg>
        <motion.div
            ref={uploadWrapper}
            className={styles.iconFrame}
          >
            <motion.label
              onMouseEnter={()=>{
                setUploadIconHover(true)                
              }}
              onMouseLeave={()=>{
                setUploadIconHover(false)                 
              }}
              className={styles.iconWrapper}
            >
              <div 
              className={styles.iconSocket}>
                {!uploadFile?
                  <SwapMSVG
                    focus={uploadIconHover}
                  />
                :
                  <UploadMSVG
                    focus={uploadIconHover}
                  />
                }
                
              </div>

              <MotionIconUpload
                urlControl={uploadControl.urlUpload}
                fileControl={uploadControl.fileUpload}
              />
            </motion.label>
            
          </motion.div>
          
          
  
      </motion.div>
    )
  }
   

  else{

    return (
      <motion.div
        onMouseEnter={()=>{
          setFocus(true)
        }}
        onMouseLeave={()=>{
          setFocus(false)
        }}
          className={styles.MotionIcon}
      >
        
        <svg width="100%" height="100%" viewBox="0 0 2240 2240" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <circle cx="1120" cy="1120" r="1085" fill="url(#pattern0_1_172)"/>
          {/* <motion.circle
            initial={{fillOpacity:0}}
            whileHover={{fillOpacity:0.5}}
          id={'blur'} cx="1120" cy="1120" r="1085" fill="#838383" /> */}
          <circle cx="1120" cy="1120" r="1085" stroke="url(#paint0_linear_1_172)" strokeWidth="70"/>
          <defs>
          <pattern id="pattern0_1_172" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1_172" transform="translate(-0.239274) scale(0.00165017)"/>
          </pattern>
          <linearGradient id="paint0_linear_1_172" x1="1120" y1="0" x2="1120" y2="2240" gradientUnits="userSpaceOnUse">
            <motion.stop ref={StopOneScope}/>
            <motion.stop ref={StopTwoScope} offset="0.331596"/>
            <motion.stop ref={StopThreeScope} offset="0.659721"/>
            <motion.stop ref={StopFourScope} offset="1"/>
          </linearGradient>
          <image id="image0_1_172" width="896" height="606" xlinkHref={pic[0]}/>
          </defs>
        </svg>
        
  
      </motion.div>
    )
  }
 
}



export default React.memo(MotionIcon)