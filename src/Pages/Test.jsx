import React, { useRef } from 'react';
import InputField from '../Components/Elements/InputField';
import Toast from '../Components/Elements/Toast';

const Test = () => {
  const inputRef = useRef(null);
  function onChange(e) {
    console.log(e.currentTarget.value);
  }
  return (
    <>
      <h1>Test Page</h1>
      <Toast content="메세지" />
      <InputField
        id="테스트"
        title="테스트인풋"
        descripttion="설명"
        inputProps={{ placeholder: '테스트', onChange, ref: inputRef }}
      />
    </>
  );
};

export default Test;
