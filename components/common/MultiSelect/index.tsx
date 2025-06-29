/* eslint-disable import/order */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import { useColorScheme } from 'nativewind';
import theme from '~/utils/theme';
import { Ionicons } from '@expo/vector-icons';

const MultiSelectDropdown = ({ data, selectedTags, setSelectedTags, ...props }: any) => {
  const { colorScheme } = useColorScheme();

  const renderItem = (item: any) => {
    return (
      <View className="flex-row items-center   bg-white p-4 dark:bg-dashboard_card">
        <Text className="flex-1 font-poppinsMedium text-sm text-tertiary dark:text-white">
          {item.label}
        </Text>
        {selectedTags?.includes(item.value) ? (
          <Ionicons className="  !text-primary" name="checkmark-done-sharp" size={15} />
        ) : (
          <></>
        )}
      </View>
    );
  };

  return (
    <MultiSelect
      style={[
        styles.dropdown,
        { backgroundColor: colorScheme === 'dark' ? theme.colors.dashboard_card : 'white' },
      ]}
      placeholderStyle={styles.placeholderStyle}
      inputSearchStyle={styles.inputSearchStyle}
      renderRightIcon={() =>
        data?.length ? (
          <Ionicons name="chevron-down" size={20} className="!text-tertiary dark:!text-white" />
        ) : (
          <View />
        )
      }
      data={data}
      labelField="label"
      valueField="value"
      value={selectedTags}
      onChange={(item: any) => {
        setSelectedTags(item);
      }}
      itemContainerStyle={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        gap: 10,
        backgroundColor: colorScheme === 'dark' ? theme.colors.dashboard_card : 'white',
      }}
      fontFamily={theme.font.poppinsMedium}
      renderItem={renderItem}
      renderSelectedItem={(val) => {
        return (
          <View
            style={{
              backgroundColor: colorScheme === 'dark' ? theme.colors.dashboard_card : 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
            className="my-2 mr-2  h-10 flex-row items-center justify-center gap-3 rounded-lg  px-2 dark:bg-dashboard_card ">
            <Text className="text-sm text-tertiary dark:text-white">{val?.label}</Text>
            <Ionicons
              name="close"
              size={20}
              className="!text-tertiary dark:!text-dashboard_card_text"
            />
          </View>
        );
      }}
      {...props}
    />
  );
};

export default MultiSelectDropdown;

const styles = StyleSheet.create({
  dropdown: {
    borderRadius: 5,
    padding: 12,
    // borderWidth: ,
    // borderColor: theme.colors.dashboard_card_text,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,

    // elevation: 2,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
});
