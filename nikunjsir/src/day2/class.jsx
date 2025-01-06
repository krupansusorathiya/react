import React from "react";

class Component2 extends React.Component {
  render() {
    return (
      <div>
        <h2>create class component2</h2>
      </div>
    );
  }
}
class Component3 extends React.Component {
  render() {
    return <div>create class component3</div>;
  }
}
class Component1 extends React.Component {
  render() {
    return (
      <div>
        <h1>create class component1 </h1>
        <Component2 />
        <Component3 />
      </div>
    );
  }
}
export default Component1;
