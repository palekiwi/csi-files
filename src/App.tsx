import React from 'react';
import styled from 'styled-components/macro';

const Title = styled.div`
  color: green;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <Title>Mietek</Title>
    </div>
  );
};

export default App;
