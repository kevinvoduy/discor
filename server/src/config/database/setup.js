import {
  createDatabase,
  dropDatabase,
  useDatabase,
} from '../../lib/SQL';

const setup = async () => {
  await createDatabase();
  await dropDatabase();
  await useDatabase();
};

setup();