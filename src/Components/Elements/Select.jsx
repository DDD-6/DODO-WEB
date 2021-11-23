/* eslint-disable react/forbid-prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CaretDownBlue from "../../Assets/icons/CaretDownBlue.svg";

const SelectLabel = styled.label`
  font-size: 14px;
  line-height: 24px;
  display: block;
`;

const SelectMenu = styled.select`
  width: ${({ width }) => width};
  height: 34px;
  font-family: inherit;
  font-weight: 600;
  font-size: 20px;
  outline: none;
  border: none;
  border-bottom: 2px solid
    ${({ borderColor, theme }) =>
      borderColor ? theme.color.black : theme.color.grey_200};
  appearance: none;
  background: url(${CaretDownBlue}) no-repeat right 50%;
  padding: 0 8px;
  ::-ms-expend {
    display: none;
  }
  option {
    border: none;
    padding: 8px 10px;
  }
`;

const Select = ({ selectId, labelName, options, width }) => {
  const [Focus, setFocus] = useState(false);
  const focusColor = () => {
    setFocus(true);
  };
  const unFocusColor = () => {
    setFocus(false);
  };
  return (
    <>
      <SelectLabel htmlFor={selectId}>{labelName}</SelectLabel>
      <SelectMenu
        id={selectId}
        onFocus={focusColor}
        onBlur={unFocusColor}
        borderColor={Focus}
        width={width}
      >
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </SelectMenu>
    </>
  );
};

Select.propTypes = {
  selectId: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  width: PropTypes.string,
};

Select.defaultProps = {
  width: "136px",
};

export default Select;
