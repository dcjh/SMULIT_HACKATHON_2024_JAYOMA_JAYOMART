import mongoose from 'mongoose';

const dataSchema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      bias: {
        type: String,
        required: false,
      }
    },
    {
        timestamps: true,
    }
);

export const dataNode = mongoose.model('data', dataSchema);