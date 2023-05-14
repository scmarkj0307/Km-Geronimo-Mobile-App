import React, { useState,useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text,Image  } from 'react-native';
import {useNavigation} from "@react-navigation/core"
import { LinearGradient } from 'expo-linear-gradient';




const FourthRegisterView = () => {
  const navigation = useNavigation();
 

  return (
    
 /*BACKGROUND COLOR*/ 
 <LinearGradient
 colors={['#008080', '#008080']}
 start={{ x: 0, y: 0 }}
 end={{ x: 1, y: 1 }}
 style={{ flex: 1 }}
>
{/*BACKGROUND COLOR*/ }

{/* MAIN CONTAINER */ }
<View className="flex-1 justify-flex-start items-center mt-12">
{/* MAIN CONTAINER*/ }

{/* LOGO AND HEADER TITLE */ }
<View style={{ marginRight: 18, flexDirection: 'row', alignItems: 'center' }}>
   <Image
     source={require('../../assets/km-logo-teeth.png')}
     style={{ width: 40, height: 40 }}
   />
   <Text style={{ color: 'white', marginLeft: 5, fontWeight: 'bold', fontSize: 20 }}>KM-GERONIMO</Text>
</View>
{/* LOGO AND HEADER TITLE*/ }

{/*OTP REMINDER */ }
 <Text Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white',marginTop: 80, marginBottom: 5, textAlign: 'center' }}>
     OTP SENT!
   </Text>
   <Text style={{ fontSize: 18,color: 'white', marginBottom: 20, textAlign: 'center' }}>
     Enter a 4-digit code sent to you to verify your account.
   </Text>
{/* OTP REMINDER-------------------------------------------------------------------------------*/ }

{/*OTP TEXT INPUTS */ }
<View style={{flexDirection: 'row',justifyContent: 'space-between',marginHorizontal: 30,marginTop: 20,marginRight:10}}>
      <View style={{flex: 1,borderRadius: 20,overflow: 'hidden',marginRight: 10}}>
        <TextInput
          style={{backgroundColor: 'white',paddingHorizontal: 10,height: 80,}}
          placeholder=""
          // Add any other TextInput props as needed
        />
      </View>
      <View style={{flex: 1,borderRadius: 20,overflow: 'hidden',marginRight: 10}}>
        <TextInput
          style={{backgroundColor: 'white',paddingHorizontal: 10,height: 80,}}
          placeholder=""
          // Add any other TextInput props as needed
        />
      </View>
      <View style={{flex: 1,borderRadius: 20,overflow: 'hidden',marginRight: 10}}>
        <TextInput
          style={{backgroundColor: 'white',paddingHorizontal: 10,height: 80,}}
          placeholder=""
          // Add any other TextInput props as needed
        />
      </View>
      <View style={{flex: 1,borderRadius: 20,overflow: 'hidden',marginRight: 10}}>
        <TextInput
          style={{backgroundColor: 'white',paddingHorizontal: 10,height: 80,}}
          placeholder=""
          // Add any other TextInput props as needed
        />
      </View>
    </View>
{/*OTP TEXT INPUTS */ }

{/*RESEND OTP */}
<TouchableOpacity
        style={{ marginTop: 80 }}
        onPress={() => {
          // Implement your "resend otp" logic or navigation here
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>RESEND OTP</Text>
      </TouchableOpacity>
{/*RESEND OTP */}

{/* PAGINATION */ } 
<View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 80 }}>
      <TouchableOpacity
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Use translucent white color
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 20,
          marginRight: 5,
          shadowColor: 'rgba(0, 0, 0, 0.2)', // Add a shadow color
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.8,
          shadowRadius: 3,
          elevation: 4, // Add elevation for Android shadow
        }}
      ></TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Use translucent grey color
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 20,
          marginRight: 5,
          shadowColor: 'rgba(0, 0, 0, 0.2)', // Add a shadow color
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.8,
          shadowRadius: 3,
          elevation: 4, // Add elevation for Android shadow
        }}
      ></TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Use translucent grey color
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 20,
          marginRight: 5,
          shadowColor: 'rgba(0, 0, 0, 0.2)', // Add a shadow color
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.8,
          shadowRadius: 3,
          elevation: 4, // Add elevation for Android shadow
        }}
      ></TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // Use translucent grey color
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 20,
          marginRight: 5,
          shadowColor: 'rgba(0, 0, 0, 0.2)', // Add a shadow color
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.8,
          shadowRadius: 3,
          elevation: 4, // Add elevation for Android shadow
        }}
      ></TouchableOpacity>
      </View>
  {/* PAGINATION */ }  

  {/* CONTINUE BUTTON */ }    
      <TouchableOpacity
      style={{
        marginTop: '5%',
        backgroundColor: 'rgba(200, 255, 255, 0.9)', // Use translucent white color
        width: '70%',
        height: '8%',
        paddingVertical: 10,
        borderRadius: 15,
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
        elevation: 4, // Add elevation for Android shadow
      }}
      onPress={() => {
        navigation.navigate('Home');
      }}
    > 
      <Text className="text-black text-lg font-semibold">CONTINUE</Text>
      </TouchableOpacity>
  {/* CONTINUE BUTTON */ } 





    </View>
    </LinearGradient>
  );
};

export default FourthRegisterView;


