import React from "react";
import AuthFormComponent, { AuthFormData } from "../../Components/AuthComponent/AuthFormLogin";

const LoginPage = () => {
    const handleLoginSubmit = (data: AuthFormData) => {
      console.log("Login form submitted with data:", data);
    };
  
    return (
      <AuthFormComponent
        formTitle="로그인"
        submitButtonText="로그인"
        onSubmit={handleLoginSubmit}
        linkText="회원가입"
        linkTo="/create"
      />
    );
};
  
export default LoginPage;