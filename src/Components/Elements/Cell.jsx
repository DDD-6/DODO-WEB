/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-undef */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as ArrowRight } from "../../Assets/icons/ArrowRight.svg";
import { ReactComponent as CaretDown } from "../../Assets/icons/CaretDown.svg";
import Colors from "../../Assets/Colors/Colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Pretendard Variable";
  width: 292px;
`;

const ItemBox = styled.div`
  width: 260px;
  line-height: 34px;
  display: flex;
  padding: 16px 0;
  align-items: center;
  justify-content: space-between;
  border-top: 0.5px solid #141414;

  & > * {
    :hover {
      cursor: pointer;
    }
  }

  & > p {
    color: ${Colors.grey_900};
    font-size: 20px;
    font-weight: 600;
    line-height: 34px;
  }
`;

// page 를 옮겨갈 때는 LIST 에 key value 를 추가해서
// props 로 각 페이지 연결해주는 로직 구현 예정

const Cell = ({ listData }) => {
  // * 컴포넌트 설명 *

  // renderItem : List 에 있는 값들(title, button...)을 차례로 출력하며,
  // button은 항목마다 다른 button 이 들어가므로 switch 문을 사용하여
  // 항목마다의 button 을 체크하고, 이에 맞는 button을 출력하도록 하였다.

  // 추후에 다른 페이지로 연결될 경우 항목에 link 속성을 추가하여
  // 연결시킬 예정이다.
  const renderItem = () =>
    listData.map(item => {
      switch (item.button) {
        case "arrowRight":
          return (
            <>
              <ItemBox>
                <p>{item.title}</p>
                <ArrowRight width="24" height="24" />
              </ItemBox>
            </>
          );
        case "caretDown":
          return (
            <ItemBox>
              <p>{item.title}</p>
              <CaretDown width="24" height="24" />
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

Cell.propTypes = {
  listData: PropTypes.array.isRequired,
};

export default Cell;
