import React, { Fragment } from 'react';
import styled from 'styled-components';
import CustomForm from '../Form/Form';
const Wrapper = styled.div`
  width: 100%;
  max-width : 1500px;
  height : 150px;
  background-color: rgb(1, 2, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.div`
   margin-left: 2rem;
  `
const Search = styled.div`
    
  `

const Header = () => {
  return (
   <Wrapper>
     <Title><h1>Movies Finder</h1></Title>
         <CustomForm/>
   </Wrapper>
  )
}

export default Header;