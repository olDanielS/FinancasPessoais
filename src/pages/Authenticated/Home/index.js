import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../../Contexts/Auth';
import api from '../../../Services/api';
import Header from '../Components/Header';
import Cards from '../Components/Cards';

import { useIsFocused } from '@react-navigation/native';  // Verificar se está em foco
import {SafeContainer, Container, Title, CardsList} from './styles'
import { format } from 'date-fns';

export default function Home() {
  const {handleLogout, user} = useContext(AuthContext);
  const isFocused = useIsFocused(); // Para somente ficar carregando os dados se estiver com foco na tela de home
  const [dateBalance, setDateBalance] = useState(Date.now())
  const [listBalance, setListBalance] = useState([])
 
 useEffect(() => {
    let isActive = true;  // Vai servir para termos controle do ciclo de vida do Estados 
    async function getMoviments() {
      const dateFormated = format(dateBalance, 'dd/MM/yyyy'); // Precisamos informar o formado da data
      const response = await api.get('/balance', {
        params: {
          date: dateFormated
        }
      })
      if(isActive){
        setListBalance(response.data)
      }
    }
    getMoviments()
    return () => isActive = false  // Vamos trocar para false assim que terminar a insercao,
                                    // dessa forma não vai ficar atualizado o estado quando
                                    // estivermos em outra tela
 }, [isFocused])
 
  return (
   <SafeContainer>
        <Container>
          <Header title={'Minha Movimentações'}/>
          <Title>{user.name}</Title>
            <CardsList
              data={listBalance}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtrator={item => item.tag}
              renderItem={({item}) => <Cards data={item}/>}
            />

        </Container>
   </SafeContainer>
  );
}