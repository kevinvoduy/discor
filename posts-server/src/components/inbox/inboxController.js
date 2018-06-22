import {
  createThreadQuery,
  createInboxQuery,
  pushThreadToInbox,
} from './inboxQueries';

// create new thread
export const createThread = async(req, res) => {
  try {
    const newThread = await createThreadQuery(req.body);
    newThread.save();

    // push thread to inbox
    await pushThreadToInbox(req.body, newThread);

    console.log('successfully created thread');
    res.status(200).send(newThread);
  } catch(err) {
    console.error('failed to created thread -', err);
    res.status(500);
  }
};

// create inbox
export const createInbox = async(req, res) => {
  try {
    const newInbox = await createInboxQuery(req.body);
    newInbox.save();

    console.log('successfully created inbox');
    res.status(200);
  } catch(err) {
    console.error('failed to created inbox -', err);
    res.status(500);
  }
};
