import React, {useState} from 'react';
import {Container,BtnFiltrarCalendar,TxtFiltrarCalendar, ModalContent} from './styles';
import { TouchableWithoutFeedback, View} from 'react-native';

import {Calendar, LocaleConfig} from 'react-native-calendars'
import {ptBR} from './localeCalendar';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({setVisible, handleFilter}) {
    const [dateNow, setDateNow] = useState(new Date());
    const [markerDates, setMarkerDates] = useState({});


    function handleOnDayPress(date){
        setDateNow(new Date(date.dateString))

        let markedDay = {};

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3b3dbf',
            textColor: '#FFF'
        }

        setMarkerDates(markedDay)
    }

    function handleFilterDate(){
        handleFilter(dateNow)
        setVisible()
    }
 return (
   <Container>
        <TouchableWithoutFeedback onPress={setVisible}>
            <View style={{flex: 1}}></View>
        </TouchableWithoutFeedback>
        <ModalContent> 
                <Calendar 
                    onDayPress={handleOnDayPress}
                    markedDates={markerDates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: '#ff0000',
                        selectedDayBackgroundColor: '#694993',
                        selectedDayTextColor: '#fff'
                        
                    }}
                />

                <BtnFiltrarCalendar onPress={handleFilterDate}>
                    <TxtFiltrarCalendar>Filtrar</TxtFiltrarCalendar>
                </BtnFiltrarCalendar>
        </ModalContent>
   </Container>
  );
}
