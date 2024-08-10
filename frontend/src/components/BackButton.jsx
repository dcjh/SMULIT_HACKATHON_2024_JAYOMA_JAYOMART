import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({ destination = '/dataMart', user}) => {
  return (
    <div className='flex'>
        <Link 
            to={destination} 
            className='bg-primary/10 text-black px-4 py-1 rounded-lg w-fit flex items-center shadow'
            state={{ user: user }}
        >
            <BsArrowLeft className='text-2xl mr-2' /> 
            <span>Data Mart</span>
        </Link>
    </div>
  )
}

export default BackButton