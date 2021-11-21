import styled from "styled-components";
import PropTypes from "prop-types";
import React, { useRef, useState, useEffect } from "react";
import CharicterIcon from "../../Assets/icons/Cat.svg";
import WarningIcon from "../../Assets/icons/CircleWavyWarning.svg";
import EyeIcon from "../../Assets/icons/Eye.svg";
import EyeClosedIcon from "../../Assets/icons/EyeClosed.svg";
import XCircleIcon from "../../Assets/icons/XCircle.svg";
import CalendarIcon from "../../Assets/icons/Calendar.svg";

const InputFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  border: 0;
`;

const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  line-height: 24px;
`;

const Input = styled.input`
  width: 100%;
  display: block;
  padding: 0 29px 4px 8px;
  font-size: 20px;
  line-height: 34px;
  border: 0;
  border-bottom: 2px solid
    ${({ isError }) => (!isError ? "#e2e2e2" : "#EA4335")};

  &:focus {
    outline: 0;
    border-color: #000000;
  }

  &[type="date"] {
    cursor: text;
  }

  &[type="date"]::-webkit-calendar-picker-indicator {
    background: url(${CalendarIcon});
    cursor: pointer;
  }
`;

const InputButtonWrap = styled.div`
  height: 34px;
  display: inline-flex;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 8px;

  > button {
    display: flex;
    margin: 0 5px;
  }

  > button > img {
    width: 24px;
  }
`;

const Descript = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  margin-top: 8px;
  font-size: 12px;
  line-height: 22px;

  > img {
    width: 16px;
    display: inline-block;
    margin-right: 8px;
  }
`;

const ErrorDescript = styled(Descript)``;

const InputField = ({
  id,
  label,
  descripttion,
  isError,
  inputProps,
  inputType,
}) => {
  const inputRef = useRef(null);
  const [hasValue, setHasVlaue] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { ref, onChange, ...inputPropsRest } = inputProps;

  function viewPw() {
    if (inputRef.current === null) return;
    inputRef.current.type = "text";
    setIsActive(true);
  }

  function returnInputType() {
    if (inputRef.current === null) return;
    inputRef.current.type = inputType || "text";
    setIsActive(false);
  }

  function clearInputValue() {
    if (inputRef.current === null) return;
    inputRef.current.value = "";
  }

  function onChangeInput(e) {
    if (e.currentTarget.value === "" && hasValue) setHasVlaue(false);
    else if (e.currentTarget.value !== "" && !hasValue) setHasVlaue(true);
    if (onChange) onChange(e);
  }

  useEffect(() => {
    if (!ref || inputRef.current === null) return;
    ref.current = inputRef.current;
  }, [ref]);

  return (
    <>
      <InputFieldset>
        {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
        <Input
          id={id}
          type={inputType || "text"}
          ref={inputRef}
          onChange={e => onChangeInput(e)}
          isError={isError}
          {...inputPropsRest}
        />
        {inputType === "password" && (
          <InputButtonWrap>
            {hasValue && (
              <button
                type="button"
                title="비밀번호 표기 버튼"
                onMouseDown={viewPw}
                onMouseUp={returnInputType}
              >
                <img
                  src={!isActive ? EyeIcon : EyeClosedIcon}
                  alt={!isActive ? "눈 아이콘" : "감은눈 아이콘"}
                />
              </button>
            )}
            <button
              type="button"
              title="데이터 클리어 버튼"
              onClick={clearInputValue}
            >
              <img src={XCircleIcon} alt="X 아이콘" />
            </button>
          </InputButtonWrap>
        )}
      </InputFieldset>
      {descripttion &&
        (!isError ? (
          <Descript>
            <img src={CharicterIcon} alt="캐릭터 아이콘" />
            {descripttion}
          </Descript>
        ) : (
          <ErrorDescript>
            <img src={WarningIcon} alt="에러 아이콘" />
            {descripttion}
          </ErrorDescript>
        ))}
    </>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  descripttion: PropTypes.string,
  isError: PropTypes.bool,
  inputProps: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  inputType: PropTypes.string,
};

InputField.defaultProps = {
  label: "",
  descripttion: "",
  isError: false,
  inputProps: {},
  inputType: "text",
};

export default InputField;

const TextFieldWrap = styled.div`
  padding: 16px 8px 16px 16px;
  border-radius: 16px;
  background: ${({ theme }) => theme.color.grey_50};
  cursor: pointer;
`;

const TextField = styled.textarea`
  ${({ theme }) => theme.font.Text1_Regular}

  width: 100%;
  height: 153px;
  padding-right: 5px;
  overflow-y: auto;
  background: ${({ theme }) => theme.color.grey_50};
  resize: none;

  &:focus {
    outline: 0;
  }
`;

export const MemoField = ({
  id,
  label,
  descripttion,
  isError,
  textareaProps,
}) => {
  const { onKeyUp, ...restTextareaProps } = textareaProps;
  function clickTextFieldWrap(e) {
    const $textarea = e.currentTarget.getElementsByTagName("textarea")[0];
    if (!$textarea) {
      console.error("필드를 찾을 수 없습니다.");
      return;
    }
    $textarea.focus();
  }

  function keyupTextara(e) {
    if (onKeyUp) onKeyUp(e);
  }
  return (
    <>
      <fieldset>
        {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
        <TextFieldWrap onClick={e => clickTextFieldWrap(e)}>
          <TextField
            id={id}
            onKeyUp={e => keyupTextara(e)}
            {...restTextareaProps}
          />
        </TextFieldWrap>
      </fieldset>
      {descripttion &&
        (!isError ? (
          <Descript>
            <img src={CharicterIcon} alt="캐릭터 아이콘" />
            {descripttion}
          </Descript>
        ) : (
          <ErrorDescript>
            <img src={WarningIcon} alt="에러 아이콘" />
            {descripttion}
          </ErrorDescript>
        ))}
    </>
  );
};

MemoField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  descripttion: PropTypes.string,
  isError: PropTypes.bool,
  textareaProps: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
};

MemoField.defaultProps = {
  label: "",
  descripttion: "",
  isError: false,
  textareaProps: {},
};
