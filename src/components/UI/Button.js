import React from 'react'
import styled from'styled-components';

const CustomButton = styled.button`
   border: 1px solid red;
    padding: 0.7rem 2rem 0.5rem 2rem;
    border-radius: 5px;
    background : black;
    color : red;
    font-size: 15px;
    font-weight: 600;
`

const Button = ({children,...otherProps}) => {
   return (
       <CustomButton className="button">{children}</CustomButton>
   )
}

export default Button;