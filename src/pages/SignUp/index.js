import React, {useState, useContext} from 'react';
import { Keyboard, ActivityIndicator, Platform, Alert} from 'react-native';
import { AuthContext } from '../../Contexts/Auth';
import {SafeContainer, Container, DisableKeyboard,
   InputData,LabelText, Logo, Button, TxtButton, BtnAccout} from '../SignIn/styles.js'
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {createAccount, loading} = useContext(AuthContext);

  const navigation = useNavigation();

  function submitAccount(){
    if(name !== '' || email !== '' || password !== ''){
      createAccount(name, email, password);

      navigation.goBack()
    }else{
      Alert.alert('Atenção', 'Os campos são obrigatorios')
      return
    }
  }
 
  return (
  <SafeContainer>
    <DisableKeyboard onPress={() => Keyboard.dismiss()}>
    <Container
      behavior={Platform.OS === 'ios' ? 'padding': ''}
      enabled
    >
        <Logo source={require('../../assets/Icon.png')}/>
        <InputData 
        placeholder="Nome"
        value={name}
        onChangeText={(value)=> setName(value)}
      />
      <InputData
        placeholder="Email"
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
      {loading ? (
          <ActivityIndicator size={20} color='#FFF'/>
         ) : (
           <TxtButton>Cadastrar</TxtButton>
           )
          }
      </Button>  
      <BtnAccout onPress={() => navigation.goBack()}>
          <LabelText>Já possui uma conta? Acessar</LabelText>
      </BtnAccout>
    </Container>
    </DisableKeyboard>
  </SafeContainer>
  );
}