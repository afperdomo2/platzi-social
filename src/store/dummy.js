const db = {
  users: [
    { id: 1, name: 'Pedro' },
    { id: 2, name: 'Margarita' },
  ],
};

function list(table) {
  return db[table];
}

function get(table, id) {
  const col = list(table);
  return col.find((item) => item.id === id) || null;
}

function upsert(table, data) {
  const col = list(table);
  db[col].push(data);
}

function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
