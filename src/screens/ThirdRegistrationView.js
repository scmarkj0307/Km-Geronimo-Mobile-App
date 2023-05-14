import React, { useState,useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text,Image,Alert  } from 'react-native';
import {useNavigation} from "@react-navigation/core"
import { LinearGradient } from 'expo-linear-gradient';
import {Formik} from 'formik';
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

  
  
  
})

const ThirdRegisterView = () => {
  const navigation = useNavigation();
 

  return (
    

 <LinearGradient
 colors={['#008080', '#008080']}
 start={{ x: 0, y: 0 }}
 end={{ x: 1, y: 1 }}
 style={{ flex: 1 }}
>



<View className="flex-1 justify-flex-start items-center mt-12">



<View style={{ marginRight: 18, flexDirection: 'row', alignItems: 'center' }}>
   <Image
     source={require('../../assets/km-logo-teeth.png')}
     style={{ width: 40, height: 40 }}
   />
   <Text style={{ color: 'white', marginLeft: 5, fontWeight: 'bold', fontSize: 20 }}>KM-GERONIMO</Text>
</View>



<Text Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white',marginTop: 5, marginBottom: 5, textAlign: 'center' }}>
      Add profile
    </Text>
    


  <View style={{ flexDirection: 'row' }}>
    <TouchableOpacity
      style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      
    >
      <Image
        source={require('../../assets/noprofile.png')}
        style={{
          width: 80,
          height: 80,
        }}
      />
    </TouchableOpacity>
  </View>


  

 <Text Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white',marginTop: 15, marginBottom: 5, textAlign: 'center' }}>
     Setup your account
   </Text>
   <Text style={{ fontSize: 18,color: 'white', marginBottom: 20, textAlign: 'center' }}>
     Reuired information to account creation.
   </Text>
  
  <Formik initialValues={{
      username:'',
      password:'',
      confirmPassword: '',
    }}
      validationSchema={SignupSchema}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
    >
      {({values,errors,touched,handleSubmit,handleChange,setFieldTouched,isValid}) => (

        <View className="flex-1 justify-flex items-center mt-1">
          <TextInput
            style={{
              color: 'black',
              fontSize: 18,
              width: 250,
              height: 50,
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
      
          <TextInput
            style={{
              color: 'black',
              fontSize: 18,
              width: 250,
              height: 50,
              paddingHorizontal: 16,
              marginTop: 10,
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
            value={values.password  }
            onChangeText={handleChange('password')}
            onBlur={()=>setFieldTouched('password')}
          />
            {touched.password && errors.password && (
            <Text style={{color:'red'}}>{errors.password}</Text>
          )}
      
          <TextInput
            style={{
              color: 'black',
              fontSize: 18,
              width: 250,
              height: 50,
              paddingHorizontal: 16,
              marginTop: 10,
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
      

    
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop:40 }}>
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
 

    
      <TouchableOpacity
      disabled={!isValid}
      style={{
        marginTop: '5%',
        marginBottom: '8%',
        backgroundColor: !isValid ? 'rgba(200, 255, 255, 0.5)' : 'rgba(200, 255, 255, 0.9)'  , // Use translucent white color
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
        elevation: 4, // Add elevation for Android shadow
      }}
      onPress={() => {{handleSubmit}
        navigation.navigate('FOURTHREGISTER');
      }}
      
      
    > 
      <Text className="text-black text-lg font-semibold">CONTINUE</Text>
      </TouchableOpacity>
      
      </View>

    )}
    </Formik>
    




    </View>
    </LinearGradient>
    
  );
};

export default ThirdRegisterView;