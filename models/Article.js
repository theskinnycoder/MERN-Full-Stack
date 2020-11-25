import moment from 'moment';
import mongoose from 'mongoose';

// Define a mongoose Schema for the Articles
const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Article's title can't be empty"]
    },
    body: {
      type: String,
      required: [true, "Article's body can't be empty"]
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

// Export the Article mongoose model
export default mongoose.model('Article', articleSchema);
