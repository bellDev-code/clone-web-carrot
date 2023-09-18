import AuthFormSignup, { SignupFormData } from "../../Components/AuthComponent/AuthFormSignUp";

const CreateAccountPage = () => {
    const handleCreateAccountSubmit = (data: SignupFormData) => {
        console.log(data);
      };
    
    return (
        <AuthFormSignup
            formTitle="회원가입"
            submitButtonText="회원가입"
            onSubmit={handleCreateAccountSubmit}
            linkText="회원가입을 하셨다면 로그인해주세요"
            linkTo="/login"
        />
    )
}

export default CreateAccountPage