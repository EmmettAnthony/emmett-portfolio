import React from 'react'

const About = () => {
    return (
      <div
        name="about"
        className="w-full h-full bg-gradient-to-tr text-black mt-0"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mb-24">
          <div className="pb-8 mt-24">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About Me
            </p>
          </div>
  
          <p className="text-xl mt-8">
          I build new projects just to tickle my brain and love helping others to grow the best possible way I can in ensuring better timing and accuracy how they're madeup. 
          While I keep busy teaching courses, I still take courses in search of a great team & projects that interest me.
          </p>
  
          <br />
  
          <p className="text-xl">
            I am dedicated to create meaningful products that meet the needs of consumers. I am a humble programmer and willing to learn and adopt to new culture and way of life for the betterment of my career.
          </p>
        </div>
      </div>
    );
  };

export default About;