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

  
  const [dateBalance, setDateBalance] = useState(Date.now())
  const [listBalance, setListBalance] = useState()
  
  const isFocused = useIsFocused(); // Para somente ficar carregando os dados se estiver com foco na tela de home
 
  useEffect(() => {
    let isActive = true;  // Vai servir para termos controle do ciclo de vida do Estados 
    async function getMoviments() {
      const dateFormated = format(dateBalance, 'dd/MM/yyyy'); // Precisamos informar o formado da data a LIB date-fns serve pra mudarmos 
                                                              // o formato do date, por default vem no padrao americano, a api espera
                                                              // no formato BR dd/MM/yyyy
      const response = await api.get('/balance', {
        params: {
          date: dateFormated
        }
      })
      if(isActive){ // So vai alterar o estado do se for true
        setListBalance(response.data)
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

        </Container>
          </SafeContainer>
  );
}