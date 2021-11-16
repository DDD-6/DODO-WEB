import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SwitchButton = styled.button`
  width: 51px;
  height: 31px;
  display: inline-flex;
  align-items: center;
  padding: 0 2px;
  background: #e2e2e2;
  border: 0;
  border-radius: 100px;

  &.active {
    background: #4285f4;
  }
`;

const SwitchControl = styled.div`
  width: 27px;
  height: 27px;
  background: #ffffff;
  box-shadow: 0px 3px 1px 0px #0000000f;
  border-radius: 100px;
  transition: margin 0.5s;

  button.active > & {
    margin-left: 20px;
  }
`;

function Switch({ onActive, onUnActive }) {
  function onToggle(e) {
    const isActive = e.currentTarget.classList.contains("active");
    if (isActive && onUnActive) onUnActive();
    else if (!isActive && onActive) onActive();
    e.currentTarget.classList.toggle("active");
  }

  return (
    <SwitchButton type="button" onClick={e => onToggle(e)}>
      <SwitchControl />
    </SwitchButton>
  );
}

Switch.propTypes = {
  onActive: PropTypes.oneOf([PropTypes.func, undefined]),
  onUnActive: PropTypes.oneOf([PropTypes.func, undefined]),
};

Switch.defaultProps = {
  onActive: undefined,
  onUnActive: undefined,
};

export default Switch;
