import React, {useState, useContext} from 'react';
import { Keyboard } from 'react-native';
import { AuthContext } from '../../Contexts/index.js';
import {SafeContainer, Container, DisableKeyboard, InputData,LabelText, Logo, Button, TxtButton, BtnAccout} from '../SignIn/styles.js'
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {createAccount} = useContext(AuthContext);

  const navigation = useNavigation();

  function submitAccount(){
    createAccount(name, email, password)
  }
 
  return (
  <SafeContainer>
    <DisableKeyboard onPress={() => Keyboard.dismiss()}>
    <Container>
        <Logo source={require('../../assets/Icon.png')}/>
        <InputData 
        placeholder="Nome"
        value={name}
        onChangeText={(value)=> setName(value)}
        
      />
      <InputData
        placeholder="email"
        value={email}
        onChangeText={value => setEmail(value)}
        keyboardType='email-address'
       />
      
      <InputData
       placeholder="Senha"
       value={password}
       secureTextEntry
       onChangeText={(value) => setPassword(value)}
       />
      
      <Button onPress={submitAccount}>
          <TxtButton>Acessar</TxtButton>
      </Button>  
      <BtnAccout onPress={() => navigation.goBack()}>
        <LabelText>Já possui uma conta? Acessar</LabelText>
      </BtnAccout>
    </Container>
    </DisableKeyboard>
  </SafeContainer>
  );
}