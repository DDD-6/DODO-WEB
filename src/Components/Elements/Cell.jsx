import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowRight } from "../../Assets/icons/ArrowRight.svg";
import { ReactComponent as CaretDown } from "../../Assets/icons/CaretDown.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Pretendard Variable";
  width: 292px;
`;

const ItemBox = styled.div`
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.5px solid #141414;

  & > p {
    color: #141414;
    font-size: 20px;
    font-weight: 600;
    line-height: 34px;
  }
`;

// page 를 옮겨갈 때는 LIST 에 key value 를 추가해서
// props 로 각 페이지 연결해주는 로직 구현 예정

const TESTLIST = [
  { title: "문의하기", button: "arrowRight" },
  { title: "알림 설정", button: "switch" },
  { title: "약관 및 정책", button: "caretDown" },
];

const Cell = () => {
  // * 컴포넌트 설명 *

  // renderItem : List 에 있는 값들(title, button...)을 차례로 출력하며,
  // button은 항목마다 다른 button 이 들어가므로 switch 문을 사용하여
  // 항목마다의 button 을 체크하고, 이에 맞는 button을 출력하도록 하였다.

  // 추후에 다른 페이지로 연결될 경우 항목에 link 속성을 추가하여
  // 연결시킬 예정이다.
  const renderItem = () =>
    TESTLIST.map((item) => {
      switch (item.button) {
        case "arrowRight":
          return (
            <>
              <ItemBox>
                <p>{item.title}</p>
                <ArrowRight />
              </ItemBox>
            </>
          );
        case "caretDown":
          return (
            <ItemBox>
              <p>{item.title}</p>
              <CaretDown />
            </ItemBox>
          );
        default:
          return (
            <ItemBox>
              <p>{item.title}</p>
              <p>NONE</p>
            </ItemBox>
          );
      }
    });
  return <Container>{renderItem()}</Container>;
};

export default Cell;
