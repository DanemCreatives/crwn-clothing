import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/SignIn/sign-in.component";
import SignUp from "../../components/SignUp/sign-up.component";

function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
