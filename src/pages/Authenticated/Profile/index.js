import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../Components/Header';
import {Container, Title, NamePerson, BtnRegister, TxtRegister, BtnLogout} from './styles'
import { AuthContext } from '../../../Contexts/Auth';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const {user, handleLogout} = useContext(AuthContext)
  const navigation = useNavigation();

  return (
      <Container>
        <SafeAreaView>
        <Header title="Perfil"/>

        <Title> Olá, bem vindo de volta!</Title>
        <NamePerson> {user && user.name}</NamePerson>

        <BtnRegister onPress={() => navigation.navigate('Register')}>
          <TxtRegister>Novo registro</TxtRegister>
        </BtnRegister>
        <BtnLogout onPress={() => handleLogout()}>
          <TxtRegister>Sair</TxtRegister>
        </BtnLogout>
        </SafeAreaView>
    </Container>
  );
}