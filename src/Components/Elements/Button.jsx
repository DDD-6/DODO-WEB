import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CloseIcon from "../../Assets/icons/X.svg";

const Root = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 0;
  cursor: pointer;
`;

const Button = ({ ...rest }) => <Root type="button" {...rest} />;

export default Button;

const CloseRoot = styled(Root)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f6f6f6;
`;

const CloseIconImg = styled.img`
  display: block;
  width: 24px;
  height: 24px;
`;

export const CloseButton = ({ children, ...rest }) => (
  <CloseRoot type="button" {...rest}>
    {children || <CloseIconImg src={CloseIcon} alt="닫기" />}
  </CloseRoot>
);

CloseButton.propTypes = {
  children: PropTypes.element,
};

CloseButton.defaultProps = {
  children: undefined,
};

const BasicRoot = styled(Root)`
  width: ${({ size }) => (size ? `${size}px` : "100%")};
  height: 58px;
  font-size: 20px;
  font-weight: 600;
  color: #141414;
  border-radius: 99px;
  background-color: #f6f6f6;

  &:disabled {
    color: #afafaf;
    background-color: #e2e2e2;
  }
`;

export const BasicButton = ({ size, ...rest }) => (
  <BasicRoot tpye="button" size={size} {...rest} />
);

BasicButton.propTypes = {
  size: PropTypes.oneOf([undefined, "120", "140"]),
};

BasicButton.defaultProps = {
  size: undefined,
};

const PrimaryRoot = styled(BasicRoot)`
  color: #ffffff;
  background-color: #000000;
`;

export const PrimaryButton = ({ size, ...rest }) => (
  <PrimaryRoot tpye="button" size={size} {...rest} />
);

PrimaryButton.propTypes = {
  size: PropTypes.oneOf([undefined, "120", "140"]),
};

PrimaryButton.defaultProps = {
  size: undefined,
};
