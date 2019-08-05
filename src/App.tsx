import React from 'react';
import styled from 'styled-components/macro';
import {Normalize} from 'styled-normalize';

const side = '27vh';

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
  width: ${side};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: lightgrey;
`;

const Right = styled.div`
  border: 1px solid grey;
  position: absolute;
  top: 0;
  right: 0;
  width: ${side};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: lightgrey;
`;

const Top = styled.div`
  border: 1px solid grey;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${side};
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: lightgrey;
`;

const Bottom = styled.div`
  border: 1px solid grey;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: ${side};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: lightgrey;
`;

const Player = styled.div`
  background: orange;
  height: ${side};
  width: 40vh;
  border: 1px solid grey;
  transform-origin: 50% 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const PlayerLeft = styled(Player)`
  transform: translateX(-50%) rotate(90deg) translateY(-50%);
`;

const PlayerRight = styled(Player)`
  transform: translateX(-50%) rotate(-90deg) translateY(50%);
`;

const PlayerTop = styled(Player)`
  transform: rotate(180deg);
  margin: 0 auto;
`;

const PlayerBottom = styled(Player)`
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <Normalize />
      <Left>
        <PlayerLeft>Left</PlayerLeft>
      </Left>
      <Right>
        <PlayerRight>Right</PlayerRight>{' '}
      </Right>
      <Top>
        <PlayerTop>First</PlayerTop>
        <PlayerTop>First</PlayerTop>
        <PlayerTop>First</PlayerTop>
      </Top>
      <Bottom>
        <PlayerBottom>First</PlayerBottom>
        <PlayerBottom>First</PlayerBottom>
        <PlayerBottom>First</PlayerBottom>
      </Bottom>
    </Wrapper>
  );
};

export default App;
