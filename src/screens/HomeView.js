import React from 'react';
import {useNavigation} from "@react-navigation/core"
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeView = () => {
    const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#008080', '#008080']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginBottom: 40, marginTop:25  }}>
        <View
          style={{
            marginTop: '15%',
            backgroundColor: 'white',
            width: 325,
            height: 325,
            borderRadius: 162.5,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <Image
            source={require('../../assets/kmnamelogo.png')} // Replace with your logo image source
            style={{
              width: '80%',
              aspectRatio: 0.7,
              borderRadius: 50,
            }}
            resizeMode="contain"
          />
        </View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20, textAlign: 'center' }}>
          Let's Get started!
        </Text>
        <Text style={{ fontSize: 18,color: 'white', marginBottom: 20, textAlign: 'center' }}>
          Login to enjoy the features we've provided and stay healthy.
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("LOGIN")}
          style={{
            backgroundColor: 'white',
            width: '80%',
            paddingVertical: 16,
            borderRadius: 10,
            marginBottom: 10,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#008080', fontSize: 18, textAlign: 'center' }}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("REGISTER")}
          style={{
            backgroundColor: 'white',
            width: '80%',
            paddingVertical: 16,
            borderRadius: 10,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#008080', fontSize: 18, textAlign: 'center' }}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HomeView;
