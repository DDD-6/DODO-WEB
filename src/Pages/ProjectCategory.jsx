import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Project, { TodayProject } from "../Components/Elements/Project";

const Root = styled.main`
  padding: 32px 16px;

  h2 {
    margin-bottom: 32px;
  }

  > button {
    width: 100%;
    display: block;
    background: none;
  }
`;

export default function ProjectCategoryPage() {
  const history = useHistory();
  const [projects, setProjects] = useState([]);
  const [todayTodo, setToday] = useState(null);

  function goDetail(id) {
    history.push(`/project-detail/${id}`);
  }

  useEffect(() => {
    const testProj = {
      id: 0,
      title: "테스트 프로젝트",
      dueDate: "15",
      percent: 50,
    };
    setProjects([testProj]);
    setToday(null);
  }, []);
  return (
    <Root>
      <h2>프로젝트</h2>
      {projects.map(proj => (
        <button type="button" onClick={() => goDetail(proj.id)}>
          <Project title={proj.title} />
        </button>
      ))}
      {todayTodo && <TodayProject />}
    </Root>
  );
}
