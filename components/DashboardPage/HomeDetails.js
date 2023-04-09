import React from 'react'

const HomeDetails = () => {
  return (
    <div className='pt-44'>
       <div className=' px-12   '>
           <div className='py-8 border-t border-t-[#FED7AA]'>
               <span className='text-[#323232]  font-bold uppercase text-base  '>TICKET DETAILS</span>
               <div className='flex justify-between w-full rounded-md mt-4 shadow-md bg-white p-6 items-center'>
                <div className='flex gap-6 items-center'>
                  <img src='/mark-black.png' alt='' />
                  <span className='uppercase font-bold text-[#E37700] text-base '>
                    FILMHOUSE - LAGOS
                  </span>
                  <span className='uppercase font-bold text-[#E37700] text-base'>X 3</span>
                </div>
                <button className='bg-[#ED7C00] rounded-md font-bold uppercase px-4 py-2 '>
                  <span className='text-white text-base'>CHOOSE WATCH DATE AND TIME</span>
                </button>
                <button className="bg-[#1F8029] font-bold flex gap-2 items-center rounded-md px-4 py-2">
                  <span className='uppercase text-white'>buy ticket</span>
                  <img src="/archive.svg" alt="" />
                </button>
               </div>
               <img src='/home.png' alt='' className='mt-12 w-full' />
           </div>
       </div>
    </div>
  )
}

export default HomeDetails