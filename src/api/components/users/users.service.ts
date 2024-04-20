function create(data: any) {
  return { id: 3, ...data };
}

function update(id: number, data: any) {
  return { id, ...data };
}

function remove(id: number) {
  return { id };
}

function findAll() {
  return [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Doe',
    },
  ];
}

function findById(id: number) {
  return {
    id,
    name: 'John Doe',
  };
}

export default {
  findAll,
  findById,
  create,
  update,
  remove,
};
