import React, {useContext}from 'react';
import Icon from 'react-native-vector-icons/Feather'
import {Container, Title, ButtonMenu, Logout} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { AuthContext } from '../../../../Contexts/Auth';

export default function Header({title}) {
  const navigation = useNavigation()
  const {handleLogout} = useContext(AuthContext);

  function LogoutApp(){
    Alert.alert('Sair', 'Você realmente quer sair?', [
      {
        text: 'Cancelar',
        style: 'cancel'
     },
     {
      text: 'Confirmar',
      onPress: () => handleLogout()
     }
  ])
  }

  return (

   <Container>
    <ButtonMenu onPress={() => navigation.openDrawer()}>
      <Icon name="menu" size={32} color="#FFF"/>
    </ButtonMenu>
        {
          title && (
            <Title> {title}</Title>
          )
        }
      <Logout onPress={() => LogoutApp()}>
        <Icon name="log-out" size={25} color="#FFF"/>  
      </Logout>
   </Container>
  );
}