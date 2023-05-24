import React, { useState,useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, TextInput, TouchableOpacity, Text,Image, Pressable } from 'react-native';
import {useNavigation} from "@react-navigation/core"
import { LinearGradient } from 'expo-linear-gradient';
import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  mobile: Yup.string()
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
    .matches( /^[0-9]+$/ ,'Must be only digits')
    .required('Please enter mobile number.'),
 
  
  
  
})


const SecondRegisterView = () => {
  const navigation = useNavigation();

  const [selectedItem,setSelectedItem] = useState(null)

  const selectedData = [
    {value: 'Male', imageLink: require('../../assets/male.png')},
    {value: 'Female', imageLink: require('../../assets/female.png')}
  ]

   
  return (
    
/*BACKGROUND COLOR*/ 
  <LinearGradient
  colors={['#0891b2', '#0891b2']}
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

{/* TEXT REMINDER AND INSTRUCTION FOR PHONE NUMBER */ }
<Text Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white',marginTop: 10, marginBottom: 5, textAlign: 'center' }}>
      Please enter phone number
    </Text>
    <Text style={{ fontSize: 18,color: 'white', marginBottom: 10, textAlign: 'center' }}>
      Enter your 10 digit mobile no. i.e (9454121817).
    </Text>
{/* TEXT REMINDER AND INSTRUCTION-------------------------------------------------------------------------------*/ }

<Formik initialValues={{
      mobile:'',
    }}
      validationSchema={SignupSchema}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
    >
      {({values,errors,touched,handleSubmit,handleChange,setFieldTouched,isValid}) => (
      
    
      <View className="flex-1 justify-flex items-center mt-1">

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

    {/* TEXT REMINDER AND INSTRUCTION FOR GENDER */ }
  <Text Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white',marginTop: 20, marginBottom: 5, textAlign: 'center' }}>
      Please select a gender
    </Text>
    <Text style={{ fontSize: 18,color: 'white', marginBottom: 5, textAlign: 'center' }}>
      Reuired information to account creation.
    </Text>
{/* TEXT REMINDER AND INSTRUCTION-------------------------------------------------------------------------------*/ }

{/*GENDER BUTTONS */ }
  <View style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 50 }}>
    {selectedData.map(item =>{

      return (
        <Pressable 
        key={item.value} 
        onPress={() => setSelectedItem(item.value)} 
        style={{
                width: 150,
                height:150,
                borderRadius: 75,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 35, // Add margin to create space between the images
        }}>
          {selectedItem === item.value ? 
          <View 
            style={{
              position: 'absolute',
              width: 150,
              height: 150,
              zIndex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 75,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderWidth: 5,
              borderColor: 'cyan',
            }}>
            <FontAwesome name="check-circle" size={20} color={"white"}/>
          </View>:null}

          <Image
              source={item.imageLink}
              style={{
                width: 120,
                height: 120,
              }}
            />
        </Pressable>
      )
    })}
  </View>
{/*GENDER BUTTONS */ }

<View>
  {selectedItem && 
    <View style={{marginVertical:10,justifyContent: 'center',alignItems: 'center',}}>
    <Text style={{fontSize: 18,color: 'white'}}>You have selected:</Text>
    <Text style={{fontSize: 24,color: 'cyan', textAlign: 'center'}}>{selectedItem}</Text>
    </View>}
</View>

    {/*PAGINATION*/}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop:15 }}>
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
    {/*PAGINATION*/}

    {/*CONTINUE BUTTON*/}
      <TouchableOpacity
      disabled={!isValid || (!touched.mobile || !selectedItem)}
      style={{
        marginTop: '5%',
        marginBottom: '8%',
        backgroundColor: !isValid || (!touched.mobile) || !selectedItem ? 'rgba(200, 255, 255, 0.3)' : 'rgba(200, 255, 255, 0.9)'  , // Use translucent white color
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
        navigation.navigate('THIRDREGISTER',{ mobile: values.mobile });
      }}> 
      <Text className="text-black text-lg font-semibold">CONTINUE</Text>
      </TouchableOpacity>
    {/*CONTINUE BUTTON*/}


 
            
    </View>

)}
</Formik>


    </View>
    </LinearGradient>
  );
};

export default SecondRegisterView;