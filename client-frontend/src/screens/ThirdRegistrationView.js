import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TextInput, TouchableOpacity, Text, Image, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/core"
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import * as Yup from 'yup';



  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please enter an username.'),
    password: Yup.string()
      .min(8)
      .required('Please enter your password.')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Must contain minimum 8 characters, at least one uppercase/lowercase letter, number and special characters. '
      ),
    confirmPassword: Yup.string()
    .min(8, 'Confirm Password must be 8 characters long.')
    .oneOf([Yup.ref('password')],'Your Passwords do not match')
    .required('Confirm password is required.'), 

    mobile: Yup.string()
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
    .matches( /^[0-9]+$/ ,'Must be only digits')
    .required('Please enter mobile number.'),
  })

  const ThirdRegisterView = () => {
    const navigation = useNavigation();
    

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };


    const handleFormSubmit = values => {
      Alert.alert('Form Data', JSON.stringify(values), [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('FOURTHREGISTER',{ mobile: values.mobile });
          },
        },
      ]);
    };
    
    
      return (
      

        <LinearGradient
        colors={['#0891b2', '#0891b2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
      
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-flex-start items-center mt-12">
      
      
      
      <View style={{ marginRight: 18, flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../assets/km-logo-teeth.png')}
            style={{ width: 40, height: 40 }}
          />
          <Text style={{ color: 'white', marginLeft: 5, fontWeight: 'bold', fontSize: 20 }}>KM-GERONIMO</Text>
      </View>
      
      
      
        <Text Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white',marginTop: 10, marginBottom: 5, textAlign: 'center' }}>
            Setup your account
          </Text>
          <Text style={{ fontSize: 18,color: 'white', marginBottom: 20, textAlign: 'center' }}>
            Reuired information to account creation.
          </Text>
        
        <Formik initialValues={{
            username:'',
            password:'',
            confirmPassword: '',
            mobile: '',
          }}
            validationSchema={SignupSchema}
            onSubmit={handleFormSubmit}
          >
            {({values,errors,touched,handleSubmit,handleChange,setFieldTouched,isValid}) => (
              
              <View className="flex-1 mt-1">
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
                  placeholder="Username"
                  value={values.username}
                  onChangeText={handleChange('username')}
                  onBlur={()=>setFieldTouched('username')}
                />
                {touched.username && errors.username && (
                  <Text style={{color:'red'}}>{errors.username}</Text>
                )}
            
                <View style={{ position: 'relative', width: '80%',}}>
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
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  value={values.password  }
                  onChangeText={handleChange('password')}
                  onBlur={()=>setFieldTouched('password')}
                />
                  {touched.password && errors.password && (
                  <Text style={{color:'red'}}>{errors.password}</Text>
                )}
                <TouchableOpacity
                    style={{ position: 'absolute', top: 12, right: 12 }}
                    onPress={togglePasswordVisibility}
                  >
                    <Icon
                      name={showPassword ? 'eye-slash' : 'eye'}
                      size={20}
                      color="#777"
                    />
        </TouchableOpacity>
                </View>
            

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
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={()=> setFieldTouched('confirmPassword')}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={{color:'red'}}>{errors.confirmPassword}</Text>
                )}

          {/* TEXT REMINDER AND INSTRUCTION FOR PHONE NUMBER */ }
          <Text Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white',marginTop: 10, marginBottom: 5, textAlign: 'center' }}>
                Please enter phone number
              </Text>
              <Text style={{ fontSize: 18,color: 'white', marginBottom: 10, textAlign: 'center' }}>
                Enter your 10 digit mobile no. i.e (9454121817).
              </Text>
          {/* TEXT REMINDER AND INSTRUCTION-------------------------------------------------------------------------------*/ }

         {/*MOBILE NO. INPUT BOX*/}
          <TextInput
              style={{
                  color: 'black',
                  fontSize: 18,
                  width: 250,
                  height: 50,
                  paddingHorizontal: 16,
                  marginTop: 0,
                  marginBottom: 2,
                  marginLeft: 35,
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
              placeholder="Mobile number"
              keyboardType='phone-pad'
              maxLength={10}
              value={values.mobile}
              onChangeText={handleChange('mobile')}
              onBlur={()=>setFieldTouched('mobile')}
              />
              {touched.mobile && errors.mobile && (
                <Text style={{color:'red'}}>{errors.mobile}</Text>
              )}
        {/*MOBILE NO. INPUT BOX*/}
        
            
      
          {/*PAGINATION */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop:20 }}>
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
        
      
            <View className="flex-1 justify-flex-start items-center">

            <TouchableOpacity
            disabled={!isValid || (!touched.username && !touched.password && !touched.confirmPassword)}
            style={{
              marginTop: '5%',
              marginBottom: '8%',
              backgroundColor: !isValid  || (!touched.username && !touched.password && !touched.confirmPassword) ? 'rgba(200, 255, 255, 0.3)' : 'rgba(200, 255, 255, 0.9)'  , // Use translucent white color
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
            onPress={handleSubmit}
      
      
            
            
          > 
            <Text className="text-black text-lg font-semibold">CONTINUE</Text>
            </TouchableOpacity>
            </View>
            </View>
      
          )}
          </Formik>
          
      
      
      
      
          </View>
          </ScrollView>
          </KeyboardAvoidingView>
          </LinearGradient>
          
        );
    
  };

  export default ThirdRegisterView;