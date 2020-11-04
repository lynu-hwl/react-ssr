import React from "react";

export default class App extends React.Component {
  getVal () {
    console.log("哈哈哈");
  }
  render () {
    return (
      <div>
        <button onClick={this.getVal}>点击</button>
        <div>123</div>
      </div>
    )

  }
}