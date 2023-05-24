import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import {useNavigation} from "@react-navigation/core"
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';


const LoginView = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    
  <LinearGradient
    colors={['white', 'white']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{ flex: 1 }}
  >
    <View className="flex-1 justify-flex-start items-center ">
      <Image
        source={require('../../assets/kmnamelogo.png')} 
        style={{
          width: '80%',
          height: '20%',
          marginTop: '10%',
          marginBottom: '10%',
        }}
        resizeMode="contain"
      />

      <TextInput
        style={{
          width: '80%',
          height: 50,
          paddingHorizontal: 16,
          marginBottom: 20,
          borderColor: '#888',
          borderWidth: 1,
          borderRadius: 10,
        }}
        placeholder="Username or Email"
        value={email}
        onChangeText={setEmail}
      />

      <View style={{ position: 'relative', width: '80%', marginBottom: 20 }}>
        <TextInput
          style={{
            width: '100%',
            height: 50,
            paddingHorizontal: 16,
            borderColor: '#888',
            borderWidth: 1,
            borderRadius: 10,
          }}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
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

      <TouchableOpacity
        style={{ marginTop: 10 }}
        onPress={() => {
          // Implement your "Forgot Password" logic or navigation here
        }}
      >
        <Text style={{ color: '#06b6d4', fontSize: 16 }}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: '10%',
          backgroundColor: '#0891b2',
          width: '80%',
          height: '8%',
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onPress={() => {
        navigation.navigate('MAIN');
      }}
      >
        <Text className="text-white text-lg font-semibold">Login</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Text style={{ color: 'black', fontSize: 16 }}>Don't have an account?</Text>
        <TouchableOpacity
          style={{ marginLeft: 5 }}
          onPress={() => {
            navigation.navigate("REGISTER")
          }}
        >
          <Text style={{ color: '#06b6d4', fontSize: 16, fontWeight: 'bold' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
    </LinearGradient>
  );
};

export default LoginView;


