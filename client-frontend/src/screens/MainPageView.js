import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image,Button,Alert,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const MainPage = () => {

  const getCurrentDate = () => {
    const date = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const currentDay = days[date.getDay()];
    const currentDate = date.getDate();
    const currentMonth = months[date.getMonth()];

    return `${currentDay}, ${currentDate} ${currentMonth}`;
  };

  const getGreeting = () => {
    const date = new Date();
    const hour = date.getHours();

    if (hour < 12) {
      return 'Good morning';
    } else if (hour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  const [appointmentDate, setAppointmentDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (_, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setAppointmentDate(selectedDate);
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const hideDatePickerModal = () => {
    setShowDatePicker(false);
  };

  const generateQRCode = () => {
    if (!appointmentDate) {
      Alert.alert('Error', 'Please select an appointment date');
      return;
    }

    // Generate QR code logic goes here
    // You can use any QR code generation library or API of your choice

    Alert.alert('Success', 'QR code generated!');
  };

  return (
    <View style={styles.container}>

    <Image source={require('../../assets/dental.png')} style={styles.gifImage} />

    <View style={styles.notificationContainer}>
        <TouchableOpacity style={styles.notificationButton}>
          <Icon name="notifications-outline" size={36} color="#333" />
        </TouchableOpacity>
    </View>
    
    <View
     style={styles.dateContainer}>
        <Text style={styles.dateText}>{getCurrentDate()}</Text>
        <Text style={styles.greetingText}>Hello! John, {getGreeting()}</Text>
      </View>


      

      <View style={styles.content}>
        <View>
          <TextInput
            value={appointmentDate ? moment(appointmentDate).format('MMMM Do YYYY, h:mm a') : ''}
            placeholder="Select appointment date"
            onFocus={showDatePickerModal}
            style={{ marginVertical: 10, paddingHorizontal: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
          />
          <Button title="Generate QR Code" onPress={generateQRCode} />
          {showDatePicker && (
            <DateTimePicker
              value={appointmentDate || new Date()}
              mode="datetime"
              is24Hour={true}
              display="default"
              onChange={handleDateChange}
              minimumDate={new Date()} // Optional: Set minimum date to prevent selecting past dates
            />
          )}
        </View>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="calendar-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.appointmentIcon}>
            <Icon name="time-outline" size={40} color="#fff" />
            <Text style={styles.appointmentText}>Appointment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="chatbox-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  notificationContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  notificationButton: {
    padding: 8,
  },
  dateContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    borderRadius: 8,
    padding: 16,
  },
  dateText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    color: 'white',
    fontWeight: 'bold'
  },
  gifImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#333',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 24,
  },
  appointmentIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  appointmentText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    width: 80, // Adjust the width as per your preference
    textAlign: 'center',
  },
});

export default MainPage;


