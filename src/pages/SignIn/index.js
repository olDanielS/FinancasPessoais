import React, {useState, useContext} from 'react';
import { Alert, Keyboard, ActivityIndicator} from 'react-native';

import {SafeContainer, Container,
        DisableKeyboard, InputData,LabelText,
        Logo, Button, TxtButton, BtnAccout} from './styles.js';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Contexts/Auth.js';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {handleLogin, loading, loadingAuth} = useContext(AuthContext)

  function Login(){
    console.log(email, password)
    if(email !== '' && password !== ''){
      handleLogin(email, password)
      {
        loadingAuth && <ActivityIndicator size={32} color="#000"/> 
      }
    }else{
      Alert.alert('Atenção', 'Os campos não podem permanecer vazios')
    }
  }
  return (
  <SafeContainer>
    <DisableKeyboard onPress={() => Keyboard.dismiss()}>
    <Container>
  
      <Logo source={require('../../assets/Icon.png')}/>
      
      <InputData 
      placeholder="Email"
      value={email}
      onChangeText={(v) => setEmail(v)}
      keyboardType='email-address'
      />
      <InputData
       placeholder="Senha"
       value={password}
       secureTextEntry
       onChangeText={(v) => setPassword(v)}
       />
      <Button onPress={Login}>
        {loading ? <ActivityIndicator size={20} color="#FFF"/> : 
          <TxtButton>Acessar</TxtButton>
        }
      </Button>  
      <BtnAccout>
        <LabelText onPress={() => navigation.navigate('SignUp') }>Não possui conta? Criar conta</LabelText>
      </BtnAccout>
    </Container>
    </DisableKeyboard>
  </SafeContainer>
  );
}