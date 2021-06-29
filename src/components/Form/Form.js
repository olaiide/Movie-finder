import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const Form = styled.form`
  width: 100%;
  color: white;
  max-width: 500px;
  margin-right: 0.3rem;
  .button{
      margin-right: 5rem;
    }
  display: flex;
  justify-content : space-between;
`
const Input = styled.input`
  padding : 1.05rem 0.5rem;
  color: #272065;
  outline : none;
  border : none;
  height : 2px;
  background-color: #f4f7fa;
  border-radius : 3px;
  line-height: 1.21428571em;
  position: relative;
  right: -80px;

  &::placeholder{
    color: rgba(39, 32, 101, 0.5);
    font-weight: lighter;
    font-size: 14px;
    position: relative;
  }
  &:focus{
    box-shadow: 0px 3px 6px red;
  }
`
const CustomForm = () => {
   return(
          <Form>
            <div>
             <Input 
              type="text"
              placeholder="Search for a movie"/>
            </div>
            <div>
             <Button className="button">Search</Button>
            </div>
          </Form>
   )
}

export default CustomForm;

// <Button className="button" >Search</Button>