import React, { useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeView = () => {
  const navigation = useNavigation();
  const logoScaleValue = useRef(new Animated.Value(0)).current;
  const logoOpacityValue = useRef(new Animated.Value(0)).current;
  const logoRotationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startLogoAnimation();
  }, []);

  const startLogoAnimation = () => {
    Animated.parallel([
      Animated.timing(logoScaleValue, {
        toValue: 1,
        duration: 1000, // Animation duration in milliseconds
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacityValue, {
        toValue: 1,
        duration: 1000, // Animation duration in milliseconds
        useNativeDriver: true,
      }),
      Animated.timing(logoRotationValue, {
        toValue: 1,
        duration: 2000, // Animation duration in milliseconds
        easing: Easing.linear, // Easing function for smooth rotation
        useNativeDriver: true,
      }),
    ]).start();
  };

  

  const logoScale = logoScaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  const logoOpacity = logoOpacityValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const logoRotation = logoRotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleLogin = () => {
    // Trigger the button animation
    startButtonAnimation();
  };
  
  const startButtonAnimation = () => {
    Animated.parallel([
      Animated.timing(logoScaleValue, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacityValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Animation complete
      resetLogoAnimation(() => {
        // Animation reset complete, navigate to the next screen
        navigation.navigate('LOGIN');
      });
    });
  };
  
  const resetLogoAnimation = (callback) => {
    Animated.parallel([
      Animated.timing(logoScaleValue, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacityValue, {
        toValue: 1,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(callback);
  };

  

  return (
    <LinearGradient
      colors={['#0891b2', '#0891b2']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginBottom: 40, marginTop: 25 }}>
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
          <Animated.Image
            source={require('../../assets/kmnamelogo.png')}
            style={{
              width: '80%',
              aspectRatio: 0.7,
              borderRadius: 50,
              transform: [{ scale: logoScale }, { rotate: logoRotation }],
              opacity: logoOpacity,
              }}
              resizeMode="contain"
              />
              </View>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20, textAlign: 'center' }}>
              Let's Get started!
              </Text>
              <Text style={{ fontSize: 18, color: 'white', marginBottom: 20, textAlign: 'center' }}>
              Login to enjoy the features we've provided and stay healthy.
              </Text>
              
              <TouchableOpacity
                    onPress={handleLogin}
                    style={{
                      backgroundColor: 'white',
                      width: '80%',
                      paddingVertical: 14,
                      borderRadius: 20,
                      marginBottom: 10,
                      alignItems: 'center',
                    }}
                  >
      <Text style={{ color: '#008080', fontSize: 18, textAlign: 'center' }}>LOGIN</Text>
    </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("REGISTER")}
          style={{
            marginTop: 10,
            backgroundColor:  '#06b6d4',
            width: '80%',
            paddingVertical: 14,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'white', // Add a transparent border color
            shadowColor: 'rgba(0, 128, 128, 0.5)', // Add a shadow color
            shadowOffset: { width: 0, height: 2 }, // Add a shadow offset
            shadowOpacity: 0.8, // Add a shadow opacity
            shadowRadius: 4, // Add a shadow radius
            elevation: 5, // Add an elevation for Android
          }}
        >
          <Text style={{ color: '#008080', fontSize: 18, textAlign: 'center', color:'white' }}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};


export default HomeView;
