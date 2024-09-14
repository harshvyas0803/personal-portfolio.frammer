 import React from 'react'
import Navbar from './components/Navbar'
  import Hero from './components/Hero';
  import About from './components/About';
  import Technologies from './components/Technologies';
// import Experience from './components/Experience';

 import Projects from './components/Projects';
 import Contact from './components/Contact';
 
 const App = () => {
   return (
    
    

    <div className='overflow-x-hidden text-black selection:bg-gray-950 selection:text-white min-h-screen'>
    <div className='fixed top-0 left-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#e7e2e2d9_40%,#63e_100%)]'></div>

    <div className='container mx-auto px-8'>  
      <Navbar />
       <Hero /> 
       <Technologies></Technologies>  
       <Projects></Projects>  
        <About></About>  
       
      {/* <Experience></Experience> */}
      
       <Contact></Contact> 
    </div>
  </div>
);
}



export default App;

//  <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>