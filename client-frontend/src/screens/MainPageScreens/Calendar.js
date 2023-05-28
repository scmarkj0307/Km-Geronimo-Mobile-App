import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/core"
import { View, TouchableOpacity, Text, StyleSheet,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';


const Calendar = () => {
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState(moment());

  const renderCalendarHeader = () => {
    const month = selectedDate.format('MMMM');
    const year = selectedDate.format('YYYY');
    return (
      <View style={styles.calendarHeader}>
        <TouchableOpacity onPress={navigateToPreviousMonth}>
          <Text style={styles.calendarHeaderButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.calendarHeaderText}>{`${month} ${year}`}</Text>
        <TouchableOpacity onPress={navigateToNextMonth}>
          <Text style={styles.calendarHeaderButton}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderCalendarDays = () => {
    const weekdays = moment.weekdaysShort();
    return (
      <View style={styles.calendarDays}>
        {weekdays.map((day) => (
          <Text key={day} style={styles.calendarDayText}>{day}</Text>
        ))}
      </View>
    );
  };

  const renderCalendarDates = () => {
    const startOfMonth = selectedDate.clone().startOf('month');
    const endOfMonth = selectedDate.clone().endOf('month');
    const startDay = startOfMonth.startOf('week');
    const endDay = endOfMonth.endOf('week');

    const calendarDates = [];
    let currentDate = startDay.clone();

    while (currentDate.isSameOrBefore(endDay, 'day')) {
      calendarDates.push(currentDate.clone());
      currentDate.add(1, 'day');
    }

    return (
        <View style={styles.calendarDates}>
          {calendarDates.map((date) => (
            <TouchableOpacity
              key={date.format('YYYY-MM-DD')}
              onPress={() => handleDatePress(date)}
              style={[
                styles.calendarDateButton,
                date.isSame(selectedDate, 'day') && styles.calendarDateButtonSelected,
              ]}
            >
              <Text style={[
                styles.calendarDateText,
                date.isSame(selectedDate, 'day') && styles.calendarDateTextSelected,
              ]}>
                {date.format('D')}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    };
  
    const navigateToPreviousMonth = () => {
      setSelectedDate(selectedDate.clone().subtract(1, 'month'));
    };
  
    const navigateToNextMonth = () => {
      setSelectedDate(selectedDate.clone().add(1, 'month'));
    };
  
    const handleDatePress = (date) => {
      setSelectedDate(date);
    };



  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="black" barStyle="light-content" />

    <View style={styles.container}>
      {renderCalendarHeader()}
      {renderCalendarDays()}
      {renderCalendarDates()}
    </View>
    
   

       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
      },
      calendarHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
      },
      calendarHeaderButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
      },
      calendarHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      calendarDays: {
        flexDirection: 'row',
        marginBottom: 8,
      },
      calendarDayText: {
        flex: 1,
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
      },
      calendarDates: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      calendarDateButton: {
        width: '14.28%', // 7 days in a week, so 100% divided by 7
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      calendarDateButtonSelected: {
        backgroundColor: '#0891b2',
        borderRadius: 20,
      },
      calendarDateText: {
        fontSize: 14,
        color: '#333',
      },
      calendarDateTextSelected: {
        color: '#fff',
      },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#f3f4f6',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appointmentIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    backgroundColor: '#0891b2',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appointmentText: {
    color: '#0891b2',
    fontSize: 12,
    marginTop: 4,
    width: 80, // Adjust the width as per your preference
    textAlign: 'center',
  },
});

export default Calendar;