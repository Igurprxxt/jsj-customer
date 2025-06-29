/* eslint-disable import/order */
import React, { useRef } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import { useTheme } from '~/context/ThemeContext';
import { Entypo } from '@expo/vector-icons';
import { DefaultText as Text } from '~/components/common/DefaultText';

const MultiSelectComponent = ({
  selected,
  setSelected,
  data,
  renderButton,
  renderItem,
  suffix,
  description,
  placeholder,
  containerStyle,
  title,
  prefix,
  inputStyle,
  transparent,
  type,
  customTitle,
}: any) => {
  const { colors } = useTheme();
  const ref: any = useRef(null);
  // const openDropdown = () => {
  //   if (ref.current) {
  //     ref.current.open();
  //   }
  // };

  return (
    <View style={containerStyle} className="mt-3">
      {title && !customTitle && (
        <Text className="mb-1.5 ml-0.5 font-interMedium text-base" style={{ color: colors.text }}>
          {title}
        </Text>
      )}
      {customTitle ? customTitle : null}
      <TouchableWithoutFeedback>
        <View
          className={`flex-row items-center justify-between rounded-lg border border-gray-700 px-4 ${!transparent && 'bg-gray-900'}`} // Tailwind classes for styling
          style={inputStyle}>
          <View className="flex-1 flex-row items-center ">
            {prefix && <View>{prefix}</View>}
            <MultiSelect
              ref={ref}
              // style={styles.dropdown}
              // placeholderStyle={styles.placeholderStyle}
              // selectedTextStyle={styles.selectedTextStyle}
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              renderSelectedItem={(selectedItem) => {
                return (
                  <View className="m-1 flex-row items-center rounded-lg border border-gray-200 bg-gray-300 p-1 dark:border-gray-700 dark:bg-[#0C111D]">
                    <Text className="text-base dark:text-[#CECFD2] ">{selectedItem?.label}</Text>
                    <Entypo name="cross" size={16} className="dark:!text-[#CECFD2]" />
                  </View>
                );
              }}
              containerStyle={{
                backgroundColor: 'black',
                borderWidth: 0.2,
                borderColor: 'gray',
                width: '100%',
                padding: 0,
              }}
              itemTextStyle={
                {
                  // color: 'white',
                }
              }
              renderItem={(item, selected) => (
                <View className="flex-row items-center justify-between bg-dashboard_card_text p-2 dark:bg-dashboard_card">
                  <Text className="text-base dark:text-[#CECFD2]">{item.label}</Text>
                </View>
              )}
              data={data}
              labelField="label"
              valueField="value"
              placeholder="Select item"
              searchPlaceholder="Search..."
              value={selected}
              onChange={(item) => {
                setSelected(item);
              }}
              selectedStyle={styles.selectedStyle}
            />
          </View>
          <View className="absolute right-0">{suffix}</View>
        </View>
      </TouchableWithoutFeedback>
      {description && <Text className="mt-1 text-xs text-tertiary">{description}</Text>}
    </View>
  );
};

export default MultiSelectComponent;

const styles = StyleSheet.create({
  container: { padding: 16 },
  dropdown: {
    height: 50,
  },
  placeholderStyle: {
    fontSize: 16,
  },

  selectedTextStyle: {
    fontSize: 14,
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
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
});
