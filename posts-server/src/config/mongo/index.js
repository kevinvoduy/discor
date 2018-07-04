import mongoose from 'mongoose';

require('dotenv').config();

const db = 'discor';
const user = process.env.MONGO_USER;
const password = process.env.MONGO_PW;

mongoose.connect(`mongodb://${user}:${password}@13.57.209.184:27017/${db}`);
mongoose.Promise = global.Promise;
const mongoDB = mongoose.connection;

mongoDB.once('open', err => {
  console.log('successfully connected to MongoDB:', db);
  if (err) console.error('failed to connect to MongoDB', err);
});

mongoDB.on('error', console.error.bind(console, 'MongoDB connection error:'));