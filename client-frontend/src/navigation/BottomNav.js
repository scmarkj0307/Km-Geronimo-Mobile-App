import { View, Text } from 'react-native'
import React, { Component } from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Center} from "native-base"
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

import {MainPageView} from "../screens/MainPageScreens/MainPageView"
import {Calendar} from "../screens/MainPageScreens/Calendar"
import {Appointment} from "../screens/MainPageScreens/Appointment"
import {Messages} from "../screens/MainPageScreens/Messages"
import {Profile} from "../screens/MainPageScreens/Profile"

const homePage = 'homePage';
const calendarPage= 'calendarPage';
const appointmentPage= 'appointmentPage';
const messagesPage= 'messagesPage';
const profilePage= 'profilePage';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator  
            initialRouteName={homePage}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused,color,size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homePage){
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if (rn === calendarPage){
                        iconName = focused ? 'calendar' : 'calendar-outline'
                    }
                    else if (rn === appointmentPage){
                        iconName = focused ? 'add' : 'add-outline'
                    }
                    else if (rn === messagesPage){
                        iconName = focused ? 'chatbox' : 'chatbox-outline'
                    }
                    else if (rn === profilePage){
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>


                },
            })}>

            <Tab.Screen name={homePage} component={MainPageView}/>
            <Tab.Screen name={calendarPage} component={Calendar}/>
            <Tab.Screen name={appointmentPage} component={Appointment}/>
            <Tab.Screen name={messagesPage} component={Messages}/>
            <Tab.Screen name={profilePage} component={Profile}/>


        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNav