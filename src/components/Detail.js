import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://static01.nyt.com/images/2018/06/30/arts/30BAO1/merlin_140324043_ec6e4112-b0b6-4b3e-b6c3-05e11c059a2e-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="Background"/>
      </Background>
      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F88C5D5330F13D34519AF4C4ADA2EC985B6766E4E74C121ABD5EC8C77B7A15AA/scale?width=440&aspectRatio=1.78&format=webp" alt="Title"/>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="Play"/>
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="Trailer"/>
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="Group Watch"/>
        </GroupWatchButton>
      </Controls>
      <Subtitle>
        2018 . 7m . Family, Fantasy, Kids, Animation
      </Subtitle>
      <Description>
        A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  background-position: center; /* Ensure background is centered */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const PlayButton = styled.div`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  color: black;
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  padding: 0 10px;

  &:hover {
    background: rgb(198, 198, 198);
  }

  img {
    margin-right: 8px;
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  margin-left: 10px;
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-left: 10px;

  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background-color: rgba(0, 0, 0, 0.6);
  margin-left: 10px;
`;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
  // text-align: center; /* Center-align subtitle */
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  // text-align: center; /* Center-align description */
`;
