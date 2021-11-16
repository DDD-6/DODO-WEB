/* eslint-disable react/forbid-prop-types */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as RectangleIcon } from "../../Assets/icons/Rectangle.svg";
import { ReactComponent as Normal } from "../../Assets/icons/ListIconNormal.svg";
import { ReactComponent as Checked } from "../../Assets/icons/ListIconChecked.svg";
import { ReactComponent as DotThreeVertical } from "../../Assets/icons/DotsThreeVertical.svg";
import { ReactComponent as Plus } from "../../Assets/icons/PlusCircle.svg";
import Colors from "../../Assets/Colors/Colors";

const TaskCardDiv = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  flex-direction: column;
  width: 288px;
  min-height: 176px;
  padding: 16px;
  margin: 0 10px;
  border-radius: 16px;
  background-color: ${Colors.lavender};
  background-color: ${props => props.color};
  box-sizing: border-box;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  width: 180px;
  padding: 0;
  margin: 0;
  margin-left: 10px;
  line-height: 34px;
  color: ${Colors.black_opacity_80};
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 32px;
  // d-day
  & > p:nth-child(3) {
    font-size: 14px;
    line-height: 24px;
  }
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
  margin-bottom: 20px;
  & > div:nth-child(2) {
    margin-left: 12px;

    p:nth-child(1) {
      color: ${props => (props.line ? Colors.black_opacity_40 : Colors.black)};
      text-decoration: ${props => (props.line ? "line-through" : "none")};
    }
    p:nth-child(2) {
      display: ${props => (props.line ? "none" : "block")};
    }
  }
  // 점 세 개 버튼
  & > svg {
    cursor: pointer;
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

  svg {
    :hover {
      cursor: pointer;
    }
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

const TaskCard = ({ listData }) => {
  const colorList = [
    Colors.lavender,
    Colors.pink,
    Colors.skyblue,
    Colors.yellow,
  ];
  const randomIndex = Math.floor(Math.random() * 3);
  return (
    <>
      {listData.map(data =>
        data.todos.length === 0 ? (
          <TaskCardDiv color={colorList[randomIndex]}>
            <ListDiv>
              <TitleDiv>
                <RectangleIcon />
                <Title>{data.title}</Title>
                <p>D-{data.Dday}</p>
              </TitleDiv>
              <InfoDiv>
                <Plus />
                <InfoText>할 일을 등록하고 관리해보세요.</InfoText>
              </InfoDiv>
            </ListDiv>
          </TaskCardDiv>
        ) : (
          <TaskCardDiv color={colorList[randomIndex]}>
            <ListDiv>
              <TitleDiv>
                <RectangleIcon />
                <Title>{data.title}</Title>
                <p>D-{data.Dday}</p>
              </TitleDiv>
              <ListItemDiv>
                {/* 체크 UI */}
                {data.todos.map(list => (
                  <Item line={list.isChecked}>
                    <CheckDiv>
                      {list.isChecked ? <Checked /> : <Normal />}
                    </CheckDiv>
                    <div>
                      <p key={list.id}>{list.content}</p>
                      <p>{list.rank}</p>
                    </div>
                    <DotThreeVertical />
                  </Item>
                ))}
              </ListItemDiv>
            </ListDiv>
          </TaskCardDiv>
        ),
      )}
    </>
  );
};

TaskCard.propTypes = {
  // backgroundColor: PropTypes.string.isRequired,
  listData: PropTypes.array.isRequired,
};

export default TaskCard;
