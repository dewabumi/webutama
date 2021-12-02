import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour, homeObjFive } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import WhyUsSection from '../components/WhyUsSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle} />
         <HeroSection />
         <Profile />
         <InfoSection {...homeObjFive} />
         <InfoSection {...homeObjOne}/>
         <InfoSection {...homeObjTwo}/>
         <InfoSection {...homeObjThree}/>
         <WhyUsSection {...homeObjFour} />
         <Services />
         <Footer />
        </>
    )
}

export default Home
