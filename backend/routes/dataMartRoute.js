import express from 'express';
import { dataNode } from '../models/dataNode.js';

const router = express.Router();

// route to create a new dataNode
router.post('/', async (request, response) => {
    try {
        if(!request.body.title || 
           !request.body.price || 
           !request.body.preview ||
           !request.body.description 
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, price, description',
            });
        }

        const newDataNode = {
            title: request.body.title,
            price: request.body.price,
            preview: request.body.preview,
            description: request.body.description,
            bias: request.body.bias,
        };
        const node = await dataNode.create(newDataNode);

        return response.status(201).send(node);
    } catch (error) {
        console.log(error.message);
        response.status(500);
    }
});

// route to get ALL dataNodes from database
router.get('/', async (request, response) => {
    try {
        const mart = await dataNode.find({});
        return response.status(200).json({
            count: mart.length,
            content: mart,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });        
    }
});

// route to get single dataNode from database via ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const node = await dataNode.findById(id);
        return response.status(200).json(node);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });        
    }
});

// route to update a dataNode
router.put('/:id', async (request, response) => {
    try {
        if(!request.body.title || 
           !request.body.price ||
           !request.body.preview ||
           !request.body.description 
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, price, description',
            });
        }
         
        const { id } = request.params;

        const resultDataNode = await dataNode.findByIdAndUpdate(id, request.body);
        if (!resultDataNode) {
            return response.status(404).json({ message: 'Node not found' });
        }

        return response.status(200).send({ message: 'Node Details Updated Successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });        
    }
});

//route to delete a dataNode
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const resultDataNode = await dataNode.findByIdAndDelete(id);
        if (!resultDataNode) {
            return response.status(404).json({ message: 'Node not found' });
        }

        return response.status(200).send({ message: 'Node Deleted Successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
