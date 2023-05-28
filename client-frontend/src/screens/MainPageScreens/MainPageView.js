import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/core"
import { View, TouchableOpacity, Text, StyleSheet,Image,Button,Alert,TextInput,StatusBar,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const MainPage = () => {
  const navigation = useNavigation();

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
    const hour = 13;

    if (hour < 12) {
      return {
        greeting: 'Good morning',
        imageSource: require('../../../assets/morning.png'),
        imageSource2: require('../../../assets/clinic2.png')
      };
    } else if (hour < 18) {
      return {
        greeting: 'Good afternoon',
        imageSource: require('../../../assets/noon.png'),
        imageSource2: require('../../../assets/clinic2.png')
      };
    } else {
      return {
        greeting: 'Good evening',
        imageSource: require('../../../assets/evening.png'),
        imageSource2: require('../../../assets/clinic.png')
      };
    }
  };



  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="black" barStyle="light-content" />
    
    <ImageBackground source={getGreeting().imageSource2} style={styles.backgroundImage}>
      <View style={styles.imageContainer}>
          <Image source={getGreeting().imageSource} style={styles.gifImage} />
          <View style={styles.overlay} />
      </View>

      <View style={styles.notificationContainer}>
          <TouchableOpacity style={styles.notificationButton}>
            <Icon name="notifications-outline" size={36} color="white" />
          </TouchableOpacity>
      </View>
      
      <View
      style={styles.dateContainer}>
          <Text style={styles.dateText}>{getCurrentDate()}</Text>
          <Text style={styles.greetingText}>Hello! john, {getGreeting().greeting}</Text>
      </View>

      
        

        <View style={styles.mainContent}>
          <Text style={{ color: 'black', marginLeft: 5, fontWeight: 'bold', fontSize: 24, marginTop: 20, marginLeft: 30}}>Your next appointment</Text>
          <TouchableOpacity
      
      style={{
        marginTop: '5%',
        backgroundColor: 'rgba(200, 255, 255, 0.9)'  , // Use translucent white color
        width: 250,
        height: 55,
        paddingVertical: 10,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.9)', // Add a shadow color
        borderColor: 'rgba(255, 255, 255, 0.5)', // Add a border color
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.9)', // Add a box shadow
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 20, // Add elevation for Android shadow
      }}
      onPress={() => {
       
      }}
    > 
      <Text className="text-black text-lg font-semibold">No appointment</Text>
    </TouchableOpacity>
        </View>

    </ImageBackground>

        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="home-outline" size={28} color="#0891b2" />
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.navItem}
          onPress={() => {
            navigation.navigate('CALENDAR')
          }}>
            <Icon name="calendar-outline" size={28} color="#0891b2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <View style={styles.appointmentIcon}>
              <View style={styles.circleContainer}>
                <Icon name="add-outline" size={40} color="white" /> 
              </View>
              <Text style={styles.appointmentText}>Appoinment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="chatbox-outline" size={28} color="#0891b2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="person-outline" size={28} color="#0891b2" />
          </TouchableOpacity>
        </View>
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    
  },
  backgroundImage: {
    flex: 1,
    height: 400,
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
  imageContainer: {
    position: 'relative',
    height: 100,
    resizeMode: 'cover',
    
    
  },
  gifImage: {
    width: '100%',
    height: '100%',
    borderBottomRightRadius: 60,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomRightRadius: 60,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  mainContent:{
    marginTop: 250,
    width: '100%',
    height: 600,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#f9fafb'
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

export default MainPage;


