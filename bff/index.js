const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");
const fetch = require("node-fetch");

const typeDefs = gql`
  type Query {
    courses(topic: String): [Course]
  }
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
`;

const getCourses = async args => {
  console.log("args:", args);

  const res = await fetch("http://server:5000/coursesData");
  const json = await res.json();
  const coursesData = json.coursesData;

  if (args != undefined && args.topic) {
    const topic = args.topic;
    return coursesData.filter(course => {
      return course.topic === topic;
    });
  } else {
    return coursesData;
  }
};

const resolvers = {
  Query: { courses: (parent, args) => getCourses(args) }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());

server.applyMiddleware({ app });

const port = 4000;
app.listen(port, () => {
  console.log(`Access to http://localhost:${port}${server.graphqlPath}`);
});
