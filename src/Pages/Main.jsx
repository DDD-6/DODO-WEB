import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PrimaryButton } from "../Components/Elements/Button";
import ProjectThumbImg from "../Assets/images/Frame 29.png";

const Root = styled.main`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 32px 16px;
`;

const StartButton = styled(PrimaryButton)`
  margin-top: auto;
`;

const MainTitle = styled.h1`
  margin-bottom: 64px;
`;

const MainProject = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
  overflow-x: scroll;
  padding-bottom: 24px;

  &::-webkit-scrollbar {
    height: 3px;
    background: ${({ theme }) => theme.color.grey_200};
    cursor: pointer;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.black};
  }
`;

const ProjectButton = styled.button`
  width: 260px;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  flex-shrink: 0;
  text-align: left;
  border-radius: 16px;
  overflow: hidden;
`;

const ProjectInfo = styled.div`
  padding: 16px 16px 40px;
  background: ${({ color, theme }) => theme.color[color]};
`;

const ProjectTitle = styled.p`
  ${({ theme }) => theme.font.Text1_Semibold}
  margin-bottom: 4px;
`;

const ProjectThumb = styled.img`
  height: 260px;
  order: -1;
`;

function RenderMain({ step = 0, onStart }) {
  return step === 0 ? (
    <>
      <h1>
        DODO LIST에
        <br />
        오신 것을 환영해요!
      </h1>
      <StartButton onClick={() => onStart()}>시작</StartButton>
    </>
  ) : (
    <>
      <MainTitle>
        일정관리를
        <br />
        어떻게 도와드릴까요?
      </MainTitle>
      <MainProject>
        <ProjectButton>
          <ProjectInfo color="teal">
            <ProjectTitle>체계적으로 관리</ProjectTitle>
            <p>
              목표를 잡고, 목표에 따라
              <br />
              할일을 관리합니다.
            </p>
          </ProjectInfo>
          <ProjectThumb src={ProjectThumbImg} alt="체계적으로 관리" />
        </ProjectButton>
        <ProjectButton>
          <ProjectInfo color="pastel_red">
            <ProjectTitle>오늘 할일 관리</ProjectTitle>
            <p>
              목표 설정없이 오늘의 할일을
              <br />
              관리합니다.
            </p>
          </ProjectInfo>
          <ProjectThumb src={ProjectThumbImg} alt="오늘 할일 관리" />
        </ProjectButton>
      </MainProject>
    </>
  );
}

RenderMain.propTypes = {
  step: PropTypes.oneOf([0, 1]).isRequired,
  onStart: PropTypes.func.isRequired,
};

export default function MainPage() {
  const [step, setStep] = useState(1);

  return (
    <Root>
      <RenderMain step={step} onStart={() => setStep(1)} />
    </Root>
  );
}
