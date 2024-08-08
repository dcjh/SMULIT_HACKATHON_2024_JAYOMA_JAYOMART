import mongoose from 'mongoose';

const dataSchema = mongoose.Schema(
    {
      title: {
        
      }
    }
);

export const dataNode = mongoose.model('data', { content: String });