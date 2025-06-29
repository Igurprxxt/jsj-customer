import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Svg, Path, Circle, Rect } from 'react-native-svg';

export default function Offline() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <View className="flex-1 items-center justify-center px-6">
        <View className="relative mb-8">
          <Svg width={150} height={150} viewBox="0 0 150 150">
            <Circle cx="30" cy="120" r="4" fill="#FF6B81" />
            <Circle cx="120" cy="100" r="6" fill="#4ECDC4" />
            <Circle cx="40" cy="40" r="5" fill="#4ECDC4" />
            <Circle cx="130" cy="50" r="5" fill="#FFD166" />
            <Rect x="35" y="35" width="30" height="4" rx="2" fill="#4361EE" />
            <Circle cx="110" cy="130" r="6" stroke="#4361EE" strokeWidth="2" fill="none" />
            <Path
              d="M60,100 C60,70 90,70 90,100 L100,120 L50,120 Z"
              fill="#4361EE"
              stroke="#4361EE"
              strokeWidth="2"
            />
            <Rect x="70" y="120" width="10" height="20" fill="#4361EE" />
            <Circle cx="75" cy="85" r="15" fill="#FFD166" />
            <Path d="M95,75 Q105,65 115,75" stroke="#E0E0E0" strokeWidth="2" fill="none" />
            <Path d="M95,65 Q110,50 125,65" stroke="#E0E0E0" strokeWidth="2" fill="none" />
            <Path d="M95,55 Q115,35 135,55" stroke="#E0E0E0" strokeWidth="2" fill="none" />
            <Path d="M75,85 L85,75" stroke="#FFD166" strokeWidth="4" strokeLinecap="round" />
          </Svg>
        </View>

        <Text className="mb-2 text-3xl font-bold text-[#4361EE]">No Internet :(</Text>
        <Text className="mb-8 text-center text-gray-400">
          Please check your internet connection,{'\n'}
          you are in offline now.
        </Text>
      </View>
    </SafeAreaView>
  );
}
