import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard } from 'react-native';

import {SafeContainer, Container, DisableKeyboard, InputData,LabelText, Logo, Button, TxtButton, BtnAccout} from './styles.js'
import { useNavigation } from '@react-navigation/native';


export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
  <SafeContainer>
    <DisableKeyboard onPress={() => Keyboard.dismiss()}>
    <Container>
  
      <Logo source={require('../../assets/Icon.png')}/>
      
      <InputData 
      placeholder="Email"
      value={email}
      onValueChange={(v) => setEmail(v)}
      keyboardType='email-address'
      />
      <InputData
       placeholder="Senha"
       value={password}
       secureTextEntry
       onValueChange={(v) => setEmail(v)}
       />
      <Button>
          <TxtButton>Acessar</TxtButton>
      </Button>  
      <BtnAccout>
        <LabelText onPress={() => navigation.navigate('SignUp') }>Não possui conta? Criar conta</LabelText>
      </BtnAccout>
    </Container>
    </DisableKeyboard>
  </SafeContainer>
  );
}