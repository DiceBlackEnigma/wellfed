import {motion} from 'framer-motion';

export const MotionDiv = props => {
  return (
    <motion.div initial={{transform: 'translateX(-50%)'}}
                animate={{transform: 'translateX(0)'}}
                exit={{x: window.innerWidth, transition: {duration: 0.2}}}>
      {props.children}
    </motion.div>
  );
}
