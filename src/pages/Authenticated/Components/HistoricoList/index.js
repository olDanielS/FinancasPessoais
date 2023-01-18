import React from 'react';
import {Container, TipoText, AreaType, AreaIcon, ValueText} from './styles';
import { TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


export default function HistoricoList({data, deleteItem}) {
    function handleDeleteItem(){
        Alert.alert('Atenção', 'Quer realmente deletar?', [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Continuar',
                onPress: () => deleteItem(data.id)
            }
        ])
    }

 return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
   <Container>
        <AreaType>
            <AreaIcon type={data.type}>
                <Icon name={data.type === "receita" ? 'arrow-up' : 'arrow-down' } size={20} color="FFF"/>
                <TipoText>{data.type}</TipoText>
            </AreaIcon>
        </AreaType>
        <ValueText>
            R$ {data.value.toFixed(2)}
        </ValueText>
   </Container>
   </TouchableWithoutFeedback>
  );
}
