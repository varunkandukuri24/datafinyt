import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="" />
            <div>
                <p>DATA ANALYTICS DASHBOARD</p>
                <h1>Manage data analytics centrally</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloremque cum fugit nisi cupiditate pariatur voluptas reprehenderit maxime porro,
                    dolorum neque debitis soluta? Fugit veniam quasi asperiores repellat eligendi nemo perspiciatis.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Analytics