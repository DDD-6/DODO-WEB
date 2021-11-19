import React from "react";
import styled from "styled-components";
import { BasicButton, PrimaryButton } from "../Components/Elements/Button";
import InputField from "../Components/Elements/InputField";

const Root = styled.div`
  padding: 99px 0 68px;
`;

const DoDoTitle = styled.h1`
  margin-bottom: 47px;
  text-align: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 24px;
  margin-bottom: 80px;
`;

const SignupButton = styled(BasicButton)`
  margin-bottom: 12px;
`;

export default function LoginPage() {
  return (
    <Root>
      <DoDoTitle>
        DODO
        <br />
        LIST
      </DoDoTitle>
      <LoginForm>
        <InputField id="dodo-id" label="이메일" inputType="text" />
        <InputField id="dodo-id" label="비밀번호" inputType="password" />
        <PrimaryButton>로그인</PrimaryButton>
      </LoginForm>
      <SignupButton>회원가입</SignupButton>
      <BasicButton>구글로 계속하기</BasicButton>
    </Root>
  );
}
