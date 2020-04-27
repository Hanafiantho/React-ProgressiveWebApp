import React, {useState} from "react";
import LoginPageView from "./LoginPage.view";
import Container from "reactstrap/lib/Container";
import "./login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPass = () => {
    setShowPassword(!showPassword)
  }

  console.log(showPassword);

  return (
    <Container className="login">
      <LoginPageView 
        showPassword={showPassword}
        handleShowPass={handleShowPass}
      />
    </Container>
  )
}

export default Login