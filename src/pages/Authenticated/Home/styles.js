import styled from "styled-components/native";

export const SafeContainer = styled.SafeAreaView`
    flex: 1;

`; 
export const Container = styled.View`
    flex: 1;
    background-color: #121214; 
    padding: 10px;
`; 

export const CardsList = styled.FlatList`
    max-height: 190px;
    
`;
export const Title = styled.Text`
    font-size: 18px;
    color: #fff;
    margin-left: 10px;
`; 
export const Area = styled.View`
    flex-direction: row;
    padding: 5px;
    margin-left: 4px;
    margin-top: 7px;
    margin-bottom: 15px;
`;

export const ListMovimentes = styled.FlatList`
    flex: 1;
    background-color: #393d42;
    border-radius: 4px;
`;