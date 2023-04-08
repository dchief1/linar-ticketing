import React from 'react'

const Banner = () => {
  return (
    <div className='px-12'>
      <span className='semi-bold text-lg  text-[#1E1E1E] '>
        You will be seeing the bloom boys NExt at
      </span>
      <div className='relative pt-4'>
        <img className='absolute' src='/banner1.png' alt='' />
        <div className='absolute px-20 py-8 text-white font-bold w-full items-center flex justify-between '>
          <span className='uppercase text-2xl'>
            FILM HOUSE - lAGOS
          </span>
          <div className='flex gap-2 flex-col items-center'>
            <span className='uppercase text-2xl'>23:05 </span>
            <span className='text-xl capitalize'>remaining</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner