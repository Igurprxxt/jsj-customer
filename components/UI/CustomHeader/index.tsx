/* eslint-disable import/order */
import { TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { DefaultText as Text } from '~/components/common/DefaultText';
import { useColorScheme } from 'nativewind';

const CustomHeader = () => {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  return (
    <TouchableOpacity onPress={() => router.back()} className="flex-row items-center gap-2">
      <Ionicons name="arrow-back" size={24} color={colorScheme === 'dark' ? 'white' : 'black'} />
      <Text className=" text-xl font-semibold dark:text-white">Back</Text>
    </TouchableOpacity>
  );
};

export default CustomHeader;
