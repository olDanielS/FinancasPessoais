import React, {useMemo} from 'react';
import { Container, Title, Balance } from './styles';

export default function Cards({data}) {

    const labelName = useMemo(() => { //Use Memo vai "memorizar" os dados 
        if(data.tag == 'saldo'){
            return{
                label: 'Saldo atual',
                color: '#694993'
            }
        }else if(data.tag == 'receita'){
            return{
                label: 'Entradas do dia',
                color: '#00B94A'
            }
        }else{
            return{
                label: 'Saidas do dia',
                color: '#EF463A'
            }
        }
    }, [data]) //Toda vez que essa propriedade for alterada ele vai memorizar o novo valor e vamos poder manipula-lo

 return (
   <Container bg={labelName.color}>
        <Title>{labelName.label}</Title>
        <Balance>R$ {data.saldo.toFixed(1)}</Balance>
   </Container>
  );
}