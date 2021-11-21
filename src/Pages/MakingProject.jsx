import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { BasicButton, CloseButton } from "../Components/Elements/Button";
import InputField, { MemoField } from "../Components/Elements/InputField";
import Tip from "../Components/Elements/Tip";
import { initEpic } from "../lib/dataModel";

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

const MemoTitle = styled.p`
  ${({ theme }) => theme.font.Text2_Regular}
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
  const history = useHistory();
  const location = useLocation();
  const proj = useRef({ name: "", dueDate: "" });
  const epicLastNum = useRef(0);
  const epicsDate = useRef(initEpic);
  const [epicIds, setEpicIds] = useState([epicLastNum]);
  const memo = useRef("");

  function setProjectData(key, value) {
    proj.current = { ...proj, [key]: value };
  }

  function setEpicData(i, key, value) {
    epicsDate.current = epicsDate.current.map((epic, ei) =>
      ei === i ? { ...epic, [key]: value } : epic,
    );
  }

  function addEpic() {
    epicLastNum.current += 1;
    setEpicIds([...epicIds, epicLastNum.current]);
  }

  function removeEpic(target) {
    epicsDate.current = epicsDate.current.filter(epic => epic.id !== target);
    setEpicIds(epicIds.filter(epicId => epicId !== target));
  }

  function clickNext() {
    switch (location.pathname) {
      case "/make-project/2":
        window.alert(proj.current, epicsDate.current);
        break;
      case "/make-project/1":
        history.push("/make-project/2");
        break;
      default:
        history.push("/make-project/1");
    }
  }

  return (
    <Root>
      <Switch>
        <Route
          exact
          path="/make-project"
          component={() => (
            <>
              <h2>가장 이루고 싶은 목표가 무엇인가요?</h2>
              <MakingTip
                contents={
                  <>
                    바디 프로필 촬영, 취업뽀개기,
                    <br />
                    시험통과(OPIC, PEET) 등
                  </>
                }
              />
              <InputField
                id="프로젝트 목표"
                label="프로젝트 목표"
                inputProps={{
                  placeholder: "이 프로젝트의 최종 목표 입력",
                  onChange: e => setProjectData("name", e.currentTarget.value),
                }}
              />
              <InputField
                id="프로젝트 D-day"
                label="D-day 선택"
                inputType="date"
                inputProps={{
                  placeholder: "예) 21-12-22",
                  onChange: e =>
                    setProjectData("dueDate", e.currentTarget.value),
                }}
              />
            </>
          )}
        />
        <Route
          path="/make-project/1"
          component={() => (
            <EpicContainer>
              <h2>가장 이루고 싶은 목표가 무엇인가요?</h2>
              <MakingTip
                contents={
                  <>
                    구체적인 목표를 잡을 수록 동기부여가
                    <br />
                    잘되요. 예)체지방 n%감량, 특정과목
                    <br />
                    80점 맞기
                  </>
                }
              />
              <EpicUList>
                {epicIds.map((epicId, i) => (
                  <EpicMain key={`${proj.current.name}-${epicId}`}>
                    <EpicTitle>{`하위 목표 ${i + 1}`}</EpicTitle>
                    <InputField
                      id={`하위 목표-${epicId}-name`}
                      label={`하위 목표 ${i + 1}`}
                      inputProps={{
                        defaultValue: epicsDate.current[i].name,
                        placeholder: "이 프로젝트의 최종 목표 입력",
                        onChange: e =>
                          setEpicData(i, "name", e.currentTarget.value),
                      }}
                    />
                    <InputField
                      id={`하위 목표-${epicId}-D-day`}
                      label="D-day 선택"
                      inputType="date"
                      inputProps={{
                        defaultValue: epicsDate.current[i].dueDate,
                        onChange: e =>
                          setEpicData(i, "date", e.currentTarget.value),
                      }}
                    />
                    {i !== 0 && (
                      <CloseButton onClick={() => removeEpic(epicId)} />
                    )}
                  </EpicMain>
                ))}
              </EpicUList>
              <BasicButton onClick={() => addEpic()}>
                하위 목표 추가
              </BasicButton>
            </EpicContainer>
          )}
        />
        <Route
          path="/make-project/2"
          component={() => (
            <>
              <h2>나에게 한마디 남기기</h2>
              <MemoTitle>
                {proj.current.dueDate}의 <br />
                나에게,
              </MemoTitle>
              <MemoField
                id="프로젝트-memo"
                textareaProps={{
                  placeholder: "한마디를 남겨보세요.",
                  onChange: e => {
                    memo.current = e.currentTarget.value;
                  },
                }}
              />
            </>
          )}
        />
      </Switch>
      <FixedContainer>
        <ButtonWrap>
          <BasicButton onClick={() => clickNext()}>다음</BasicButton>
        </ButtonWrap>
      </FixedContainer>
    </Root>
  );
}
