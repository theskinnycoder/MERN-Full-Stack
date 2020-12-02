import moment from 'moment';
import mongoose from 'mongoose';

// Define a mongoose Schema for the Rants
const rantSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please give a title to your rant...']
    },
    body: {
      type: String,
      required: [true, "You can't leave your rant empty!"]
    },
    createdAt: String,
    updatedAt: String
  },
  {
    timestamps: {
      currentTime: () => moment().format('MMMM Do, YYYY')
    }
  }
);

// Export the Rant mongoose model
export default mongoose.model('Rant', rantSchema);
