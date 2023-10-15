import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem]' src={single} alt="/" />
            <h2 className='font-bold text-2xl text-center py-8'>Single User</h2>
            <p className='text-center font-bold text-4xl'>$149</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-4'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 flex justify-center'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem]' src={double} alt="/" />
            <h2 className='font-bold text-2xl text-center py-8'>Team Plan</h2>
            <p className='text-center font-bold text-4xl'>$249</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-4'>2 TB Storage</p>
                <p className='py-2 border-b mx-8'>5 Granted Users</p>
                <p className='py-2 border-b mx-8'>Send up to 5 GB</p>
            </div>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 flex justify-center'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem]' src={triple} alt="/" />
            <h2 className='font-bold text-2xl text-center py-8'>Group Plan</h2>
            <p className='text-center font-bold text-4xl'>$399</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-4'>4 TB Storage</p>
                <p className='py-2 border-b mx-8'>10 Granted Users</p>
                <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 flex justify-center'>Start Trial</button>
        </div>
    </div>
    </div>
  )
}

export default Cards