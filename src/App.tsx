import React from 'react';
import styled from 'styled-components/macro';
import {Normalize} from 'styled-normalize';

const side = 21;
const unit = 'vh';

const Player = styled.div`
  background: orange;
  height: ${side + unit};
  width: ${side * 2 + unit};
  border: 1px solid grey;
  transform-origin: 50% 50%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  & * {
    box-sizing: border-box;
  }
`;

const Left = styled.div`
  border: 1px solid grey;
  position: absolute;
  top: 0;
  left: 0;
  width: ${side + unit};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: lightgrey;
  & ${Player} {
    transform: translateX(-50%) rotate(90deg) translateY(-50%);
  }
`;

const Right = styled.div`
  border: 1px solid grey;
  position: absolute;
  top: 0;
  right: 0;
  width: ${side + unit};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: lightgrey;
  & ${Player} {
    transform: translateX(-50%) rotate(-90deg) translateY(50%);
  }
`;

const Top = styled.div`
  border: 1px solid grey;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${side + unit};
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: lightgrey;
  & ${Player} {
    transform: rotate(180deg);
    margin: 0 auto;
  }
`;

const Bottom = styled.div`
  border: 1px solid grey;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: ${side + unit};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: lightgrey;
  & ${Player} {
    margin: 0 auto;
  }
`;

const TileRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
`;

const Tile = styled.div`
  width: 25%;
  height: 100%;
  border: 1px solid green;
`;

const PlayerSet: React.FC = () => (
  <Player>
    <TileRow>
      <Tile>Text</Tile>
      <Tile>Text</Tile>
      <Tile>Text</Tile>
      <Tile>Text</Tile>
    </TileRow>
    <TileRow>
      <Tile>Text</Tile>
      <Tile>Text</Tile>
      <Tile>Text</Tile>
      <Tile>Text</Tile>
    </TileRow>
  </Player>
);

const App: React.FC = () => {
  return (
    <Wrapper>
      <Normalize />
      <Left>
        <PlayerSet />
      </Left>
      <Right>
        <PlayerSet />
      </Right>
      <Top>
        <PlayerSet />
        <PlayerSet />
      </Top>
      <Bottom>
        <PlayerSet />
        <PlayerSet />
      </Bottom>
    </Wrapper>
  );
};

export default App;
