import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as RectangleIcon } from "../../Assets/icons/Rectangle.svg";
import { ReactComponent as Normal } from "../../Assets/icons/ListIconNormal.svg";
import { ReactComponent as Checked } from "../../Assets/icons/ListIconChecked.svg";
import { ReactComponent as DotThreeVertical } from "../../Assets/icons/DotsThreeVertical.svg";
import { ReactComponent as Plus } from "../../Assets/icons/PlusCircle.svg";

const TaskCardDiv = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  flex-direction: column;
  width: 288px;
  min-height: 176px;
  padding: 16px;
  margin: 0 10px;
  border-radius: 16px;
  background-color: ${(props) => props.backgroundColor};
  box-sizing: border-box;
`;

const Title = styled.p`
  font-size: 20px;
  width: 180px;
  padding: 0;
  margin: 0;
  margin-left: 10px;
  line-height: 34px;
  opacity: 80%;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 32px;
`;

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItemDiv = styled.div`
  display: flex;
  padding-bottom: 16px;
  width: 256px;
  height: 62px;
  & p {
    padding: 0;
    margin: 0;
  }
  & > div {
    width: 220px;
    margin-left: 12px;
  }
  // todo title
  & > div p:nth-child(1) {
    font-size: 20px;
    font-weight: 400;
    opacity: 80%;
    // 중심이 맞게
    line-height: 25px;
  }
  // todo importance
  & > div p:nth-child(2) {
    font-size: 16px;
    line-height: 28px;
    opacity: 40%;
  }
`;

const InfoDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* width: 172px; */
  height: 64px;
`;

const InfoText = styled.p`
  margin: 0;
  padding: 0;
  height: 24px;
  font-size: 14px;
  opacity: 0.4;
  line-height: 24px;
`;

// TEST DATA
const TESTDATA = [
  {
    id: 1,
    content: "밥 먹기",
    rank: "아주 중요",
    isChecked: false,
  },
  {
    id: 2,
    content: "토익 풀기",
    rank: "보통",
    isChecked: true,
  },
  {
    id: 3,
    content: "강의 듣기",
    rank: "아주 중요",
    isChecked: false,
  },
];

const TaskCard = ({ backgroundColor }) => {
  return (
    <TaskCardDiv backgroundColor={backgroundColor}>
      <TitleDiv>
        <RectangleIcon />
        <Title>문제풀이</Title>
        <div>D-24</div>
      </TitleDiv>
      <ListDiv>
        {TESTDATA.length === 0 ? (
          <>
            <InfoDiv>
              <Plus />
              <InfoText>할 일을 등록하고 관리해보세요.</InfoText>
            </InfoDiv>
          </>
        ) : (
          <>
            {TESTDATA.map((data) => (
              <ListItemDiv>
                {/* 체크 UI */}
                {data.isChecked ? <Checked /> : <Normal />}
                <div>
                  <p key={data.id}>{data.content}</p>
                  <p>{data.rank}</p>
                </div>
                <DotThreeVertical />
              </ListItemDiv>
            ))}
          </>
        )}
      </ListDiv>
    </TaskCardDiv>
  );
};

TaskCard.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default TaskCard;
