import { myLaptop, people, getById } from './db';

const resolvers = {
  Query: {
    name: () => 'Elitebook',
    laptop: () => myLaptop,
    people: () => people,
    person: (_, { man_id }) => getById(man_id),
  },
};

export default resolvers;
