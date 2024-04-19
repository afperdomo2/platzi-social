export class DummyDatabase {
  db: any;

  constructor() {
    this.db = {
      users: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'Jim Doe' },
      ],
    };
  }

  list(table: string) {
    return this.db[table];
  }

  get(table: string, id: number) {
    return this.db[table][id];
  }

  create(table: string, data: any) {
    this.db[table].push(data);
    return data;
  }

  update(table: string, id: number, data: any) {
    this.db[table][id] = data;
    return data;
  }

  remove(table: string, id: number) {
    const index = this.db[table].findIndex((item: any) => item.id === id);
    this.db[table].splice(index, 1);
    return true;
  }
}
