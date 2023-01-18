import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../../Contexts/Auth';
import api from '../../../Services/api';

import Header from '../Components/Header';
import Cards from '../Components/Cards';
import HistoricoList from '../Components/HistoricoList';
import {SafeContainer, Container, Title, CardsList, Area, ListMovimentes} from './styles'
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { format } from 'date-fns';
import { useIsFocused } from '@react-navigation/native';  // Verificar se está em foco


export default function Home() {
  
  const [dateBalance, setDateBalance] = useState(Date.now())
  const [listBalance, setListBalance] = useState([])
  const [moviments, setMoviments] = useState([]);
  
  const isFocused = useIsFocused(); // Para somente ficar carregando os dados se estiver com foco na tela de home
 
  useEffect(() => {
    let isActive = true;  // Vai servir para termos controle do ciclo de vida do Estados 
    async function getMoviments() {
      const dateFormated = format(dateBalance, 'dd/MM/yyyy'); // Precisamos informar o formado da data a LIB date-fns serve pra mudarmos 
                                                              // o formato do date, por default vem no padrao americano, a api espera
                                                              // no formato BR dd/MM/yyyy
      const movementsToday = await api.get('/receives', {
        params: {
          date: dateFormated
        }
      })  
    
      const balance = await api.get('/balance', {
        params: {
          date: dateFormated
        }
      })
      if(isActive){ // So vai alterar o estado do se for true
        setListBalance(balance.data)
        setMoviments(movementsToday.data)

      }
    }
    getMoviments()
    return () => isActive = false  // Vamos trocar para false assim que terminar a insercao,
                                    // dessa forma não vai ficar atualizado o estado quando
                                    // estivermos em outra tela

 }, [isFocused]) // Vai verificar se a home está em foco dar reload no useEffect, caso ele abra o drawer e feche tb vai recarregar as info
 
  return (
    <SafeContainer>
    <Container>
          <Header title={'Minha Movimentações'}/>
            <CardsList
              data={listBalance}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtrator={item => item.tag}
              renderItem={({item}) => <Cards data={item}/>}
            />

            <Area>
              <TouchableOpacity>
                <Icon name="calendar" size={24} color="#FFF"/>
              </TouchableOpacity>
            <Title>Últimas movimentações</Title>
          </Area>
          
          <ListMovimentes
            data={moviments}
            keyExtrator={item => item.id}
            renderItem={({item}) => <HistoricoList data={item}/>}
            showsVerticalScrollIndicator={false}
            
          />
          </Container>
          </SafeContainer>
  );
}