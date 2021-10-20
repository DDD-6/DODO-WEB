import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TooltipDiv = styled.div`
  // 텍스트 가운데에 위치
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${props => props.width};
  min-width: 100px;
  min-height: 40px;
  height: ${props => props.height};
  left: 16px;
  background-color: black;
  color: white;
  opacity: 0.8;
  border-radius: 8px;
  // 패딩 조정 필요
  /* padding: 12px 16px 8px; */
  box-sizing: border-box;
  font-size: 16px;
  text-align: center;

  &::after {
    position: absolute;
    content: '';
    top: -8px;
    left: 15px;
    border-top: 0;
    border-left: 8px solid transparent;
    border-bottom: 8px solid black;
    border-right: 8px solid transparent;
  }
`;

// 툴팁 너비, 높이, 내용을 props 로 전달 받습니다.
const Tooltip = ({ height, width, content }) => {
  return (
    <TooltipDiv height={height} width={width}>
      {content}
    </TooltipDiv>
  );
};

Tooltip.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Tooltip.defaultProps = {
  height: '80px',
  width: '172px',
};

export default Tooltip;
