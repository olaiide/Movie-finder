import React from 'react';
import styled from 'styled-components';
import Image1 from '../../assets/movie1.jpg';
const Container = styled.div`
  padding: rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #262626;
  width: 20%;
  height : 500px;
  margin: 0 auto;

  .movie-image{
    text-align: center;
  }
`

const Card = ({title,poster,rating,release}) => {
   return (
     <h1></h1>
   )
}

export default Card;