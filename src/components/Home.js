import React from 'react'
import HeroSection from './homeComponents/HeroSection';
import SubHeroSection from './homeComponents/SubHeroSection'
import Features from './homeComponents/Features';
import RecentWorks from './homeComponents/RecentWorks';
import Cards from './homeComponents/Cards';
import InTheWorks from './homeComponents/InTheWorks';
import BBSRecel from './homeComponents/BBSRecel';
import ContactSection from './homeComponents/ContactSection';
import {HomePagerecentWorksData,HomePageCardData} from '../assests/AllData';
import Footer from './Footer';

const Home = () => {

  const title = "recent works"
  const letsTalkText = "We are always on the lookout for great clients who are passionate about their products and customers."

  return (
    <>
      <div className='container-fluid Home'>
      <HeroSection />
      <SubHeroSection />
      <Features />
      <RecentWorks title={title} recentWorkData={HomePagerecentWorksData} />
      <Cards cardData={HomePageCardData}/>
      <InTheWorks />
      <BBSRecel />
      <ContactSection letsTalkText={letsTalkText} textColor="#f2f6f9" buttonText="contact us"/>
      <Footer/>
      </div>
    </>
  )
}

export default Home