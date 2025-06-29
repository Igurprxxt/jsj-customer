/* eslint-disable import/order */
import React, { useRef } from 'react';
import { View } from 'react-native';
import { DefaultText as Text } from '~/components/common/DefaultText';
import RNPickerSelect from 'react-native-picker-select';
import { useTheme } from '~/context/ThemeContext';
import theme from '~/utils/theme';

const SelectPicker = ({
  data,
  placeholder,
  title,
  value,
  isEdit,
  inputIOS,
  inputAndroid,
  onSelect,
}: any) => {
  const { colorScheme }: any = useTheme();
  const pickerRef: any = useRef(null);

  return (
    <View className="">
      {title && (
        <Text className=" font-interMedium text-lg text-tertiary dark:text-white ">{title}</Text>
      )}
      <View className="dark:border-1 mt-2 flex-1   rounded-lg border-[1px] border-gray-300 bg-white dark:border-analytics_card  dark:bg-transparent">
        <RNPickerSelect
          onValueChange={onSelect}
          ref={pickerRef}
          value={value}
          items={data}
          disabled={isEdit}
          fixAndroidTouchableBug
          useNativeAndroidPickerStyle
          placeholder={{ label: placeholder, color: theme.colors.gray }}
          darkTheme={colorScheme === 'dark'}
          style={{
            inputIOS,
            inputAndroid: {
              ...inputAndroid,
              color: colorScheme === 'dark' ? theme.colors.white : theme.colors.black,
            },
          }}
          dropdownItemStyle={
            {
              // color: theme.colors.gray,
            }
          }
          activeItemStyle={
            {
              // color: theme.colors.gray,
            }
          }
          textInputProps={{
            onPress: () => pickerRef.current?.togglePicker(),
          }}
        />
      </View>
    </View>
  );
};

export default SelectPicker;
