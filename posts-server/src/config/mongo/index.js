import mongoose from 'mongoose';

const username = 'discor';

// mongoose.connect(`mongodb://localhost:27017/${username}`);
mongoose.Promise = global.Promise;
const mongoDB = mongoose.connection;

mongoDB.once('open', err => {
  console.log('successfully connected to MongoDB:', username);
  if (err) console.error('failed to connect to MongoDB', err);
});

mongoDB.on('error', console.error.bind(console, 'MongoDB connection error:'));