import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowNode = () => {
    const [node, setNode] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/dataMart/${id}`)
            .then((response) => {
                setNode(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [])    

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Data Information</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Id</span>
                        <span>{node._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Title</span>
                        <span>{node.title}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Price</span>
                        <span>{node.price}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Description</span>
                        <span>{node.description}</span>
                    </div>
                    {node.bias && (
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Bias</span>
                            <span>{node.bias}</span>
                        </div>
                    )}
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Date of Creation</span>
                        <span>
                            {`${new Date(node.createdAt).getDate()} ${new Date(node.createdAt).toLocaleString('default', { month: 'long' })} ${new Date(node.createdAt).getFullYear()}`}
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowNode