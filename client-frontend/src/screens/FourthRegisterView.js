import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; 

const SignupSchema = Yup.object().shape({
  firstInput: Yup.string().length(1, 'Invalid OTP').required('Required'),
  secondInput: Yup.string().length(1, 'Invalid OTP').required('Required'),
  thirdInput: Yup.string().length(1, 'Invalid OTP').required('Required'),
  fourthInput: Yup.string().length(1, 'Invalid OTP').required('Required'),
});

const FourthRegisterView = ({ route }) => {
  const navigation = useNavigation();
  const { mobile } = route.params;

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    let intervalId = null;
    if (countdown > 0) {
      intervalId = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [countdown]);

  const handleResendOTP = async () => {
    setIsResending(true);
    setCountdown(60); // Start a 60-second countdown

    try {
      // Make an HTTP request to resend the OTP
      // Replace the endpoint with the actual resend OTP endpoint
      await axios.post('http://localhost:5000/resend-otp', { mobile: '1234567890' });
      console.log('OTP resent successfully');
    } catch (error) {
      console.log('Error:', error);
    }

    setIsResending(false);
  };


  return (
    /*BACKGROUND COLOR*/
    <LinearGradient
      colors={['#0891b2', '#0891b2']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      {/*BACKGROUND COLOR*/}

      <Formik
        initialValues={{ firstInput: '', secondInput: '', thirdInput: '', fourthInput: '' }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          const { firstInput, secondInput, thirdInput, fourthInput } = values;
          const otpCode = `${firstInput}${secondInput}${thirdInput}${fourthInput}`;

          try {
            const response = await axios.get(`http://localhost:5000/check/${mobile}/${otpCode}`);
            // Handle successful verification
            if (response.data.status === 'approved') {
              navigation.navigate('Home');
            } else {
              // Handle verification failure
              console.log('Verification failed');
            }
          } catch (error) {
            console.log('Error:', error);
          }

          setSubmitting(false);
        }}
      >
      
        {({ values, errors, touched, handleSubmit, handleChange, setFieldTouched, isValid }) => (
          <View className="flex-1 justify-flex-start items-center mt-12">
            {/* MAIN CONTAINER*/}

            {/* LOGO AND HEADER TITLE */}
            <View style={{ marginRight: 18, flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../../assets/km-logo-teeth.png')}
                style={{ width: 40, height: 40 }}
              />
              <Text style={{ color: 'white', marginLeft: 5, fontWeight: 'bold', fontSize: 20 }}>
                KM-GERONIMO
              </Text>
            </View>
            {/* LOGO AND HEADER TITLE*/}

            {/* OTP REMINDER */}
            <Text
              Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 40,
                marginBottom: 5,
                textAlign: 'center',
              }}
            >
              OTP SENT!
            </Text>
            <Text style={{ fontSize: 18, color: 'white', marginBottom: 20, textAlign: 'center' ,marginHorizontal: 20}}>
              Enter a 4-digit code sent to{' '}
              <Text style={{ color: 'yellow' }}>{mobile}</Text> to verify your account.
            </Text>
            {/* OTP REMINDER-------------------------------------------------------------------------------*/}

            {/* OTP TEXT INPUTS */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 30,
                marginTop: 20,
                marginRight: 10,
              }}
            >
              <View style={{ flex: 1, borderRadius: 20, overflow: 'hidden', marginRight: 10 }}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    height: 80,
                    fontSize: 40,
                    textAlign: 'center',
                  }}
                  placeholder=""
                  onChangeText={text=>{
                    text && secondInput.current.focus()
                  }}
                  ref={firstInput}
                  maxLength={1}
                  keyboardType="number-pad"
              
                />
              </View>
              <View style={{ flex: 1, borderRadius: 20, overflow: 'hidden', marginRight: 10 }}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    height: 80,
                    fontSize: 40,
                    textAlign: 'center',
                  }}
                  placeholder=""
                  onChangeText={text=>{
                    text ? thirdInput.current.focus() : firstInput.current.focus()
                  }}
                  ref={secondInput}
                  maxLength={1}
                  keyboardType="number-pad"
                />
              </View>
              <View style={{ flex: 1, borderRadius: 20, overflow: 'hidden', marginRight: 10 }}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    height: 80,
                    fontSize: 40,
                    textAlign: 'center',
                  }}
                  placeholder=""
                  ref={thirdInput}
                  maxLength={1}
                  onChangeText={text=>{
                    text ? fourthInput.current.focus() : secondInput.current.focus()
                  }}
                  keyboardType="phone-pad"
                />
              </View>
              <View style={{ flex: 1, borderRadius: 20, overflow: 'hidden' }}>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    height: 80,
                    fontSize: 40,
                    textAlign: 'center',
                  }}
                  placeholder=""
                  ref={fourthInput}
                  maxLength={1}
                  onChangeText={text=>{
                    !text && thirdInput.current.focus()
                  }}
                  keyboardType="number-pad"
                />
              </View>
            </View>
            {/* OTP TEXT INPUTS ------------------------------------------------------------------------------*/}

            {/* PAGINATION */ } 
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 70 }}>
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

            {/* CONTINUE BUTTON */}
            <TouchableOpacity
              onPress={async () => {
                const { firstInput, secondInput, thirdInput, fourthInput } = values;
                const otpCode = `${firstInput}${secondInput}${thirdInput}${fourthInput}`;

                try {
                  const response = await axios.get(`http://localhost:5000/check/${mobile}/${otpCode}`);
                  // Handle successful verification
                  if (response.data.status === 'approved') {
                    navigation.navigate('Home');
                  } else {
                    // Handle verification failure
                    console.log('Verification failed');
                  }
                } catch (error) {
                  console.log('Error:', error);
                }
              }}
              disabled={!isValid}
            >
              <View
                style={{
                  marginTop: '5%',
                  backgroundColor: 'yellow',
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
              >
                <Text className="text-black text-lg font-semibold">CREATE ACCOUNT</Text>
              </View>
            </TouchableOpacity>
            {/* CONTINUE BUTTON -------------------------------------------------------------------------------*/}

            {/* RESEND OTP */}
              <View style={{ alignItems: 'center', marginTop: 40 }}>
                {countdown === 0 ? (
                  <TouchableOpacity onPress={handleResendOTP} disabled={isResending}>
                    <Text style={{color: 'white', fontSize: 16, textDecorationLine: 'underline'}}>
                      Resend OTP
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <Text style={{color: 'red', fontSize: 16}}>
                    Resend OTP in {countdown}s
                  </Text>
                )}
              </View>
            {/* RESEND OTP ----------------------------------------------------------------------------------*/}

            {/* BACK BUTTON */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('THIRDREGISTER');
              }}
              style={{ marginTop: 20 }}
            >
              <Text style={{ color: 'white', fontSize: 16, textDecorationLine: 'underline' }}>
                Back
              </Text>
            </TouchableOpacity>
            {/* BACK BUTTON ----------------------------------------------------------------------------------*/}

             {/* BACK BUTTON */}
             <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}
              style={{ marginTop: 50, marginHorizontal: 30, textAlign: 'center' }}
            >
              <Text style={{ color: 'red', fontSize: 16, textDecorationLine: 'underline' }}>
                IF NOT CONNECTED TO THE SERVER PLEASE CLICK ME!!!!!!!!!!!!!
              </Text>
            </TouchableOpacity>
            {/* BACK BUTTON ----------------------------------------------------------------------------------*/}

          </View>
        )}
      </Formik>
    </LinearGradient>
  );
};

export default FourthRegisterView;
