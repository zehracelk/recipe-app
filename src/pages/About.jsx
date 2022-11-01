import React from 'react';
import coding from '../assets/coding.svg';
import Nav from '../components/Nav';


const About = () => {
  return (
    <div >

      <Nav/>
      <div className='container text-center'>

      <img className='w-50 m-5' src={coding} alt="" />
      <div className='border border-light rounded-3'>
      <header className='m-2 '>I'm Zehra ÇELIK </header>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci sed unde saepe perferendis dolor. Fuga vitae repudiandae provident cumque maxime rerum asperiores, cum aut tenetur placeat nostrum perspiciatis id!</p>
    </div>
    </div>
    </div>
  )
}

export default About
