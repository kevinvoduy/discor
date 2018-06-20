import {
  createUserTable,
  dropUserTable,
  createCredentialsTable,
  dropCredentialsTable,
  createFriendsTable,
  dropFriendsTable,
  createMessagesTable,
  dropMessagesTable,
  createMessageRecipiantTable,
  dropMessageRecipiantTable,
  createDatabase,
  dropDatabase,
  createChatRoomsTable,
  dropChatRoomsTable,
} from '../../lib/SQL';

const setup = async(err) => {
  await dropDatabase();
  await dropCredentialsTable();
  await dropFriendsTable();
  await dropMessageRecipiantTable();
  await dropMessagesTable();
  await dropChatRoomsTable();
  await dropUserTable();

  await createDatabase();
  // await useDatabase();
  await createUserTable();
  await createCredentialsTable();
  await createFriendsTable();
  await createChatRoomsTable();
  await createMessagesTable();
  await createMessageRecipiantTable();
  if (err) throw err;
  process.exit();
};

setup();