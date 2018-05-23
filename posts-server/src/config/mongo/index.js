import mongoose from 'mongoose';
import {
  success,
  error,
} from '../../lib/logger';

const username = 'discor';

mongoose.connect(`mongodb://localhost:27017/${username}`);
mongoose.Promise = global.Promise;
const mongoDB = mongoose.connection;

mongoDB.once('open', (err) => {
  success('successfully connected to MongoDB:', username);
  if (err) error('failed to connect to MongoDB', err);
});

mongoDB.on('error', console.error.bind(console, 'MongoDB connection error:'));