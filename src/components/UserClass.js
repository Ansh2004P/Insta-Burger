import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log(this.props.name + " User Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " UserDidMount");
  }

  componentDidUpdate() {
    console.log(this.props.name + " UserDidUpdate");
  }
  render() {
    console.log(this.props.name + " UserRender");

    const { name, location, contact } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increases
        </button>
        <UserContext.Consumer>
          {(value) => <h2 className="text-xl">User: {value.loggedInUser}</h2>}
          </UserContext.Consumer>
        <h1>Location: {location}</h1>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;

// NEVER UPDATE STATE VARIABLES DIRECTLY
