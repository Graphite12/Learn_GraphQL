const myLaptop = {
  name: 'Elitebook 855 G7',
  company: 'HP',
  CPU: 'AMD Renoir R5 4650U',
  Memory: 'SAMSUNG LDDR4 16GB',
};

const people = [
  {
    man_id: 0,
    name: 'Kim',
    age: 20,
    gender: 'Male',
  },
  {
    man_id: 1,
    name: 'Kim',
    age: 20,
    gender: 'Male',
  },
  {
    man_id: 2,
    name: 'Jean',
    age: 21,
    gender: ' Male',
  },
  {
    man_id: 3,
    name: 'Susan',
    age: 25,
    gender: 'Female',
  },
  {
    man_id: 4,
    name: 'Janne',
    age: 23,
    gender: 'Female',
  },
  {
    man_id: 5,
    name: 'Park',
    age: 21,
    gender: 'Male',
  },
  {
    man_id: 6,
    name: 'Terror',
    age: 20,
    gender: 'Male',
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((p) => id === p.man_id);
  return filteredPeople[0];
};

export default { myLaptop, people };
