import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#2b34a8]'>projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2b34a8] to-[#709dff]'>
                    <Image className='rounded-xl group-hover:opacity-10' src="/assests/projects/prosofticc.png" width="800" height= "800" alt=''/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Prosoftic Software House</h3>
                        <p className='pb-4 pt-2 text-white text-center'>WordPress Project</p>
                        <Link href='https://prosoftic.com/'>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info </p>
                        </Link>
                    </div>
                </div>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2b34a8] to-[#709dff]'>
                    <Image className='rounded-xl group-hover:opacity-10' src="/assests/projects/medical.png" width="800" height= "800" alt=''/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Medical Services</h3>
                        <p className='pb-4 pt-2 text-white text-center'>WordPress Project</p>
                        <Link href='https://novsmedical.com/'>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info </p>
                        </Link>
                    </div>
                </div>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2b34a8] to-[#709dff]'>
                    <Image className='rounded-xl group-hover:opacity-10' src="/assests/projects/rivalnnn.png" width="800" height= "800" alt=''/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Multilingual Gaming Website</h3>
                        <p className='pb-4 pt-2 text-white text-center'>WordPress Project</p>
                        <Link href='https://rivaln.net/home/'>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info </p>
                        </Link>
                    </div>
                </div>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2b34a8] to-[#709dff]'>
                    <Image className='rounded-xl group-hover:opacity-10' src="/assests/projects/willing.png" width="800" height= "800" alt=''/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Homecare Services</h3>
                        <p className='pb-4 pt-2 text-white text-center'>WordPress Project</p>
                        <Link href='https://willinghandscare.co.uk/'>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info </p>
                        </Link>
                    </div>
                </div>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2b34a8] to-[#709dff]'>
                    <Image className='rounded-xl group-hover:opacity-10' src="/assests/projects/sawutt.png" width="800" height= "800" alt=''/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Software Company</h3>
                        <p className='pb-4 pt-2 text-white text-center'>WordPress Project</p>
                        <Link href='https://sawutaljazeerait.com/'>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info </p>
                        </Link>
                    </div>
                </div> 
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2b34a8] to-[#709dff]'>
                    <Image className='rounded-xl group-hover:opacity-10' src="/assests/projects/healthat.png" width="800" height= "800" alt=''/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Ecommerce Website</h3>
                        <p className='pb-4 pt-2 text-white text-center'>WordPress Project</p>
                        <Link href='https://healthattire.com/'>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info </p>
                        </Link>
                    </div>
                </div>   
                

            </div>
        </div>        
    </div>
  )
}

export default Projects