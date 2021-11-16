import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as Info } from "../../Assets/icons/Info.svg";

const ToastDiv = styled.div`
  font-family: "Pretendard Variable";
  position: fixed;
  top: 33px;
  left: 16px;
  width: 288px;
  height: 60px;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 16px;
  padding: 16px;
  box-sizing: border-box;
  & > div {
    display: flex;
    align-items: center;
    height: 28px;
  }
`;

const Content = styled.p`
  font-weight: 600;
  margin-left: 5px;
`;

const Toast = ({ content }) => {
  return (
    <ToastDiv>
      <div>
        <Info width="19.5" height="19.5" />
        <Content>{content}</Content>
      </div>
    </ToastDiv>
  );
};

Toast.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Toast;
