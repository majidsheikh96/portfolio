import Image from 'next/image'
import React from 'react'

function skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#2b34a8]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>


            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src= "/assests/skills/html.png" width='64' height='64' alt='/'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>HTML</h3>
                </div>
            </div>                
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src= "/assests/skills/css.png" width='64' height='64' alt='/'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>CSS</h3>
                </div>
            </div>                
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src= "/assests/skills/javascript.png" width='64' height='64' alt='/'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Javascript</h3>
                </div>
            </div>                
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src= "/assests/skills/nextjs.png" width='64' height='64' alt='/'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Next Js</h3>
                </div>
            </div>                
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src= "/assests/skills/node.png" width='64' height='64' alt='/'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Node</h3>
                </div>
            </div>                
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src= "/assests/skills/shopify.png" width='64' height='64' alt='/'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Shopify</h3>
                </div>
            </div>                
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src= "/assests/skills/wordpress.png" width='64' height='64' alt='/'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>WordPress</h3>
                </div>
            </div>                
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src= "/assests/skills/github1.png" width='64' height='64' alt='/'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>GitHub</h3>
                </div>
            </div>                
          </div>

            </div>

        </div>
        
    </div>
  )
}

export default skills