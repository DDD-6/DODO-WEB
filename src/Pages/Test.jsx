import React from 'react';
import InputField from '../Components/Elements/InputField';
import Toast from '../Components/Elements/Toast';

const Test = () => {
  function onChange(e) {
    console.log(e.currentTarget.value);
  }
  return (
    <>
      <h1>Test Page</h1>
      <Toast content="메세지" />
      <br />
      <InputField
        id="테스트"
        label="테스트인풋"
        descripttion="설명"
        inputProps={{ placeholder: '테스트', onChange }}
        inputType="text"
      />
      <br />
      <InputField
        id="date"
        label="생년월일"
        inputProps={{ onChange }}
        inputType="date"
      />
    </>
  );
};

export default Test;
