import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  {
    courses {
      title
      topic
      description
      url
    }
  }
`;

const Language = () => {
  return (
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error!!</p>;
        console.log(data);

        return data.courses.map((node, index) => {
          const { title, topic, description, url } = node;
          return (
            <div key={index}>
              <p>Title : {title}</p>
              <p>Topic : {topic}</p>
              <p>Description : {description}</p>
              <p>
                URL :{" "}
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </p>
              <hr />
            </div>
          );
        });
      }}
    </Query>
  );
};

export default Language;
