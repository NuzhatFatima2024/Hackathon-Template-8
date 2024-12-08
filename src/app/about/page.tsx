
import React from 'react'
import AboutHero from '../components/abouthero'
import AboutSection from '../components/aboutsection'
import AboutPopularProduct from '../components/aboutpopularproduct';

const page = () => {
    return (
      <div>
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            
      </div>
    );
}

export default page
