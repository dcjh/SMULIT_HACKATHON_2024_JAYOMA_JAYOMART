import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateNode = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [preview, setPreview] = useState('');
    const [description, setDescription] = useState('');
    const [bias, setBias] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
   
    const handleSaveNode = () => {
        const node = {
            title,
            price,
            preview,
            description,
            bias
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/dataMart', node)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Listing created successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                // alert('An error happened. Please check console')
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error);
            })
    }

  return (
    <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4'>Create New Data Listing</h1>
        {loading ? <Spinner /> : ''}
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
            <div className='my-4'>
                <label>Title</label>
                <input 
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                />
            </div>
            <div className='my-4'>
                <label>Price</label>
                <input 
                    type='number'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                />
            </div>
            <div className='my-4'>
                <label>Preview</label>
                <input 
                    type='text'
                    value={preview}
                    onChange={(e) => setPreview(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                />
            </div>
            <div className='my-4'>
                <label>Description</label>
                <textarea 
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full whitespace-pre-wrap'
                />
            </div>
            <div className='my-4'>
                <label>Bias</label>
                <input 
                    type='text'
                    value={bias}
                    onChange={(e) => setBias(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                />
            </div>
            <button className='p-2 bg-sky-300 m-8' onClick={handleSaveNode}>
                Publish Listing
            </button>
        </div>
    </div>
  )
}

export default CreateNode