const delay = (time) => new Promise(resolve => setTimeout(() => resolve(), time));

const user = {
  state: [
    {
      id: 1,
      name: 'User 1'
    }
  ],
  reducers: {
    add(state, user) {
      const users = [...state];
      const existingUser = users.find(storedUser => storedUser.id === user.id);

      if (!existingUser) {
        users.push(user);
      }

      return users;
    },
    remove(state, id) {
      const users = [...state];
      const index = users.findIndex(user => user.id === id);

      if (index > -1) {
        users.splice(index, 1);
      }

      return users;
    }
  },
  effects: {
    async asyncRemove(id, state) {
      await delay(1000);
      this.remove(id);
    }
  }
}

export default user;
