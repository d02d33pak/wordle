import styled from "styled-components";

export const InputBox = styled.input`
    margin: 4px;
    padding: 10px;
    width: 50px;
    height: 50px;
    background-color: #ccc;
    border: none;
    text-align: center;
    font-size: 32px;
    text-transform: uppercase;
    caret-color: transparent;
    &:focus {
        background-color: #bbb;
    };
`;