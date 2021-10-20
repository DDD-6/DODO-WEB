import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ToastDiv = styled.div`
  width: 288px;
  height: 60px;
  border-radius: 16px;
  background-color: black;
  opacity: 0.8;
  color: white;
  font-size: 16px;
  margin: 0 16px;
  padding: 16px;
  box-sizing: border-box;
  & > div {
    display: flex;
    align-items: center;
    height: 28px;
  }
  & > div span + span {
    margin-left: 5px;
  }
`;

const Toast = ({ content }) => {
  return (
    <ToastDiv>
      <div>
        <span>icon</span>
        <span>{content}</span>
      </div>
    </ToastDiv>
  );
};

Toast.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Toast;
