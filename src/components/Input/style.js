import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 24px;
    font-family: 'Roboto';
    
    input {
        width: 100%;
        height: 75px;
        background-color: #aaaaff;
        border: 0;
        text-align: right;
        font-size: 24px;
        font-family: 'Roboto';
        padding: 0 10px;
        color: #fff;
    }

    input:focus {
        outline: none;
    }
`