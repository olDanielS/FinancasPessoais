import styled from "styled-components/native";

export const AreaButtons = styled.View`
   flex-direction: row;
   justify-content: space-around;
`
export const BtnMoviments = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 15px;
    background-color: ${props => props.checked ? "#FFF" : '#808080'};
    padding: 7px;
    border-radius: 2px;
    width: 45%;
    border-width: 1.8px;
    border-color: ${props => props.checked ? "#694993" : 'transparent'};
`
export const TxtMoviments = styled.Text`
    color: #000;
    font-size: 20px;
    font-weight: bold;
    margin-left: 5px;
`