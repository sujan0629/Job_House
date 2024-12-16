import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center px-4 sm:px-8'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 mb-4 rounded-full bg-gray-100 text-[#d33333] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-3xl sm:text-5xl font-bold'>
                    Search, Apply & <br />
                    Get Your <span className='text-[#096bea]'>Dream Jobs</span>
                </h1>
                <p className='text-sm sm:text-base mt-4'>
                Job House ~ Find Jobs, Hire Talent !

Browse opportunities or post jobs with ease. Start your career journey today!
                </p>
                <div className='flex flex-col mt-4 sm:flex-row w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto gap-4'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full py-2 sm:py-3 px-4 rounded-full'
                    />
                    <Button onClick={searchJobHandler} className="bg-[#096bea] py-2 sm:py-3 px-6 rounded-full text-white">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
