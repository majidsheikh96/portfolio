import Image from 'next/image'
import React from 'react'


const About = () => {
  return (
    <div id='about' className='w-fill md:h-screen p-2 items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#212886]'>About</p>
                <h2 className='py-4 '>Who I Am</h2>
                <p className='py-2 text-gray-600'>I specialize in developing & designing responsive front-end Web development. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.</p>
            <p className='py-2 text-gray-600'> I started web developement in 2022 managing multiple e-commerce, Services, Educational
            websites on CMS platforms such as WordPress, Joomla, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications.</p>
            <p className='py-2 text-gray-600 underline cursor-pointer' >Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src='/assests/about.jpg' alt="" width="900" height = "800" ></Image>    
            </div>
        </div>
    </div>
  )
}

export default About