import React from "react";

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {

    this.setState({name : "Sheeraz",age:26})
  }
  render() {
    return <div>{this.state.name}</div>;
  }
}
  