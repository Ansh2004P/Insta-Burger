import UserClass from "./UserClass";
import React from "react";
class AboutClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("About1Constructor");
  }

  componentDidMount() {
    console.log("About1DidMount");
  }

  componentDidUpdate() {
    console.log("About1DidUpdate");
  }

  render() {
    console.log("About1Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React About Page</h2>
        <UserClass

          location={"Gondia"}
          contact={"@anshdec21"}
        />
        <UserClass
          location={"USA"}
          contact={"@ELonMar12"}
        />
      </div>
    );
  }
}

export default AboutClass;


// Life Cycle Flow Here: 
// - About1 Constructor
// - About1 Render
//   - Ansh Constructor
//   - Ansh Render
// 
//   - Elon Constructor
//   - Elon Render
//  
//   - Ansh DidMount
//   - Elon DidMount
// - About1 DidMount


// React has two phase of Mounting the page on the browser:
// 1.  Render Phase
// 2.  Commit Phase

// here react see that there are more than one children of a parent component so that it will optimize the life cycle methods of the children components by merging the most expensive phase i.e. Render phase  and updating the DOM
// and then it will call the commit phase of the children components one by one. so all the children are rendered and then one by one did mount is called.