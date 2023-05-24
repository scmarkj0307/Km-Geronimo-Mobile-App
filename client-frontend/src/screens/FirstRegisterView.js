import React, { useState,useEffect,useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, Pressable,Platform,Image,SafeAreaView  } from 'react-native';
import {useNavigation} from "@react-navigation/core"
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Please enter your first name.'),
  middleName: Yup.string()
    .required('Please enter your middle name.'),
  lastName: Yup.string()
    .required('Please enter your last name.'),
  address: Yup.string()
    .required('Please enter your address.'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Please enter your email address.'),
})


const FirstRegisterView = () => {

  const navigation = useNavigation();

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

  const firstNameRef = useRef();
  const middleNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const emailRef = useRef();

  const focusNextField = (nextRef) => {
    if (nextRef && nextRef.current) {
      nextRef.current.focus();
    }
  };

  

  return (

  
    
  /*BACKGROUND COLOR*/ 
    <LinearGradient
      colors={['#0891b2', '#0891b2']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
  {/*BACKGROUND COLOR*/ }


  <Formik initialValues={{
      firstName:'',
      middleName:'',
      lastName:'',
      address:'',
      email:'',
    }}
      validationSchema={SignupSchema}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
    >
      {({values,errors,touched,handleSubmit,handleChange,setFieldTouched,isValid}) => (

 
    <SafeAreaView className="flex-1 justify-flex-start items-center mt-12">
  

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
      <Text Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white',marginTop: 5, marginBottom: 5, textAlign: 'center' }}>
          Please fill the boxes below
        </Text>
        <Text style={{ fontSize: 18,color: 'white', marginBottom: 20, textAlign: 'center' }}>
          Reuired information to account creation.
        </Text>
  {/* TEXT REMINDER AND INSTRUCTION-------------------------------------------------------------------------------*/ }

  <View style={{ position: 'relative'}}>
  {/* INPUT BOX - EMAIL */ }    
  <TextInput
      style={{
              color: 'black',
              fontSize: 18,
              width: 315,
              height: 40,
              paddingHorizontal: 16,
              marginTop: 0,
              marginBottom: 2,
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
      ref={emailRef}
      placeholder="Email"
          value={values.email}
            onChangeText={handleChange('email')}
            onBlur={()=>setFieldTouched('email')}
        />
          {touched.email && errors.email && (
            <Text style={{color:'red'}}>{errors.email}</Text>
          )}
  {/* INPUT BOX - EMAIL */ }   
  
  {/* INPUT BOX - FIRST NAME */ }
      <TextInput
          style={{
             color: 'black',
              fontSize: 18,
              width: 315,
              height: 40,
              paddingHorizontal: 16,
              marginTop: 5,
              marginBottom: 2,
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
          ref={firstNameRef}
          placeholder="First Name"
          value={values.firstName}
          onChangeText={(text) => {
            handleChange('firstName')(text);
            if (text.length >= 20) {
              focusNextField(middleNameRef);
            }
          }}
          onSubmitEditing={() => focusNextField(middleNameRef)}
          returnKeyType="next"
          onBlur={()=>setFieldTouched('firstName')}
        />
          {touched.firstName && errors.firstName && (
            <Text style={{color:'red'}}>{errors.firstName}</Text>
          )}

  {/* INPUT BOX - FIRST NAME*/ }


  {/* INPUT BOX - MIDDLE NAME */ }      
        <TextInput
          style={{
              color: 'black',
              fontSize: 18,
              width: 315,
              height: 40,
              paddingHorizontal: 16,
              marginTop: 5,
              marginBottom: 2,
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
          ref={middleNameRef}
          placeholder="Middle Name"
          value={values.middleName}
          onChangeText={(text) => {
            handleChange('middleName')(text);
            if (text.length >= 20) {
              focusNextField(lastNameRef);
            }
          }}
          onSubmitEditing={() => focusNextField(lastNameRef)}
          returnKeyType="next"
          onBlur={()=>setFieldTouched('middleName')}
        />
          {touched.middleName && errors.middleName && (
            <Text style={{color:'red'}}>{errors.middleName}</Text>
          )}
  {/* INPUT BOX - MIDDLE NAME */ }


  {/* INPUT BOX - LAST NAME */ }        
        <TextInput
          style={{
              color: 'black',
              fontSize: 18,
              width: 315,
              height: 40,
              paddingHorizontal: 16,
              marginTop: 5,
              marginBottom: 2,
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
          ref={lastNameRef}
          placeholder="Last Name"
          value={values.lastName}
          onChangeText={(text) => {
              handleChange('lastName')(text);
              if (text.length >= 20) {
                focusNextField(addressRef);
              }
            }}
            onSubmitEditing={() => focusNextField(addressRef)}
            returnKeyType="next"
          onBlur={()=>setFieldTouched('lastName')}
        />
          {touched.lastName && errors.lastName && (
            <Text style={{color:'red'}}>{errors.lastName}</Text>
          )}
  {/* INPUT BOX - LAST NAME */ }


  {/* INPUT BOX - ADDRESS */ }
        <TextInput
          style={{
              color: 'black',
              fontSize: 18,
              width: 315,
              height: 40,
              paddingHorizontal: 16,
              marginTop: 5,
              marginBottom: 2,
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
          ref={addressRef}
          placeholder="Address"
          value={values.address}
          onChangeText={(text) => {
            handleChange('address')(text);
          }}
          returnKeyType="next"
          onBlur={()=>setFieldTouched('address')}
        />
          {touched.address && errors.address && (
            <Text style={{color:'red'}}>{errors.address}</Text>
          )}
  {/* INPUT BOX - ADDRESS */ }
</View>
  
  {/* INPUT BOX - BIRTHDAY */ }
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
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
      disabled={!isValid || (!touched.firstName && !touched.middleName && !touched.lastName && !touched.address && !touched.dateOfBirth && !touched.email )}
      style={{
        marginTop: '5%',
        backgroundColor: !isValid || (!touched.firstName && !touched.middleName && !touched.lastName && !touched.address && !touched.dateOfBirth && !touched.email) ? 'rgba(200, 255, 255, 0.3)' : 'rgba(200, 255, 255, 0.9)'  , // Use translucent white color
        width: 250,
        height: 55,
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
        elevation: 20, // Add elevation for Android shadow
      }}
      onPress={() => {
        navigation.navigate('SECONDREGISTER');
      }}
    > 
      <Text className="text-black text-lg font-semibold">CONTINUE</Text>
    </TouchableOpacity>
  {/* CONTINUE BUTTON */ } 






    </SafeAreaView>
    )}
</Formik>

    </LinearGradient>

  );
};

export default FirstRegisterView;
