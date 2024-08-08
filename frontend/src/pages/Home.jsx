import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
    const [mart, setMart] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/dataMart')
            .then((response) => {
                setMart(response.data.content);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [])

    return (
      <div className='p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl my-8'>Data For Sale</h1>
            <div className='flex gap-x-4'>
                <Link to='/dataMart/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
                <Link to='/dataMart/checkout'>
                    <FiShoppingCart className='text-black text-3xl relative top-[4px]' />
                </Link>
            </div>
        </div>
        {loading? (
            <Spinner />
        ) : (
            <table className='w-full border-separate border-spacing-2'>
                <thead>
                    <tr>
                        <th className='border border-slate-600 rounded-md'>No</th>
                        <th className='border border-slate-600 rounded-md'>Title</th>
                        <th className='border border-slate-600 rounded-md'>Price</th>
                        <th className='border border-slate-600 rounded-md max-md:hidden'>Description</th>
                        <th className='border border-slate-600 rounded-md max-md:hidden'>Bias</th>
                        <th className='border border-slate-600 rounded-md'>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {mart.map((node, index) => (
                        <tr key={node._id} className='h-8'>
                            <td className='border border-slate-700 rounded-md text-center'>
                               {index + 1} 
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                               {node.title} 
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                               {node.price} 
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                               {node.description} 
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                               {node.bias} 
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                <div className='flex justify-center gap-x-4'>
                                    <Link to={`/dataMart/details/${node._id}`}>
                                        <BsInfoCircle className='text-2xl text-green-800' />
                                    </Link>
                                    <Link to={`/dataMart/edit/${node._id}`}>
                                        <AiOutlineEdit className='text-2xl text-yellow-600' />
                                    </Link>
                                    <Link to={`/dataMart/delete/${node._id}`}>
                                        <MdOutlineDelete className='text-2xl text-red-600' />
                                    </Link>
                               </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
      </div>
    )
}

export default Home;