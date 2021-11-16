import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HouseDefaultIcon from '../../Assets/icons/HouseDefault.svg';
import HouseSelectIcon from '../../Assets/icons/HouseSelect.svg';
import FolderDefaultIcon from '../../Assets/icons/FolderDefault.svg';
import FolderSelectIcon from '../../Assets/icons/FolderSelect.svg';
import FolderSimplePlusIcon from '../../Assets/icons/FolderSimplePlus.svg';
import UserCircleDefaultIcon from '../../Assets/icons/UserCircleDefault.svg';
import UserCircleSelectIcon from '../../Assets/icons/UserCircleSelect.svg';
import PlusIcon from '../../Assets/icons/Plus.svg';

const Root = styled.div`
  display: inline-flex;
  gap: 32px;
  padding: 20px 24px;
  background: rgba(246, 246, 246, 0.88);
  border: 1px solid #0000000d;
  backdrop-filter: blur(4px);
  border-radius: 100px;
`;

const NavButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  > img {
    width: 100%;
  }
`;

const NavBar = ({ ...rest }) => {
  const page = '/';
  const [active, setActive] = useState(0);

  function goHome() {
    // !fn 홈으로 가기
    if (active !== 0) setActive(0);
  }

  function goProject() {
    // !fn 프로젝트 페이지로 가기
    if (active !== 1) setActive(1);
  }

  function goProfile() {
    // !fn 프로필 페이지로 가기
    if (active !== 2) setActive(2);
  }

  useEffect(() => {
    switch (page) {
      case '/project':
        setActive(1);
        break;
      default:
        setActive(0);
    }
  }, [page]);

  return (
    <Root {...rest}>
      <NavButton type="button" title="홈으로" onClick={() => goHome()}>
        {active === 0 ? (
          <img src={HouseSelectIcon} alt="홈버튼 -활성화-" />
        ) : (
          <img src={HouseDefaultIcon} alt="홈버튼" />
        )}
      </NavButton>
      <NavButton
        type="button"
        title="프로젝트 페이지로"
        onClick={() => goProject()}
      >
        {active === 1 ? (
          <img src={FolderSelectIcon} alt="프로젝트 페이지 버튼 -활성화-" />
        ) : (
          <img src={FolderDefaultIcon} alt="프로젝트 페이지 버튼" />
        )}
      </NavButton>
      <NavButton
        type="button"
        title="프로필 페이지로"
        onClick={() => goProfile()}
      >
        {active === 2 ? (
          <img src={UserCircleSelectIcon} alt="프로필 페이지 버튼 -활성화-" />
        ) : (
          <img src={UserCircleDefaultIcon} alt="프로필 페이지 버튼" />
        )}
      </NavButton>
    </Root>
  );
};

export default NavBar;

const FABRoot = styled.button`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 100px;
`;

export const FAB = ({ children, ...rest }) => {
  return (
    <FABRoot tpye="button" {...rest}>
      {children}
    </FABRoot>
  );
};

FAB.propTypes = {
  children: PropTypes.element,
};

FAB.defaultProps = {
  children: undefined,
};

export const AddTodoFAB = ({ ...rest }) => {
  return (
    <FAB {...rest}>
      <img src={PlusIcon} alt="할일 추가 버튼" />
    </FAB>
  );
};

export const AddProjectFAB = ({ ...rest }) => {
  return (
    <FAB {...rest}>
      <img src={FolderSimplePlusIcon} alt="프로젝트 추가 버튼" />
    </FAB>
  );
};
