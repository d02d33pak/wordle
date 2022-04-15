import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Keyboard from "./components/keyboard/Keyboard"
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

const Row = ({ rowIndex = 0 }) => {
  const col = [0, 1, 2, 3, 4];
  return (
    <RowContainer>
      {col.map(colIndex => <Input id={`${rowIndex}${colIndex}`} key={`${rowIndex}${colIndex}`} />)}
    </RowContainer>
  )
}

const App = () => {
  const rows = [0, 1, 2, 3, 4, 5];
  const [cursor, setCursor] = useState('00');
  const [enteredRow, setEnteredRow] = useState(rows.map(r => { return { rowId: r, rowVal: '' } }));

  const handleDelete = ([row, col]) => {
    const newRowCol = row + ((parseInt(col) - 1) % 5)
    setCursor(newRowCol)
    console.log('deleted');
  };

  const handleEnter = ([row, col]) => {
    console.log('entered')

  };

  const handleKey = (val, [row, col]) => {
    const newRowCol = row + ((parseInt(col) + 1) % 5)
    setCursor(newRowCol)
    console.log(val);
  };

  const handleInput = (val) => {
    const [row, col] = cursor.split('');
    switch (val) {
      case "ENTER": handleEnter([row, col]); break;
      case "DEL": handleDelete([row, col]); break;
      default: handleKey(val, [row, col]); break;
    }
  };

  useEffect(() => {
    const inputElem = document.getElementById(cursor);
    if (inputElem) inputElem.focus();
  }, [cursor]);


  return (
    <>
      <Header title="WORDLE" />
      <Container>
        {
          rows.map(row => <Row rowIndex={row} />)
        }
        <Keyboard onKeyPress={handleInput} />
      </Container>
    </>

  );
}

export default App;
