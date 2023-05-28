import React from 'react'
import { Image,View,Text,KeyboardAvoidingView, Platform,ScrollView } from 'react-native';
import LogoImage from './assets/km-logo-teeth.png';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './src/screens/HomeView';
import LoginView from './src/screens/LoginView';
import RegisterView from './src/screens/FirstRegisterView';
import SecondRegisterView from './src/screens/SecondRegisterView';
import ThirdRegisterView from './src/screens/ThirdRegistrationView';
import FourthRegisterView from './src/screens/FourthRegisterView';
import MainPageView from './src/screens/MainPageScreens/MainPageView';
import VerificationScreen from './src/screens/VerificationScreen';
import CalendarView from './src/screens/MainPageScreens/Calendar';





const Stack = createNativeStackNavigator();



const StackNavigator = () => {
  
  return (
    
    <KeyboardAvoidingView
      behavior= {Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}
    >
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Stack.Navigator
          screenOptions={{
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
      >
          <Stack.Screen name="Home" component={HomeView} options={{title: 'WELCOME', headerShown: false, }} />

          <Stack.Screen name="LOGIN" component={LoginView} options={{ title: '',headerRight: () => (
              <View style={{ marginRight: 89, flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={LogoImage}
                  style={{ width: 40, height: 40 }}
                />
                <Text style={{ color: 'white', marginLeft: 5, fontWeight: 'bold', fontSize: 20 }}>KM-GERONIMO</Text>
              </View>
              ), headerStyle: {
                backgroundColor: '#0891b2', 
              },headerTintColor: 'white', }} />

          <Stack.Screen name="REGISTER" component={RegisterView} options={{ title: 'KM-GERONIMO',headerShown: false, }} />
          <Stack.Screen name="SECONDREGISTER" component={SecondRegisterView} options={{ title: 'KM-GERONIMO',headerShown: false }}/>
          <Stack.Screen name="THIRDREGISTER" component={ThirdRegisterView} options={{ title: 'KM-GERONIMO',headerShown: false, }}/>
          <Stack.Screen name="FOURTHREGISTER" component={FourthRegisterView} options={{ title: 'KM-GERONIMO',headerShown: false, }}/>
          <Stack.Screen name="Verification" component={VerificationScreen} options={{ title: 'KM-GERONIMO',headerShown: false, }}/>
          <Stack.Screen name="MAIN" component={MainPageView} options={{headerShown: false}} />
      </Stack.Navigator>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default StackNavigator