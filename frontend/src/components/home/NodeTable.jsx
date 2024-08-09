import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const NodeTable = ({ mart }) => {
  return (
    <table className='w-full border-separate border-spacing-2 table-auto'>
    <thead>
        <tr>
            <th className='border border-slate-600 rounded-md'>No</th>
            <th className='border border-slate-600 rounded-md'>Title</th>
            <th className='border border-slate-600 rounded-md'>Price</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Preview</th>
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
                   {node.preview} 
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                   {node.bias} 
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                    <div className='flex justify-center gap-x-2'>
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
  )
}

export default NodeTable;