import { InputBox } from "./style";

const Input = ({ onClick = () => { }, onChange = () => { }, id }) => {
    return (
        <InputBox id={id} maxLength="1" onChange={onChange} />
    );
}

export default Input;