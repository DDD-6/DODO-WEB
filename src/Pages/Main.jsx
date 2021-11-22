/* eslint-disable no-undef */
import React, { useState } from "react";
import styled from "styled-components";
import TaskCard from "../Components/Elements/TaskCard";
import TodayCard from "../Components/Elements/ToDayCard";

const Root = styled.main``;

const Greeting = styled.h2`
  margin: 30px 0;
`;

const SelectTask = styled.select`
  width: 107px;
  font-family: inherit;
  font-weight: 600;
  font-size: 20px;
  outline: none;
  border: none;
  appearance: none;
  background: url(../Assets/icons/CaretDown.svg) no-repeat right 50%;
  ::-ms-expend {
    display: none;
  }
`;

const DatePick = styled.input`
  width: 128px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  display: block;
  border: none;
  margin: 12px 0;
`;

const TodayTodo = styled.div`
  display: ${({ visible }) => (visible ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.grass};
  border-radius: 16px;
  padding: 16px;
  margin: 15px 0;
  width: 288px;
  height: 80px;
  line-height: 24px;
`;

const taskData = [
  {
    id: 1,
    title: "문제풀이",
    dDay: 4,
    todos: [
      {
        id: 1,
        content: "백준문제 풀기",
        rank: "매우중요",
        isChecked: false,
      },
      {
        id: 2,
        content: "프로그래머스문제 풀기",
        rank: "보통",
        isChecked: true,
      },
      {
        id: 3,
        content: "토익문제 풀기",
        rank: "매우중요",
        isChecked: true,
      },
    ],
  },
  {
    id: 2,
    title: "수능 준비하기",
    dDay: 4,
    todos: [
      {
        id: 1,
        content: "사탐 1시간",
        rank: "매우중요",
        isChecked: false,
      },
      {
        id: 2,
        content: "화작 2시간",
        rank: "보통",
        isChecked: true,
      },
    ],
  },
];

const TODAY_DATA = {
  todos: [
    {
      id: 2,
      content: "할 일2",
      rank: "보통",
      isChecked: true,
    },
    {
      id: 3,
      content: "할 일3",
      rank: "매우중요",
      isChecked: false,
    },
  ],
};

const USER_NAME = {
  name: "민수",
};

export default function MakingProjectPage() {
  const [Visible, setVisible] = useState(false);
  const [selectedTask, setselectedTask] = useState(taskData[0]);
  const createToday = () => {
    // 오늘의 할 일 생성 api 연결
    console.log("createToday func");
    setVisible(true);
  };
  const selectTask = e => {
    const selectedTaskData = taskData.find(
      task => task.id === Number(e.target.value),
    );
    setselectedTask(selectedTaskData);
  };
  return (
    <Root>
      <Greeting>
        {USER_NAME.name}님<br />
        오늘도 화이팅!
      </Greeting>
      <SelectTask onChange={selectTask}>
        {taskData.map(task => (
          <option value={task.id} key={task.id}>
            {task.title}
          </option>
        ))}
      </SelectTask>
      <DatePick type="date" />
      <TaskCard taskData={selectedTask} />
      {TODAY_DATA.todos ? (
        <TodayCard todayData={TODAY_DATA} />
      ) : (
        <button type="button" onClick={createToday}>
          <TodayTodo visible={Visible}>
            프로젝트와 상관없이 오늘의 <br />
            할일을 기록하고 싶다면?
          </TodayTodo>
        </button>
      )}
    </Root>
  );
}
