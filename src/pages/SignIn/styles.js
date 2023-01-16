import styled from 'styled-components/native';

export const SafeContainer = styled.SafeAreaView `
    flex: 1;
    `;
export const Container = styled.View `
   flex: 1;
   background-color: #121214; 
   align-items: center;
   justify-content: center;
   `;

export const DisableKeyboard  = styled.TouchableWithoutFeedback`
    flex: 1;
`

export const InputData = styled.TextInput`
    width: 80%;
    background-color: #D9D9D9;
    margin-top: 15px;
    height: 50px;
    border: 2px solid #694993;
    opacity: 0.8;
    color: #000;
    padding: 15px;
    font-size: 17px;
    border-radius: 5px;
    `;
export const Logo = styled.Image`
    width: 180px;
    height: 170px;
    margin-bottom: 40px;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 45px;
    background-color: #694993;
    margin-top: 15px;
    height: 45px;
    border: 2px solid #FFF;
    opacity: 0.8;
    border-radius: 10px;
`;
export const TxtButton = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
`;
export const BtnAccout = styled.TouchableOpacity`
    
`;
export const LabelText = styled.Text`
    color: #FFF;
    margin-top: 10px;
`;



