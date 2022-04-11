import { InputBox } from "./style";

const Input = ({ onClick = () => { }, onChange = () => { }, id }) => {
    return (
        <InputBox id={id} onChange={onChange} />
    );
}

export default Input;