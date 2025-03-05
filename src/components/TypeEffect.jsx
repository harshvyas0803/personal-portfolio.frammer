import React from "react";
import Typewriter from 'typewriter-effect';


const TypingEffect = () => {
  return <h1 className="text-4xl"><Typewriter
  options={{
    strings: [
     
        " Full-Stack Developer",
        "React-Native Developer",
        " Building Modern Web/App Solutions",
        " Turning Ideas into Code",
        " Code. Create. Deploy."
      ],
    autoStart: true,
    loop: true,
  }} 
/>
</h1>
};

export default TypingEffect;