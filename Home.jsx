import React from 'react'
import Profilecard from '../components/Profilecard'
import MensApi from '../components/MensApi'
import ShopApi from '../components/ShopApi'
import ContactApi from '../components/ContactApi'
import WemonsApi from '../components/WemonsApi'

const Home = () => {
  return (
    <div>
      <Profilecard />
      <WemonsApi />
      <MensApi />
      <ShopApi />
      <ContactApi/>
    </div>
  )
}

export default Home