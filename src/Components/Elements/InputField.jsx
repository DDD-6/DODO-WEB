import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const InputFieldset = styled.fieldset`
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
  border-bottom: 2px solid #e2e2e2;

  &:focus {
    outline: 0;
    border-color: #000000;
  }
`;

const InputDescript = styled.p`
  margin: 0;
  margin-top: 8px;
  font-size: 12px;
  line-height: 22px;
`;

const InputError = styled(InputDescript)``;

const InputField = ({ id, title, descripttion, isError, inputProps }) => {
  return (
    <InputFieldset>
      <InputLabel htmlFor={id}>{title}</InputLabel>
      <Input type="text" id={id} {...inputProps} />
      {descripttion &&
        (!isError ? (
          <InputDescript>{descripttion}</InputDescript>
        ) : (
          <InputError>{descripttion}</InputError>
        ))}
    </InputFieldset>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descripttion: PropTypes.string,
  isError: PropTypes.bool,
  inputProps: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
};

InputField.defaultProps = {
  descripttion: '',
  isError: false,
  inputProps: {},
};

export default InputField;
