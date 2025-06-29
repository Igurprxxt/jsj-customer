import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { applogo, logo } from '~/image';

const SplashScreen = () => {
  return (
    <View className="flex-1 flex-col">
      <StatusBar style="light" />
      <View className="flex-1 flex-col justify-center">
        <Image source={applogo} className="h-[10%] w-full" resizeMode="contain" />
      </View>
    </View>
  );
};

export default SplashScreen;
