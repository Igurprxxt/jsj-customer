/* eslint-disable import/order */
import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import theme from '~/utils/theme';

const NoData = ({
  text = 'No data available',
  desc = 'Please select different filters or date range',
}: any) => {
  return (
    <View className="flex h-64 items-center justify-center gap-2">
      <Ionicons
        name="warning-outline"
        size={44}
        color={theme.colors.dashboard_card_text}
        className="text-white"
      />
      <Text className="font-poppinsMedium text-xl text-tertiary dark:text-dashboard_card_text">
        {text}
      </Text>
      <Text className="text-center font-poppinsMedium text-sm text-tertiary dark:text-dashboard_card_text">
        {desc}
      </Text>
    </View>
  );
};

export default NoData;
