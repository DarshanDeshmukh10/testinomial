import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
const Card = (props) => {
    let review=props.review;
     
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[10] mx-auto'>
            <img className='aspect-sqare rounded-full w-[140px] h-[140px] z-[25] ' src={review.image} alt="" />
        <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-100] left-[10px]'>

        </div>
        </div> 

        <div className='text-center mt-7'>
            <p className='text-bold text-2xl capitalize '>{review.name}</p>
        </div>

        <div className='text-center mt-7'>
            <p className='text-violet-300 uppercase text-small'>{review.job}</p>
        </div>
        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft/>
        </div>

        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>
 
        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight/>
        </div>

        <div className='flex text-3xl mt-5 text-violet-400 font-bold'>
            <button className='cursor-pointer hover:text-violet-500'>
                <FiChevronLeft/>
            </button>
            <button className='cursor-pointer hover:text-violet-500'>
                <FiChevronRight/>
            </button>
            <button>
                Surprise Me
            </button>
        </div>
    </div>
  )
}
       
export default Card
