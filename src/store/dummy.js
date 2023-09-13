const db = {
  users: [
    { id: 1, name: 'Pedro' },
    { id: 2, name: 'Margarita' },
  ],
};

async function list(table) {
  return db[table];
}

async function get(table, id) {
  const rows = await list(table);
  return rows.find((item) => item.id === parseInt(id)) || null;
}

async function add(table, data) {
  const col = list(table);
  db[col].push(data);
}

async function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  add,
  remove,
};
