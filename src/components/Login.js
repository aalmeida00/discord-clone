import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import "./Login.css";

const Login = () => {
  const signIn = (e) => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png"
          alt="Discord Logo"
        />
      </div>
      <Button onClick={signIn}>Entrar</Button>
    </div>
  );
};

export default Login;
