/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as Normal } from "../../Assets/icons/ListIconNormal.svg";
import { ReactComponent as Checked } from "../../Assets/icons/ListIconChecked.svg";
import { ReactComponent as Plus } from "../../Assets/icons/PlusCircle.svg";
import Colors from "../../Assets/Colors/Colors";

const TaskCardDiv = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  flex-direction: column;
  width: 288px;
  min-height: 176px;
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.pink};
  box-sizing: border-box;
  margin: 15px 0;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  width: 180px;
  padding: 0;
  margin: 0;
  line-height: 34px;
  color: ${Colors.black_opacity_80};
`;

const TitleDiv = styled.div`
  margin-bottom: 20px;
`;

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItemDiv = styled.div`
  display: flex;
  flex-direction: column;

  // todo title
  & > div p:nth-child(1) {
    font-size: 20px;
    font-weight: 400;
    width: 180px;
    color: ${Colors.black_opacity_80};
    // 중심이 맞게
    line-height: 25px;
  }
  // todo importance
  & > div p:nth-child(2) {
    font-size: 16px;
    line-height: 28px;
    color: ${Colors.black_opacity_40};
  }
`;

const Item = styled.div`
  display: flex;
  margin-bottom: 18px;
  & > div:nth-child(2) {
    margin-left: 12px;

    p:nth-child(1) {
      color: ${({ isChecked, theme }) =>
        theme.color[isChecked ? "black_opacity_40" : "black"]};
      text-decoration: ${({ isChecked }) =>
        isChecked ? "line-through" : "none"};
    }
    p:nth-child(2) {
      display: ${({ isChecked }) => (isChecked ? "none" : "block")};
    }
  }
`;

const CheckDiv = styled.div``;

const InfoDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* width: 172px; */
  height: 64px;

  button {
    background-color: rgba(0, 0, 0, 0);
    font-family: inherit;
    font-size: 14px;
  }
`;

const InfoText = styled.p`
  margin: 0;
  padding: 0;
  height: 24px;
  font-size: 14px;
  opacity: 0.4;
  line-height: 24px;
`;

const ToDayCard = ({ todayData }) => {
  const [todoCheckData, setTodoCheckData] = useState(
    todayData.todos ? todayData.todos.map(todo => todo.isChecked) : [],
  );
  const toggleCheck = todoIndex => {
    // !api: 체크 함수
    const res = true;
    if (res) {
      console.log("변경됨");
      // 1.번째 해당 todo아이템의 id 가 todoId 찾아서 그 인덱스 값을 가져오기
      setTodoCheckData(
        todoCheckData.map((checkedValue, i) =>
          i === todoIndex ? !checkedValue : checkedValue,
        ),
      );
    } else {
      console.error("에러남");
    }
  };
  const colorList = [
    Colors.lavender,
    Colors.pink,
    Colors.skyblue,
    Colors.yellow,
  ];
  return (
    <TaskCardDiv color={colorList[todayData.id % 4]}>
      <ListDiv>
        <TitleDiv>
          <Title>오늘 할 일</Title>
        </TitleDiv>
        {todayData.todos.length > 0 ? (
          <ListItemDiv>
            {/* 체크 UI */}
            {todayData.todos.map((task, i) => (
              <Item isChecked={todoCheckData[i]}>
                <CheckDiv>
                  {task.isChecked ? (
                    <Checked onClick={() => toggleCheck(task.isChecked)} />
                  ) : (
                    <Normal onClick={() => toggleCheck(task.isChecked)} />
                  )}
                </CheckDiv>
                <div>
                  <p key={task.id}>{task.content}</p>
                  <p>{task.rank}</p>
                </div>
              </Item>
            ))}
          </ListItemDiv>
        ) : (
          <InfoDiv>
            <button type="button">
              <Plus />
              <InfoText>할 일을 등록하고 관리해보세요.</InfoText>
            </button>
          </InfoDiv>
        )}
      </ListDiv>
    </TaskCardDiv>
  );
};

ToDayCard.propTypes = {
  todayData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any]))
    .isRequired,
};

export default ToDayCard;
