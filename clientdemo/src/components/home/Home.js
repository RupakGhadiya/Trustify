import React from 'react'
import Hero from './hero/Hero'
import Demohero from './demohome/Demohero'
import NavigationCard from './navigationCard/NavigationCard'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <div>
      <Demohero />
      <NavigationCard />
      {/* <Footer /> */}
    </div>
  )
}

export default Home