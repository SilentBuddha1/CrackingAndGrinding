import React from 'react'
import './App.css'
import { motion } from "motion/react"

const App = () => {
  return (
    <div>
      <motion.div 
      animate={{x: 1000, y: 500, scale: 1.2, rotate: 360}} 
      transition={{duration: 3, type: "spring", bounce: 0.5, repeat: Infinity, repeatType: "reverse"}}
      // initial={{x: 500, y: 500, scale: 1}}
      className='box'>

      </motion.div>
    </div>
  )
}

export default App