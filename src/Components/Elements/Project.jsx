import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { ReactComponent as ProjectIcon } from "../../Assets/icons/Polygon1.svg";
import { ReactComponent as TodayIcon } from "../../Assets/icons/Polygon2.svg";

const Root = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  flex-grow: 1;

  p.title {
    ${({ theme }) => theme.font.Text2_Semibold}
    display: flex;
  }
`;

const DueDate = styled.span`
  ${({ theme }) => theme.font.Text3_Regular}
  margin-left: auto;
  color: ${({ theme }) => theme.color.grey_400};
`;

const Project = ({ title, dueDate, percent }) => (
  <Root>
    <ProjectIcon />
    <Info>
      <p className="title">
        {title}
        <DueDate>D-{dueDate}</DueDate>
      </p>
      <ProgressBar percent={percent} />
    </Info>
  </Root>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.number,
  percent: PropTypes.number,
};

Project.defaultProps = {
  dueDate: 0,
  percent: 0,
};

export default Project;

export const TodayProject = () => (
  <Root>
    <TodayIcon />
    <Info>
      <p className="title">오늘할일</p>
    </Info>
  </Root>
);
