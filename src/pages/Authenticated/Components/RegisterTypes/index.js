import React, {useState}from 'react';
import {BtnMoviments, TxtMoviments, AreaButtons} from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function RegisterTypes({type, sendTypeChanged}) { //Basicamente estamos pegando o estado type e o SetType do elemento pai
    const [typeChecked, setTypeChecked] = useState(type)   
    
    function ChangeText(name){
        if(name == 'receita'){
            setTypeChecked('receita');
            sendTypeChanged('receita')
        }else{
            setTypeChecked('despesa');
            sendTypeChanged('despesa')
        }
    }
return (
    <AreaButtons>
        <BtnMoviments checked={typeChecked === 'receita' ? true : false} onPress={() => ChangeText('receita')}> 
            <Icon name='arrow-up' size={22} color='#00B94A'/>
            <TxtMoviments>Receita</TxtMoviments>
        </BtnMoviments>

        <BtnMoviments checked={typeChecked === 'despesa' ? true : false}onPress={() => ChangeText('despesa')} >
            <Icon name='arrow-down' size={22} color='#EF463A'/> 
            <TxtMoviments>Despesa</TxtMoviments>
        </BtnMoviments>
</AreaButtons>
  );
}