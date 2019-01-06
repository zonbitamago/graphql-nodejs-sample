import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import Language from "./component/Language";

const client = new ApolloClient({ uri: "http://localhost:4000/graphql" });

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          Hello GraphQL!!
          <hr />
          <Language />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
