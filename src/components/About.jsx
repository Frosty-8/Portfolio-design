import React from 'react'
import aboutImg from '../assets/about2.png'

export const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12 ' id='about'>
        
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I'm a software engineer with a passion for building scalable and efficient systems. I have experience working 
                        avjsdanvjsipvnsanvdsajvnaspjvnsjavpvavapvspvnajvspssvspnvspanvjdsnfsanfjksdnfjskanfjkdsnfldsknfajknfk
                    </p>
                </div>
            </div>
        </div>

        <img className='mx-auto rounded-3xl  py-8 md:py-0' src={aboutImg} alt="" width={300} height={300} />

    </div>
  )
}
