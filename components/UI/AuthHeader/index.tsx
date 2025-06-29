/* eslint-disable import/order */
import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { applogo, light_logo, logo } from '~/image';
import { DefaultText as Text } from '~/components/common/DefaultText';
import { useColorScheme } from 'nativewind';

const AuthHeader = () => {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  return (
    <View className="m-6 flex-row items-center justify-between">
      <TouchableOpacity
        className="flex-row items-center"
        onPress={() => {
          router.back();
        }}>
        <Ionicons name="chevron-back" size={18} className="dark:!text-[#c7c5c5]" />
        <Text className="font-poppinsMedium dark:text-[#c7c5c5]">Back</Text>
      </TouchableOpacity>
      <Image source={applogo} className="h-[40px] w-[120px]" resizeMode="contain" />
    </View>
  );
};

export default AuthHeader;
