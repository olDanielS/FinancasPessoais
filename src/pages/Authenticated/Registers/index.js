import React, {useState} from 'react';
import {Title, Background, InputData, BtnRegister, TxtRegister} from './styles'
import Header from '../Components/Header';
import {Alert, SafeAreaView } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import RegisterTypes from '../Components/RegisterTypes';
import api from '../../../Services/api';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

export default function Registers() {
  const navigation = useNavigation();

  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [type, setType] = useState('receita')

  function handleSubmit(){
    Keyboard.dismiss()

    if(isNaN(parseFloat(value)) || type === ''){
      alert('Preencha todos os campos corretamente')
      return;
    }
    Alert.alert('Confirmando transação', `Tipo: ${type} - Valor: ${parseFloat(value)}`, [
      {
        text: "Cancelar",
        style: "cancel"
      },
      {
        text: 'Continuar',
        onPress: () => handleAdd()
      }
    ]
)
    
  }
  
  async function handleAdd(){
    Keyboard.dismiss()

    await api.post('/receive', {
      description: description,
      value: Number(value),
      type: type,
      date: format(new Date(), 'dd/MM/yyyy')
    })
    setValue('')
    setDescription('')
    navigation.navigate('Home');

  }

 return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <SafeAreaView>
          <Header title={"Registrando"}/>
          <Title>Registrar</Title>
          <InputData placeholder="Descrição do registro"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
          <InputData placeholder="Valor desejado"
            keyboardType="numeric"
            value={value}
            onChangeText={(text) => setValue(text)}
          />
          <Title>Tipo de Movimentação</Title>
            <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)}/>
          <BtnRegister  onPress={() => handleSubmit()}>
              <TxtRegister>Registrar</TxtRegister>
          </BtnRegister>

      </SafeAreaView>
    </Background>
  </TouchableWithoutFeedback>
  );
}