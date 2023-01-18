import styled from "styled-components/native";

export const Container = styled.View`
    padding: 12px;
    background-color: #696e73;
    border-radius: 4px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 14px;
`;
export const TipoText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-style: italic;
`;
export const AreaType = styled.View`
    flex-direction: row;
    margin-bottom: 5px;
   
`;
export const AreaIcon = styled.View`
    flex-direction: row;
    background-color: ${props => props.type === "receita" ? '#00B94A' : '#EF463A' };
    padding-bottom: 4px;
    padding-top: 4px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 4px;
`;
export const ValueText = styled.Text`
    color: #fff;
    font-size: 20px;
`;