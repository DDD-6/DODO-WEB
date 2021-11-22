import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as Info } from "../../Assets/icons/Info.svg";

const Container = styled.div`
  display: flex;
  width: 288px;
  background-color: #e2ec63;
  border-radius: 16px;
  padding: 16px;
  font-family: "Pretendard Variable";
  box-sizing: border-box;
`;

const Contents = styled.div`
  width: 224px;
  margin-left: 10px;
  & p {
    margin: 0;
    line-height: 24px;
    font-size: 14px;
  }
  & p:first-child {
    font-weight: 600;
    opacity: 0.8;
  }
  & p:last-child {
    font-weight: 400;
    opacity: 0.6;
  }
`;

// tip 의 내용을 props로 전달 받습니다.
const Tip = ({ contents, ...rest }) => {
  return (
    <Container {...rest}>
      <Info width="24" height="24" />
      <Contents>
        <p>TIP</p>
        <p>{contents}</p>
      </Contents>
    </Container>
  );
};

Tip.propTypes = {
  contents: PropTypes.string.isRequired,
};

export default Tip;
