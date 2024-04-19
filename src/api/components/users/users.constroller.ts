import { DummyDatabase } from '../../../database/dummy';

const db = new DummyDatabase();

function list() {
  return db.list('users');
}

export default {
  list,
};
