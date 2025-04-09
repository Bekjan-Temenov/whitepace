import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ProjectManagement from './components/ProjectManagement/ProjectManagement';
import Worktogether from './components/Worktogether';
import Extenstion from './components/Extension';
import Customize from './components/Customise';
import PricingSection from './components/Price/PricingSection';
import Work from './components/Work/Work';
import Data from './components/Data/Data';
import Sponsors from './components/Sponsors/Sponsors';
import FavoriteApps from './components/FavoriteApps/FavoriteApps';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="flex flex-col ">
      <Header/>
      <HeroSection/>
      <ProjectManagement/>
      <Worktogether/>
      <Extenstion/>
      <Customize/>
      <PricingSection/>
      <Work/>
      <Data/>
      <Sponsors/>
      <FavoriteApps/>
      <TestimonialSection/>
      <Footer/>
    </div>
  )
}

export default App
