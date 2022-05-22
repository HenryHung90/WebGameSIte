import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import "./index.css";

import { firebase } from "../../Firebase/firebase";
const Login = ({ setIsUser }) => {
  const IsUser = useNavigate();
  //   console.log(process.env.REACT_APP_APIKEY);
  //   console.log(process.env.REACT_APP_AUTHDOMAIN);
  //   console.log(process.env.REACT_APP_PROJECTID);
  //   console.log(process.env.REACT_APP_STORAGEBUCKET);
  //   console.log(process.env.REACT_APP_MESSAGINGSENDERID);
  //   console.log(process.env.REACT_APP_APPID);
  //   console.log(process.env.REACT_APP_MEASUREMENTID);
  const SignIpWithGoogle = () => {
    const google_Provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_Provider)
      .then((res) => {
        setIsUser();
        IsUser("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="LoginContainer">
      <Button
        onClick={SignIpWithGoogle}
        variant="contained"
        startIcon={<GoogleIcon />}
      >
        Login With Google
      </Button>
    </div>
  );
};

export default Login;
