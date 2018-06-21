import createThreadQuery from './inboxQueries';

// create new thread
const createThread = async(req, res) => {
  try {
    const newThread = await createThreadQuery(req.body);
    console.log('new thread', newThread);
    console.log('successfully created thread');
    res.status(200).send(newThread);
  } catch(err) {
    console.error('failed to created thread -', err);
    res.status(500);
  }
};

export default createThread;
