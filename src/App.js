import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import styled from "styled-components";
import { useEffect, useState } from "react";

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin:auto;
  width: 100%;
`;

const Container = styled.div`
  width: 70%;
  margin: auto;
`;

const Row = ({rowIndex = 0}) => {
  const col = [0, 1, 2, 3, 4];
  return (
    <RowContainer>
      {col.map(colIndex => <Input id={`${rowIndex}${colIndex}`} key={`${rowIndex}${colIndex}`}  />)}
    </RowContainer>
  )
}

const App = () => {
  const rows = [0,1,2,3,4,5];
  const [cursor, setCursor] = useState('00');
  
  
  useEffect(() => {
    const inputElem = document.getElementById(cursor);
    if(inputElem) inputElem.focus();
  }, [cursor]);


  return (
    <>
    <Header title="WORDLE" />
    <Container>
      {
        rows.map(row => <Row rowIndex={row} />)
      }
    </Container>
    </>
    
  );
}

export default App;
