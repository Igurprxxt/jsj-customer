import { useColorScheme } from 'nativewind';
import React, { useMemo } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { DefaultText as Text } from '../DefaultText';
import theme from '~/utils/theme';

const DropdownComponent = ({ setState, selectedRows }: any) => {
  const { colorScheme } = useColorScheme();
  const data = useMemo(
    () => [
      { label: 'Delete', value: 'all', placeHolder: 'Bulk Actions', visible: true },
      {
        label: 'Delete selected',
        value: 'selected',
        placeHolder: 'Bulk Actions',
        visible: Array.from(selectedRows)?.length > 0,
      },
    ],
    [selectedRows]
  );
  return (
    <Dropdown
      style={[
        styles.dropdown,
        {
          backgroundColor:
            colorScheme === 'dark' ? theme.colors.dashboard_card : theme.colors.white,
          borderColor: colorScheme === 'dark' ? '#cbd5e0' : '#cbd5e0',
          borderWidth: 0.3,
        },
      ]}
      placeholderStyle={[
        styles.placeholderStyle,
        {
          color:
            colorScheme === 'dark' ? theme.colors.dashboard_card_text : theme.colors.analytics_card,
          fontSize: Platform.OS === 'ios' ? 13 : 15,
          fontFamily: theme.font.poppinsMedium,
        },
      ]}
      selectedTextStyle={[
        styles.selectedTextStyle,
        {
          color:
            colorScheme === 'dark' ? theme.colors.dashboard_card_text : theme.colors.analytics_card,
        },
      ]}
      data={data?.filter((item) => item.visible)}
      maxHeight={400}
      labelField="placeHolder"
      valueField="placeHolder"
      placeholder="Bulk Actions"
      renderItem={(item) => {
        return (
          <View className="flex-row items-center gap-2 p-3">
            <Text className="text-md font-poppinsMedium text-black dark:text-dashboard_card_text">
              {item.label}
            </Text>
          </View>
        );
      }}
      onChange={(item) => {
        setState({
          open: true,
          ...item,
        });
      }}
      containerStyle={[
        styles.dropdownContainer,
        {
          backgroundColor:
            colorScheme === 'dark' ? theme.colors.dashboard_card : theme.colors.white,
        },
      ]}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: 43,
    borderColor: '#cbd5e0',
    borderWidth: 0.3,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 130,
  },
  dropdownContainer: {
    borderColor: '#cbd5e0', // Add border color to dropdown container
    borderWidth: 0.3, // Add border width to dropdown container
    borderRadius: 5, // Apply border radius to the dropdown container
    overflow: 'hidden', // Clip content to prevent it from overflowing the rounded corners
  },
  dropdownItem: {
    backgroundColor: theme.colors.drawer,
    padding: 12,
  },
  dropdownItemText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: theme.colors.dashboard_card_text,
  },
  placeholderStyle: {
    fontSize: 13,
    color: theme.colors.dashboard_card_text,
    fontFamily: 'Poppins-Medium',
  },
  selectedTextStyle: {
    fontSize: 13,
    color: theme.colors.dashboard_card_text,
    fontFamily: 'Poppins-Medium',
  },
});
