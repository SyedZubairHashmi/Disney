import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
      <Content>

         <h4>Recomended for you</h4>
        <Wrap>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5X48eTXSIViEyXqhiQARLhxcy6JELxlt02g&s'/>
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movies


const Container = styled.div`



`
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)); /* Define the grid layout */
  grid-gap: 25px;
  margin-top: 20px;
`;


const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid rgba(249,249,249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    max-height: 300px; /* Restrict the height of the movie cards */
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249,249,249, 0.8);
  }
`;