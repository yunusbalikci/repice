import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import {motion} from 'framer-motion';

function Home() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <Header></Header>
      <Hero></Hero>
      <Categories></Categories>
    </motion.div>
  )
}

export default Home
