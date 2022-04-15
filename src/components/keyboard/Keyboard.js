import { Key, Row } from "./style";

const Keyboard = ({ onKeyPress = () => { } }) => {
    const topRoW = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const middleRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',]
    const bottomRow = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
    return (
        <>
            <Row>
                {topRoW.map(val => <Key onClick={() => onKeyPress(val)}>{val}</Key>)}
            </Row>
            <Row>
                {middleRow.map(val => <Key onClick={() => onKeyPress(val)}>{val}</Key>)}
            </Row>
            <Row>
                {bottomRow.map(val => <Key onClick={() => onKeyPress(val)}>{val}</Key>)}
            </Row>
        </>
    )
}

export default Keyboard;
