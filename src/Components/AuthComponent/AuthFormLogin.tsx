import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Container, AuthForm, AuthWrap, AuthLable, AuthInput, LoginText, TextBox } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Hooks/Context/AuthContext";

export interface AuthFormData {
  username: string;
  password: string;
}

export interface AuthProps {
  formTitle: string;
  submitButtonText: string;
  onSubmit: SubmitHandler<AuthFormData>;
  linkText: string;
  linkTo: string;
}

const AuthFormComponent = ({ formTitle, submitButtonText, onSubmit, linkText, linkTo }: AuthProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm<AuthFormData>();
  const authContext = useContext(AuthContext);

  const handleFormSubmit = async (data: AuthFormData) => {
    const url = `${process.env.REACT_APP_API_KEY}/user/login`;
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    try {
      const formData = new URLSearchParams({
        username: data.username,
        password: data.password
      });
      
      const response = await axios.post(url, formData, config);
      console.log('로그인 성공:', response.data);
      authContext?.refetch()
      navigate("/")
    } catch (error) {
      // 로그인 요청이 실패하면 에러를 출력합니다.
      console.error('로그인 실패:', error);
    }
  };

  return (
    <Container>
      <TextBox>
        <LoginText>
          <span>당근</span> {formTitle}
        </LoginText>
      </TextBox>
      <AuthForm onSubmit={handleSubmit(handleFormSubmit)}>
        <AuthWrap>
          <AuthLable id="usernameLabel">닉네임</AuthLable>
          <AuthInput type="text" aria-labelledby="usernameLabel" {...register("username", { required: true })} />
        </AuthWrap>
        <AuthWrap>
          <AuthLable id="passwordLabel">비밀번호</AuthLable>
          <AuthInput type="password" aria-labelledby="passwordLabel" {...register("password", { required: true })} />
        </AuthWrap>
        <button type="submit">{submitButtonText}</button>
        <Link to={linkTo}>{linkText}</Link>
      </AuthForm>
    </Container>
  );
};

export default AuthFormComponent;