import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CheckedIcon from "../../Assets/icons/Checked.svg";

const CheckBoxButton = styled.button`
  width: 24px;
  height: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px 0 4.5px;
  background: #ffffffcc;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 100px;

  &.active {
    background: #000000cc;
  }

  > img {
    width: 100%;
  }
`;

function CheckBox({ onActive, onUnActive }) {
  const [active, setActive] = useState(false);

  function onToggle(e) {
    const isActive = e.currentTarget.classList.contains("active");
    if (isActive && onUnActive) onUnActive();
    else if (!isActive && onActive) onActive();
    setActive(!isActive);
    e.currentTarget.classList.toggle("active");
  }

  return (
    <CheckBoxButton type="button" onClick={e => onToggle(e)}>
      {active && <img src={CheckedIcon} alt="체크됨" />}
    </CheckBoxButton>
  );
}

CheckBox.propTypes = {
  onActive: PropTypes.oneOf([PropTypes.func, undefined]),
  onUnActive: PropTypes.oneOf([PropTypes.func, undefined]),
};

CheckBox.defaultProps = {
  onActive: undefined,
  onUnActive: undefined,
};

export default CheckBox;
