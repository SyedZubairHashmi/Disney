import React from 'react'
import styled from 'styled-components'
function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src='/images/viewers-disney.png'/>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-disney.png'/>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-disney.png'/>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-disney.png'/>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-disney.png'/>
      </Wrap>
      
    </Container>
  )
}

export default Viewers



const Container = styled.div`
  margin-top: 30px;
  display:grid;
  grid-template-columns: repeat(5, minmax(0,1fr));
  grid-gap:25px;


  
`
const Wrap = styled.div`
     border-radius:10px;
     border: 3px solid rgba(249,249,249,0.1);
     img{
          width:100%;
          height:100%;
          object-fit:cover;
     }

    &:hover{
       transform: scale(1.05)
      box-shadow: rgb(0 0 0 / 69%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
      border-color: rgb(249,249,249, 0.8);

    }

`