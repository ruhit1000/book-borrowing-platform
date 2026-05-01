import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { IoBookOutline } from 'react-icons/io5';
import { RiExchange2Line } from 'react-icons/ri';

const Stats = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-10 container mx-auto'>
            <div className='border-2 border-base-300 text-center p-6 rounded-2xl'>
                <IoBookOutline size={50} className='mx-auto' />
                <h2 className='font-bold text-2xl mt-2'>1000+</h2>
                <p className='font-medium text-lg'>Books Available</p>
            </div>
            <div className='border-2 border-base-300 text-center p-6 rounded-2xl'>
                <FiUsers size={50} className='mx-auto' />
                <h2 className='font-bold text-2xl mt-2'>500+</h2>
                <p className='font-medium text-lg'>Active Members</p>
            </div>
            <div className='border-2 border-base-300 text-center p-6 rounded-2xl'>
                <RiExchange2Line size={50} className='mx-auto' />
                <h2 className='font-bold text-2xl mt-2'>3200+</h2>
                <p className='font-medium text-lg'>Total Borrows</p>
            </div>
        </div>
    );
};

export default Stats;