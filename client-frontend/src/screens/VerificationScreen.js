import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const VerificationScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerify = async () => {
    try {
      const response = await axios.get(`http://192.168.42.58:5000/verify/${phoneNumber}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheck = async () => {
    try {
      const response = await axios.get(`http://192.168.42.58:5000/check/${phoneNumber}/${verificationCode}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{marginLeft: 20}}>
      <Text>Welcome to Verification Service!</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
        placeholder="Enter phone number"
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
      />
      {phoneNumber && (
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
          placeholder="Enter verification code"
          onChangeText={(text) => setVerificationCode(text)}
          value={verificationCode}
        />
      )}
      <Button title="Verify" onPress={handleVerify} disabled={!phoneNumber} />
      {verificationCode && (
        <Button title="Check" onPress={handleCheck} disabled={!verificationCode} />
      )}
    </View>
  );
};

export default VerificationScreen;