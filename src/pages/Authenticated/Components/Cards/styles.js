import styled from "styled-components/native";

export const Container = styled.View`
    margin-left: 14px;
    margin-right: 14px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    align-items: flex-start;
    width: 300px;
    padding-left: 14px;
    background-color: ${props => props.bg};
    opacity: 0.7;
   
`
export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
`
export const Balance = styled.Text`
    font-size: 30px;
    font-weight: 500;
    color: #FFF;
`