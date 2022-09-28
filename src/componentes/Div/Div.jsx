import React,{Children, useEffect} from 'react'
import { useInView } from "react-intersection-observer";
import {motion,useAnimation} from 'framer-motion/dist/framer-motion'



function Div({View}) {

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const boxVariant2 = {
  visible: { width:window.innerWidth, transition: { duration: 0.5 } },
  hidden: { width: '30%'}
};


const control = useAnimation();
const [ref, inView] = useInView()


useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);


  return (
    <motion.div
    className='div_container_type'
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control}>
        {View}
    </motion.div>
  )
}

export default Div