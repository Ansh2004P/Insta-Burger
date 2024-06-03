import User from "./User";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const userName = useContext(UserContext);

  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React About Page</h2>
      <User name={userName.loggedInUser} location={"Gondia"} contact={"@anshdec21"} />
    </div>
  );
};

export default About;
