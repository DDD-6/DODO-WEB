import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DimDiv = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 740px;
  background-color: #000000;
  opacity: 80%;
`;

const Dim = ({ visible, closeModal }) => {
  return <DimDiv visible={visible} onClick={closeModal} />;
};

Dim.propTypes = {
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Dim;
