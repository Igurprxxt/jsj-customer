import { View, Text } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ScreenHeader = ({ title, description, back }: any) => {
  const router = useRouter();
  return (
    <View className="mb-4 flex-row justify-center border-b-[0.5px] border-gray-200">
      {back && (
        <AntDesign
          name="left"
          size={20}
          color="black"
          onPress={() => {
            router.back();
          }}
        />
      )}
      <View>
        <Text className="pb-2 text-center font-poppinsMedium text-2xl text-gray-700">{title}</Text>
        {description && (
          <Text className="text-md pb-2 text-center font-poppinsMedium text-gray-500">
            {description}
          </Text>
        )}
      </View>
      {back && <View className="w-4"></View>}
    </View>
  );
};

export default ScreenHeader;
