const igor = {
  name: "Igor",
  age: 18,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => igor,
  },
};

export default resolvers;
