import React, {useState} from 'react';
import {Title, Background, InputData, BtnRegister, TxtRegister} from './styles'
import Header from '../Components/Header';
import {SafeAreaView } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import RegisterTypes from '../Components/RegisterTypes';


export default function Registers() {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState(0)
  const [type, setType] = useState('receita')

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
          <BtnRegister>
              <TxtRegister>Registrar</TxtRegister>
          </BtnRegister>

      </SafeAreaView>
    </Background>
  </TouchableWithoutFeedback>
  );
}