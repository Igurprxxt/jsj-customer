/* eslint-disable import/order */
import { KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View } from 'react-native';
import { DefaultText as Text } from '~/components/common/DefaultText';
import React, { useEffect, useState } from 'react';
import CustomHeader from '~/components/UI/CustomHeader';
import { round } from 'lodash';
import DefaultTextInput from '~/components/common/DefaultTextInput';
import theme from '~/utils/theme';
import { useColorScheme } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context';

const PositionCalculator = () => {
  const [isOption, setIsOption] = useState(false);
  const [price, setPrice] = useState<any>('');
  const [shares, setShares] = useState<any>('');
  const { colorScheme } = useColorScheme();
  const [positionSize, setPositionSize] = useState<any>('');
  const [manualEntry, setManualEntry] = useState('');
  const [contractMultiplier, setContractMultiplier] = useState<any>(100);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (price) {
      const multiplier = isOption ? contractMultiplier : 1;
      //if price and shares are entered, and also manualEntry is not positionSize then calculate positionSize
      if (shares && manualEntry !== 'positionSize') {
        setPositionSize(round(Number(price) * Number(shares) * multiplier, 2));
        //if price and positionSize are entered, and  also manualEntry is not shares then calculate shares
      } else if (positionSize && manualEntry !== 'shares') {
        setShares(
          round(
            Number(isOption ? positionSize / contractMultiplier : positionSize) / Number(price),
            2
          )
        );
        //if price and positionSize are entered, and also manualEntry is not price then calculate price
      } else if (positionSize && manualEntry !== 'price') {
        setPrice(round(Number(positionSize) / Number(shares), 2));
        // if price and positionSize are entered, and also manualEntry is not contractMultiplier then calculate positionSize
      } else if (positionSize && manualEntry !== 'contractMultiplier') {
        setPositionSize(round(Number(price) * Number(shares) * multiplier, 2));
        // if price and shares are entered, then calculate positionSize
      } else if (shares) {
        setPositionSize(round(Number(price) * Number(shares) * multiplier, 2));
      }
    }
  }, [price, shares, positionSize, isOption, contractMultiplier, manualEntry]);

  const onChange = (value: string, type: string) => {
    setManualEntry(type);
    setError(null);
    switch (type) {
      case 'price':
        setPrice(value || '');
        break;
      case 'shares':
        setShares(value || '');
        setPositionSize('');
        break;
      case 'positionSize':
        setPositionSize(value || '');
        setShares('');
        break;
    }
  };

  const handleContractMultiplierChange = (value: string) => {
    if (!value || Number(value) <= 0) {
      setError('Contract multiplier must be at least 1');
    } else {
      setError(null);
    }
    setManualEntry('contractMultiplier');
    setContractMultiplier(value);
  };
  return (
    <SafeAreaView className="flex-1 flex-col bg-white dark:bg-black">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined} // Experiment with 'position' or 'height'
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0} // Adjust as needed
      >
        <ScrollView
          className="flex-1 bg-white p-3 dark:bg-black"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled">
          <CustomHeader />
          <Text className="mt-5 text-2xl font-semibold text-black dark:text-white">
            Position Calculator
          </Text>
          <Text className="mt-2 leading-normal text-gray-600 dark:text-[#CBD5E2]">
            Calculate your position size, number of shares, or total position value for stocks and
            options.
          </Text>
          <View className="mt-4 flex-row justify-between rounded-md border border-gray-800 p-[3px]">
            <TouchableOpacity
              onPress={() => {
                setIsOption(false);
                setManualEntry('');
              }}
              className={`w-[50%] rounded-md ${!isOption ? 'bg-primary' : ''} px-8 py-2`}>
              <Text
                className={`text-center text-lg font-semibold ${!isOption ? 'text-white' : 'text-tertiary dark:text-white'}`}>
                Stocks
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsOption(true);
                setManualEntry('');
              }}
              className={`w-[50%] rounded-md px-8 py-2 ${isOption ? 'bg-primary' : ''}`}>
              <Text
                className={`text-center text-lg font-semibold ${isOption ? 'text-white' : 'text-tertiary dark:text-white'}`}>
                Options
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-6 flex-col gap-y-3">
            <DefaultTextInput
              title={isOption ? 'Contract Price' : 'Stock Price'}
              prefix={<Text className="px-2 dark:text-white">$</Text>}
              value={price?.toString()}
              textInputClassName="px-0"
              onChangeText={(e) => onChange(e, 'price')}
              className="w-full rounded-lg  border-[1px] border-gray-300  bg-white dark:border-[1px] dark:border-analytics_card dark:bg-transparent dark:text-white"
              placeholder={!isOption ? 'Enter stock price' : 'Enter contract price'}
              titleClassName="text-base font-poppinsMedium text-tertiary dark:text-white"
              containerClassName="mt-3"
              placeholderTextColor={
                colorScheme === 'dark'
                  ? theme.colors.dashboard_card_text
                  : theme.colors.analytics_card
              }
            />

            <DefaultTextInput
              title={!isOption ? 'Number of shares' : 'Number of contracts'}
              value={shares?.toString()}
              onChangeText={(text: any) => {
                onChange(text, 'shares');
              }}
              className="w-full rounded-lg  border-[1px] border-gray-300  bg-white dark:border-[1px] dark:border-analytics_card dark:bg-transparent dark:text-white"
              placeholder={!isOption ? 'Enter number of shares' : 'Enter number of contracts'}
              titleClassName="text-base font-poppinsMedium text-tertiary dark:text-white"
              containerClassName="mt-3"
              placeholderTextColor={
                colorScheme === 'dark'
                  ? theme.colors.dashboard_card_text
                  : theme.colors.analytics_card
              }
            />

            <DefaultTextInput
              prefix={<Text className="px-2 dark:text-white">$</Text>}
              title="Position Size"
              textInputClassName="px-0"
              value={positionSize?.toString()}
              onChangeText={(text: any) => {
                onChange(text, 'positionSize');
              }}
              className="w-full rounded-lg  border-[1px] border-gray-300  bg-white dark:border-[1px] dark:border-analytics_card dark:bg-transparent dark:text-white"
              placeholder="Enter position size"
              titleClassName="text-base font-poppinsMedium text-tertiary dark:text-white"
              containerClassName="mt-3"
              placeholderTextColor={
                colorScheme === 'dark'
                  ? theme.colors.dashboard_card_text
                  : theme.colors.analytics_card
              }
            />
            {isOption ? (
              <DefaultTextInput
                title="Contract Multiplier"
                value={contractMultiplier?.toString()}
                onChangeText={(text: any) => {
                  handleContractMultiplierChange(text);
                }}
                className="w-full rounded-lg  border-[1px] border-gray-300  bg-white dark:border-[1px] dark:border-analytics_card dark:bg-transparent dark:text-white"
                placeholder="Enter contract multiplier"
                titleClassName="text-base font-poppinsMedium text-tertiary dark:text-white"
                containerClassName="mt-3"
                placeholderTextColor={
                  colorScheme === 'dark'
                    ? theme.colors.dashboard_card_text
                    : theme.colors.analytics_card
                }
              />
            ) : (
              <></>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PositionCalculator;
