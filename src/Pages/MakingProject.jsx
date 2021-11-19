import React, { useRef, useState } from "react";
import styled from "styled-components";
import { BasicButton, CloseButton } from "../Components/Elements/Button";
import InputField from "../Components/Elements/InputField";
import Tip from "../Components/Elements/Tip";
import { initEpic, initEpicData } from "../lib/dataModel";

const Root = styled.main`
  padding: 16px 16px 122px;

  h2 {
    margin-bottom: 16px;
  }
`;

const MakingTip = styled(Tip)`
  margin-bottom: 24px;
`;

const EpicContainer = styled.div`
  button:last-child {
    margin-top: 32px;
  }
`;

const EpicUList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 46px;
`;

const EpicMain = styled.li`
  display: flex;
  flex-flow: column nowrap;

  button:last-child {
    margin: -40px 0 0 auto;
    order: -1;
  }
`;

const EpicTitle = styled.p`
  ${({ theme }) => theme.font.Text2_Semibold}

  margin-bottom: 14px;
  order: -1;
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

export default function MakingProjectPage() {
  const proj = useRef({
    name: "",
    data: "",
  });
  const lastEpicId = useRef(0);

  const [epics, setEpics] = useState(
    initEpic.map(epic => ({ ...epic, id: lastEpicId })),
  );

  function setProjectData(type, value) {
    if (type !== "name" || type === "date") return;
    proj.current = { ...proj, [type]: value };
  }

  function setEpicData(i, type, value) {
    if (epics.length < i + 1 || type !== "name" || type === "date") return;
    const newEpics = epics;
    newEpics[i] = {
      ...epics[i],
      [type]: value,
    };
    setEpics(newEpics);
  }

  return (
    <Root>
      <h2>
        가장 이루고 싶은
        <br />
        목표가 무엇인가요?
      </h2>
      <MakingTip contents="바디 프로필 촬영, 취업뽀개기, 시험통과(OPIC, PEET) 등" />
      <InputField
        id="프로젝트 목표 이름"
        label="프로젝트 목표"
        inputProps={{
          placeholder: "이 프로젝트의 최종 목표 입력",
          onChange: e => setProjectData("name", e.currentTarget.value),
        }}
      />
      <InputField
        id="프로젝트 목표 D-day"
        label="D-day 선택"
        inputType="date"
        inputProps={{
          placeholder: "예) 21년 12월 22일",
          onChange: e => setProjectData("date", e.currentTarget.value),
        }}
      />
      <EpicContainer>
        <EpicUList>
          {epics.map((epic, i) => (
            <EpicMain key={`${proj.current.name}-${epic.id}`}>
              <EpicTitle>{`하위 목표 ${i + 1}`}</EpicTitle>
              <InputField
                id={`하위 목표-${epic.id}-name`}
                label={`하위 목표 ${i + 1}`}
                inputProps={{
                  placeholder: "이 프로젝트의 최종 목표 입력",
                  onChange: e => setEpicData(i, "name", e.currentTarget.value),
                }}
              />
              <InputField
                id={`하위 목표-${epic.id}-D-day`}
                label="D-day 선택"
                inputType="date"
                inputProps={{
                  onChange: e => setEpicData(i, "date", e.currentTarget.value),
                }}
              />
              {i !== 0 && (
                <CloseButton
                  onClick={() =>
                    setEpics(epics.filter((_epic, epicI) => epicI !== i))
                  }
                />
              )}
            </EpicMain>
          ))}
        </EpicUList>
        <BasicButton
          onClick={() => {
            lastEpicId.current += 1;
            setEpics([...epics, { ...initEpicData, id: lastEpicId.current }]);
          }}
        >
          하위 목표 추가
        </BasicButton>
      </EpicContainer>
      <h2>나에게 한마디 남기기</h2>
      <FixedContainer>
        <ButtonWrap>
          <BasicButton>넘어가기</BasicButton>
          <BasicButton>다음</BasicButton>
        </ButtonWrap>
      </FixedContainer>
    </Root>
  );
}
