import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex-direction: row;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
    max-height: 60px;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`
export const Title = styled.Text`
    margin-left: 10px;
    color: #FFF;
    font-size: 18px;
`
export const ButtonMenu = styled.TouchableOpacity`
    color: #FFF;
    font-size: 18px;
`
export const Logout = styled.TouchableOpacity`
    color: #FFF;
    font-size: 18px;
    justify-content: flex-end;
    position: absolute;
    right: 2px;
    margin-right: 5px;
`
