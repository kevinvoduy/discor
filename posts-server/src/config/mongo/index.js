import mongoose from 'mongoose';

const db = 'discor';

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PW}@13.57.209.184:27017/${db}`);
mongoose.Promise = global.Promise;
const mongoDB = mongoose.connection;

mongoDB.once('open', err => {
  console.log('successfully connected to MongoDB:', db);
  if (err) console.error('failed to connect to MongoDB', err);
});

mongoDB.on('error', console.error.bind(console, 'MongoDB connection error:'));