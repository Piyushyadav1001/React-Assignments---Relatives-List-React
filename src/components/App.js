import React, { Component, useState } from "react";
class App extends Component {
  render() {
    const relativeList = [
      { description: "How are u React?", key: "relativeListItem1" },
      { description: "hello", key: "relativeListItem2" },
      { description: "CSS?", key: "relativeListItem3" }
    ];

    return (
      <ol key={"relativeList"}>
        {relativeList.map((question, key) => {
          return <li key={question.key}>{question.description}</li>;
        })}
      </ol>
    );
  }
}
export default App;
