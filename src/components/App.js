import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const relativeList = [
      { description: "React?", key: "relativeListItem1" },
      { description: "JS?", key: "relativeListItem2" },
      { description: "CSS?", key: "relativeListItem3" }
    ];

    return (
      <ol key>
        {relativeList.map((question, key) => {
          return <li key={question.key}>{question.description}</li>;
        })}
      </ol>
    );
  }
}
export default App;
