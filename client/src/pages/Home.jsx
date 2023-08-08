import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
  } from '../config/motion'

function Home() {

    const snap = useSnapshot(state);
   
  return (
    <AnimatePresence>
        {snap.intro && (<motion.div className="home-content" {...slideAnimation("down")}>
            <motion.div {...headTextAnimation}>
                <h1 className="head-text">
                    Just a Bunch of Jordans
                </h1>
            </motion.div>
        </motion.div>)}
    </AnimatePresence>
  )
}

export default Home