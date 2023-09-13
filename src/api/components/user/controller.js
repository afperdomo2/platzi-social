const { upsert } = require('../../../store/dummy');

const TABLE = 'users';

module.exports = (injectedStore) => {
  const store = injectedStore ?? require('../../../store/dummy');

  async function list() {
    return store.list(TABLE);
  }

  async function get(id) {
    return store.get(TABLE, id);
  }

  async function add(data) {
    return store.add(TABLE, data);
  }

  return {
    list,
    get,
    add,
  };
};
