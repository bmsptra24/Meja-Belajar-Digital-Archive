import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Pages = () => {
  // state for switch bitween sign in and sign up
  const [signInOrSignUp, setSignInOrSignUp] = useState(false);

  // state false = sign in, true = sign up
  return signInOrSignUp === false ? (
    <SignIn setSignInOrSignUp={setSignInOrSignUp} />
  ) : (
    <SignUp setSignInOrSignUp={setSignInOrSignUp} />
  );
};

export default Pages;
