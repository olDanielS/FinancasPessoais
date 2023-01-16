import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import {Container, Title, ButtonMenu} from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Header({title}) {
  const navigation = useNavigation()
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
   </Container>
  );
}