import React, { useState,useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Pressable,Platform,Image  } from 'react-native';
import {useNavigation} from "@react-navigation/core"
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';


const FirstRegisterView = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({type},selectedDate) => {
    if(type=="set"){
      const currentDate = selectedDate;
      setDate(currentDate); 


      if (Platform.OS === "android"){
        toggleDatepicker();
        setDateOfBirth(currentDate.toDateString());
      }
    } 
    else{
      toggleDatepicker();
    }
  };

  

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

  {/* TEXT REMINDER AND INSTRUCTION */ }
      <Text Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white',marginTop: 15, marginBottom: 5, textAlign: 'center' }}>
          Please fill the boxes below
        </Text>
        <Text style={{ fontSize: 18,color: 'white', marginBottom: 20, textAlign: 'center' }}>
          Reuired information to account creation.
        </Text>
  {/* TEXT REMINDER AND INSTRUCTION-------------------------------------------------------------------------------*/ }


  {/* INPUT BOX - FIRST NAME */ }
      <TextInput
          style={{
            color: 'black',
            fontSize: 20,
            width: '80%',
            height: 50,
            paddingHorizontal: 16,
            marginBottom: 20,
            borderColor: 'rgba(255, 255, 255, 0.3)', // Use translucent white color for the border
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Use translucent white color for the background
            shadowColor: 'rgba(0, 0, 0, 0.2)', // Add a shadow color
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.8,
            shadowRadius: 3,
            elevation: 4, // Add elevation for Android shadow
          }}
          placeholder="First Name"
        />
  {/* INPUT BOX - FIRST NAME*/ }


  {/* INPUT BOX - MIDDLE NAME */ }      
        <TextInput
          style={{
            color: 'black',
            fontSize: 20,
            width: '80%',
            height: 50,
            paddingHorizontal: 16,
            marginBottom: 20,
            borderColor: 'rgba(255, 255, 255, 0.3)', // Use translucent white color for the border
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Use translucent white color for the background
            shadowColor: 'rgba(0, 0, 0, 0.2)', // Add a shadow color
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.8,
            shadowRadius: 3,
            elevation: 4, // Add elevation for Android shadow
          }}
          placeholder="Middle Name"
        />
  {/* INPUT BOX - MIDDLE NAME */ }


  {/* INPUT BOX - LAST NAME */ }        
        <TextInput
          style={{
            color: 'black',
            fontSize: 20,
            width: '80%',
            height: 50,
            paddingHorizontal: 16,
            marginBottom: 20,
            borderColor: 'rgba(255, 255, 255, 0.3)', // Use translucent white color for the border
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Use translucent white color for the background
            shadowColor: 'rgba(0, 0, 0, 0.2)', // Add a shadow color
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.8,
            shadowRadius: 3,
            elevation: 4, // Add elevation for Android shadow
          }}
          placeholder="Last Name"
        />
  {/* INPUT BOX - LAST NAME */ }


  {/* INPUT BOX - ADSRESS */ }
        <TextInput
          style={{
            color: 'black',
            fontSize: 20,
            width: '80%',
            height: 50,
            paddingHorizontal: 16,
            marginBottom: 20,
            borderColor: 'rgba(255, 255, 255, 0.3)', // Use translucent white color for the border
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Use translucent white color for the background
            shadowColor: 'rgba(0, 0, 0, 0.2)', // Add a shadow color
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.8,
            shadowRadius: 3,
            elevation: 4, // Add elevation for Android shadow
          }}
          placeholder="Address"
        />
  {/* INPUT BOX - ADDRESS */ }

  
  {/* INPUT BOX - BIRTHDAY */ }
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 24, color: 'white', marginRight: 10 }}>BIRTHDATE:</Text>

        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={onChange}
          />
        )}

        {!showPicker && (
          <Pressable onPress={toggleDatepicker}>
            <TextInput
              style={{
                color: 'black',
                fontSize: 20,
                flex: 1,
                height: 60,
                paddingHorizontal: 16,
                borderColor: 'rgba(255, 255, 255, 0.3)',
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.8,
                shadowRadius: 3,
                elevation: 4,
              }}
              placeholder="Enter Date"
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
              placeholderTextColor="#11182744"
              editable={false}
            />
          </Pressable>
        )}
    </View>
  {/* INPUT BOX - BIRTHDAY */ }

  {/* INPUT BOX - EMAIL */ }    
    <TextInput
      style={{
        color: 'black',
        fontSize: 20,
        fontSize: 20,
        width: '80%',
        height: 50,
        paddingHorizontal: 16,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Use translucent white color
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)', // Add a border color
      
      
      }}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
    />
  {/* INPUT BOX - EMAIL */ }   


  {/* PAGINATION */ } 
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
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
          backgroundColor: 'rgba(128, 128, 128, 0.3)', // Use translucent grey color
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
          backgroundColor: 'rgba(128, 128, 128, 0.3)', // Use translucent grey color
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
          backgroundColor: 'rgba(128, 128, 128, 0.3)', // Use translucent grey color
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
        navigation.navigate('SECONDREGISTER');
      }}
    > 
      <Text className="text-black text-lg font-semibold">CONTINUE</Text>
    </TouchableOpacity>
  {/* CONTINUE BUTTON */ } 






    </View>
    </LinearGradient>
  );
};

export default FirstRegisterView;
