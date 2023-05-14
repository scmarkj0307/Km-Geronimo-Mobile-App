import React, { useState,useEffect,useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text,Image  } from 'react-native';
import {useNavigation} from "@react-navigation/core"
import { LinearGradient } from 'expo-linear-gradient';
import {Formik} from 'formik';
import * as Yup from 'yup';



const SignupSchema = Yup.object().shape({
  firstInput: Yup.string()
    .required('Missing!'),
  secondInput: Yup.string()
    .required('Missing!'),
  thirdInput: Yup.string()
    .required('Missing!'),
  fourthInput: Yup.string()
    .required('Missing!'),
})

const FourthRegisterView = ({ route }) => {
  const navigation = useNavigation();
  const { mobile } = route.params;

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp,setOtp] = useState({1:'',2:'',3:'',4:''})
 

  return (
    
 /*BACKGROUND COLOR*/ 
 <LinearGradient
 colors={['#008080', '#008080']}
 start={{ x: 0, y: 0 }}
 end={{ x: 1, y: 1 }}
 style={{ flex: 1 }}
>
{/*BACKGROUND COLOR*/ }


<Formik initialValues={{
      firsInput:'',
      secondInput:'',
      thirdInput: '',
      fourthInput:'',
    }}
    validationSchema={SignupSchema}
    onSubmit={values => Alert.alert(JSON.stringify(values))}
    >
      {({values,errors,touched,handleSubmit,handleChange,setFieldTouched,isValid}) => (


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
     Enter a 4-digit code sent to <Text style={{color: 'yellow'}}>{mobile}</Text> to verify your account.
   </Text>
{/* OTP REMINDER-------------------------------------------------------------------------------*/ }




{/*OTP TEXT INPUTS */ }
<View style={{flexDirection: 'row',justifyContent: 'space-between',marginHorizontal: 30,marginTop: 20,marginRight:10}}>
      <View style={{flex: 1,borderRadius: 20,overflow: 'hidden',marginRight: 10}}>
        <TextInput
          style={{backgroundColor: 'white',paddingHorizontal: 10,height: 80,fontSize:40,textAlign: 'center'}}
          placeholder=""
          value={values.firstInput}
          keyboardType='phone-pad'
          maxLength={1}
          ref={firstInput}
          onChangeText={(text) => {
              handleChange('firstInput')(text);
              setOtp({ ...otp, 1: text });
              text && secondInput.current.focus();
          }}
          onBlur={()=>setFieldTouched('firstInput')}
        />
        
     
      </View>
      <View style={{flex: 1,borderRadius: 20,overflow: 'hidden',marginRight: 10}}>
        <TextInput
          style={{backgroundColor: 'white',paddingHorizontal: 10,height: 80,fontSize:40,textAlign: 'center'}}
          placeholder=""
          value={values.secondInput}
          keyboardType='phone-pad'
          maxLength={1}
          ref={secondInput}
          onChangeText={(text) => {
              handleChange('secondInput')(text);
              setOtp({...otp,2: text})
              text ? thirdInput.current.focus() : firstInput.current.focus();
          }}
          onBlur={()=>setFieldTouched('secondInput')}
        />
       
      </View>
      <View style={{flex: 1,borderRadius: 20,overflow: 'hidden',marginRight: 10}}>
        <TextInput
          style={{backgroundColor: 'white',paddingHorizontal: 10,height: 80,fontSize:40,textAlign: 'center'}}
          placeholder=""
          value={values.thirdInput}
          keyboardType='phone-pad'
          maxLength={1}
          ref={thirdInput}
          onChangeText={(text) => {
              handleChange('thirdInput')(text);
              setOtp({...otp,3: text})
              text ? fourthInput.current.focus() : secondInput.current.focus();
          }}
          onBlur={()=>setFieldTouched('thirdInput')}
        />
        
      </View>
      <View style={{flex: 1,borderRadius: 20,overflow: 'hidden',marginRight: 10}}>
        <TextInput
          style={{backgroundColor: 'white',paddingHorizontal: 10,height: 80,fontSize:40,textAlign: 'center'}}
          placeholder=""
          value={values.fourthInput}
          keyboardType='phone-pad'
          maxLength={1}
          ref={fourthInput}
          onChangeText={(text) => {
              handleChange('fourthInput')(text);
              setOtp({...otp,4: text})
              !text && thirdInput.current.focus();
          }}
          onBlur={()=>setFieldTouched('fourthInput')}
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
      disabled={!isValid || (!touched.firstInput && !touched.secondInput && !touched.thirdInput && !touched.fourthInput)}
      style={{
        marginTop: '5%',
        marginBottom: '8%',
        backgroundColor: !isValid  || (!touched.firstInput && !touched.secondInput && !touched.thirdInput && !touched.fourthInput) ? 'rgba(200, 255, 255, 0.5)' : 'rgba(200, 255, 255, 0.9)'  , // Use translucent white color
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
      onPress={() => navigation.navigate("Home")}


      
      
    > 
      <Text className="text-black text-lg font-semibold">CONTINUE</Text>
      </TouchableOpacity>
  {/* CONTINUE BUTTON */ } 





    </View>
    )}
    </Formik>
    </LinearGradient>
  );
};

export default FourthRegisterView;


