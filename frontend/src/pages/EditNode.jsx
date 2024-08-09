import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditNode = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [preview, setPreview] = useState('');
    const [description, setDescription] = useState('');
    const [bias, setBias] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar(); 

    useEffect(() => { 
        setLoading(true);
        axios
            .get(`http://localhost:5555/dataMart/${id}`)
            .then((response) => {
                setTitle(response.data.title);
                setPrice(response.data.price);
                setDescription(response.data.description);
                setBias(response.data.bias);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert(error.message);
                console.log(error);
                
            })
    }, []);

    const handleEditNode = () => {
        const node = {
            title,
            price,
            preview,
            description,
            bias
        };
        setLoading(true);
        axios
            .put(`http://localhost:5555/dataMart/${id}`, node)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Listing edited successfully', { variant: 'success' });
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
        <h1 className='text-3xl my-4'>Edit Data Listing Details</h1>
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
                <input 
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
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
            <button className='p-2 bg-sky-300 m-8' onClick={handleEditNode}>
                Save Edits
            </button>
        </div>
    </div>
  )
}

export default EditNode