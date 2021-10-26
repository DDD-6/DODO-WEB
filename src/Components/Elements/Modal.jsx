import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as Xbtn } from "../../Assets/icons/Xbtn.svg";
import Dim from "./Dim";

const ModalDiv = styled.div`
  font-family: "Pretendard Variable";
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 253px;
  left: 16px;
  z-index: 1;
  box-sizing: border-box;
  width: 288px;
  height: 234px;
  padding: 16px;
  border-radius: 16px;
  background-color: #ffffff;
  & > div {
    height: 112px;
  }
`;

const ModalTitleDiv = styled.div`
  font-weight: 600;
  display: flex;
  width: 256px;
  height: 50px;
  justify-content: space-between;
  & > p {
    padding: 0;
    margin: 0;
    font-size: 20px;
    line-height: 34px;
  }
`;

const ModalInfoDiv = styled.div`
  width: 256px;
  font-size: 16px;
  line-height: 24px;
`;

// props로 제목, 설명, visible(모달창 속성), closeModal(모달을 닫는 func) 을 받습니다.
const Modal = ({ title, description, visible, closeModal }) => {
  // ----- btn 에 들어갈 function -----
  // const [visible, setVisible] = useState(false);
  // const toggleModal = () => {
  //   setVisible(true);
  // };

  // const closeModal = () => {
  //   setVisible(false);
  // };

  // ----- modal button component -----
  // <button type="button" onClick={toggleModal}>
  //       모달창 띄우기
  //     </button>
  //     <Modal
  //       title="로그아웃"
  //       description="확인을 누르면 로그아웃 됩니다. 다음에 다시 만나요."
  //       visible={visible}
  //       closeModal={closeModal}
  //     />
  return (
    <>
      <Dim visible={visible} onClick={closeModal} closeModal={closeModal} />
      <ModalDiv visible={visible}>
        <div>
          <ModalTitleDiv>
            <p>{title}</p>
            <Xbtn onClick={closeModal} />
          </ModalTitleDiv>
          <ModalInfoDiv>
            <p>{description}</p>
          </ModalInfoDiv>
        </div>
      </ModalDiv>
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
