/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styled from "styled-components";
import InputField from "../Components/Elements/InputField";
import Select from "../Components/Elements/Select";
import CalendarIcon from "../Assets/icons/Calendar.svg";
import { BasicButton } from "../Components/Elements/Button";

const Root = styled.main`
  padding: 16px 16px 122px;
`;

const Subtitle = styled.h2`
  margin-bottom: 16px;
`;

const DateLabel = styled.label`
  display: block;
  font-size: 14px;
  line-height: 24px;
`;

const DateInput = styled.input`
  width: 136px;
  height: 34px;
  padding: 0;
  display: block;
  padding: 0 8px;
  font-size: 20px;
  font-weight: 600;
  line-height: 34px;
  border: 0;
  font-family: inherit;
  border-bottom: 2px solid ${({ theme }) => theme.color.grey_200};

  &[type="date"]::-webkit-calendar-picker-indicator {
    background: url(${CalendarIcon});
    cursor: pointer;
  }
`;
const DateDiv = styled.div``;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const FixedContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const ButtonWrap = styled.div`
  ${({ theme }) => theme.main_width}
  display: flex;
  gap: 8px;
  margin: 0 auto;
  padding: 16px 16px 32px;
  background: ${({ theme }) => theme.color.white};
`;

export default function MakingTodoPage() {
  const options = ["아주중요", "중요", "보통"];
  const options2 = ["오늘 할 일", "문제풀이"];
  return (
    <Root>
      <Subtitle>새로운 할 일</Subtitle>
      <InputField
        id="할 일"
        label="할 일"
        inputProps={{
          placeholder: "할 일",
        }}
      />
      <Container>
        <div>
          <Select selectId="rank" labelName="우선순위" options={options} />
        </div>
        <DateDiv>
          <DateLabel>날짜</DateLabel>
          <DateInput placeholder="날짜선택" type="date" />
        </DateDiv>
      </Container>

      <Select
        selectId="rank"
        labelName="카테고리"
        options={options2}
        width="100%"
      />
      <FixedContainer>
        <ButtonWrap>
          <BasicButton>다음</BasicButton>
        </ButtonWrap>
      </FixedContainer>
    </Root>
  );
}
