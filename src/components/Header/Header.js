import React, { Fragment } from "react";
import CustomForm from "../Form/Form";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  max-width: 1500px;
  height: 150px;
  background-color: rgb(1, 2, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  margin-left: 2rem;
`;
const Search = styled.div``;

const NavBar = () => {
  return (
    <div>
      <Wrapper>
        <Title>
          <h1>Movies Finder</h1>
        </Title>
        <CustomForm />
      </Wrapper>
    </div>
  );
};

export default NavBar;
