import React from 'react'
import heroimage from '../assets/profilepic7.png'
import {TypeAnimation} from 'react-type-animation'


export const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>

        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
            <img src={heroimage} alt=""/>
        </div>

        <div className='col-span-2 my-auto'>

            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span> <br />
                <TypeAnimation
                sequence={[
                    "Frontend Dev",
                    1000,
                    "Webdesigner",
                    1000,
                    "Data Analyst",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is Sarthak Dongare . I have been learning Web development 
            </p>

            <div className='my-8'>
                <a href="/" className='px-6 py-3 w-full rounded-xl mr-4
                border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-violet-400 text-white '>
                    Download
                </a>
                <a href="#contact" className='px-6 py-3 w-full rounded-xl mr-4
                border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-violet-400
                text-white hover:border-none'>
                    Contact
                </a>
            </div>
        </div>



    </div>
  )
}
