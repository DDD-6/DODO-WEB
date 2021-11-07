import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.div`
  height: 8px;
  background: #eeeeee;
  border-radius: 100px;
`;

const Progess = styled(Root)`
  width: ${({ percent }) => `${percent || 0}%`};
  background: #ffe76b;
`;

Progess.propTypes = {
  percent: PropTypes.number,
};

function ProgressBar({ percent }) {
  return (
    <Root>
      <Progess percent={percent || 0} />
    </Root>
  );
}

ProgressBar.propTypes = {
  percent: PropTypes.number,
};

ProgressBar.defaultProps = {
  percent: 0,
};

export default ProgressBar;
