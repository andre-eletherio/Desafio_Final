import styled from "styled-components";

export const FilterContainer = styled.div`
    width: 350px;
    height: 100px;
    max-width: 90%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 7px;
    border-radius: 20px;
    text-align: center;
    border: none;
    box-shadow: 0px 1px 4px #000;
    
    :focus{
        outline: none;
    }
`;

export const SelectContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Select = styled.select`
    border-radius: 20px;
    padding: 2px;
    text-align: center;
    width: 45%;
    border: none;
    box-shadow: 0px 1px 4px #000;

    :focus{
        outline: none;
    }
`;