import db from '../../config/database/pg';
import {
  success,
  error,
  warning,
} from '../logger';

require('dotenv').config();

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;

// DATABASE

export const createDatabase = async() => {
  try {
    await db.queryAsync(
      `CREATE DATABASE ${database}`
    );
    success('created db:', database);
  } catch(err) {
    error('failed to create db -', err);
  }
};

export const dropDatabase = async() => {
  try {
    await db.queryAsync(
      `DROP DATABASE IF EXISTS ${database}`
    );
    warning('dropped db:', database);
  } catch(err) {
    error('failed to drop db -', err);
  }
};

export const useDatabase = async() => {
  try {
    await db.queryAsync(
      `USE ${database}`
    );
    success('using database:', database);
  } catch (err) {
    error('error using database -', err);
  }
};

// USERS

export const createUserTable = async() => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS users
        (
          id SERIAL,
          username VARCHAR(25) UNIQUE NOT NULL,
          CONSTRAINT users_pk
            PRIMARY KEY(id)
        )
      `
    );
    success('created users table');
  } catch (err) {
    error('error creating users table -', err);
  }
};

export const dropUserTable = async() => {
  try {
    await db.queryAsync(
      'DROP TABLE IF EXISTS users'
    );
    warning('dropped user table');
  } catch(err) {
    error('failed to drop user table -', err);
  }
};

// CREDENTIALS

export const createCredentialsTable = async() => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS credentials
        (
          id SERIAL,
          user_id INT NOT NULL,
          hash VARCHAR(25) NOT NULL,
          CONSTRAINT fk_users_id
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
      `
    );
    success('created credentials table');
  } catch (err) {
    error('error creating credentials table -', err);
  }
};

export const dropCredentialsTable = async() => {
  try {
    await db.queryAsync(
      'DROP TABLE IF EXISTS credentials'
    );
    warning('dropped credentials table');
  } catch(err) {
    error('failed to drop credentials table -', err);
  }
};

// FRIENDS

export const createFriendsTable = async() => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS friends
        (
          id SERIAL,
          user_id INT NOT NULL,
          friend_id INT NOT NULL,
          CONSTRAINT fk_user_id
            FOREIGN KEY(user_id) REFERENCES users(id),
          CONSTRAINT fk_friend_id
            FOREIGN KEY(friend_id) REFERENCES users(id)
        )
      `
    );
    success('created friends table');
  } catch(err) {
    error('failed to create friends table -', err);
  }
};

export const dropFriendsTable = async() => {
  try {
    await db.queryAsync(
      'DROP TABLE IF EXISTS friends'
    );
    warning('dropped friends table');
  } catch(err) {
    error('failed to drop friends table -', err);
  }
};

// MESSAGES

export const createMessagesTable = async() => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS messages
        (
          id SERIAL,
          room_id INT NOT NULL,
          creator_id INT NOT NULL,
          message VARCHAR(255) NOT NULL,
          CONSTRAINT messages_pk
            PRIMARY KEY(id),
          CONSTRAINT fk_creator_id
            FOREIGN KEY(creator_id) REFERENCES users(id),
          CONSTRAINT fk_room_id
            FOREIGN KEY(room_id) REFERENCES chat_rooms(id)
        )
      `
    );
    success('created messages table');
  } catch(err) {
    error('failed to create messages table -', err);
  }
};

export const dropMessagesTable = async() => {
  try {
    await db.queryAsync(
      'DROP TABLE IF EXISTS messages'
    );
    warning('dropped messages table');
  } catch(err) {
    error('failed to drop messages table -', err);
  }
};

// MESSAGE RECIPIANT

export const createMessageRecipiantTable = async() => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS message_recipiant
        (
          id SERIAL,
          recipiant_id INT NOT NULL,
          message_id INT NOT NULL,
          is_read bool,
          CONSTRAINT fk_recipiant_id
            FOREIGN KEY(recipiant_id) REFERENCES users(id),
          CONSTRAINT fk_message_id
            FOREIGN KEY(message_id) REFERENCES messages(id)
        )
      `
    );
    success('created message recipiant table');
  } catch(err) {
    error('failed to create message recipiant table -', err);
  }
};

export const dropMessageRecipiantTable = async() => {
  try {
    await db.queryAsync(
      'DROP TABLE IF EXISTS message_recipiant'
    );
    warning('dropped message recipiant table');
  } catch(err) {
    error('failed to drop message recipiant table -', err);
  }
};

// CHAT ROOMS

export const createChatRoomsTable = async() => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS chat_rooms
        (
          id SERIAL,
          room_id INT NOT NULL,
          sender_1 INT NOT NULL,
          sender_2 INT NOT NULL,
          CONSTRAINT chat_rooms_pk
            PRIMARY KEY(id),
          CONSTRAINT fk_sender_1
            FOREIGN KEY(sender_1) REFERENCES users(id),
          CONSTRAINT fk_sender_2
            FOREIGN KEY(sender_2) REFERENCES users(id)
        )
      `
    );
    success('created chat rooms table');
  } catch(err) {
    error('failed to drop chat rooms table -', err);
  }
};

export const dropChatRoomsTable = async() => {
  try {
    await db.queryAsync(
      'DROP TABLE IF EXISTS chat_rooms'
    );
    warning('dropped chat room table');
  } catch(err) {
    error('failed to drop chat rooms table -', err);
  }
};