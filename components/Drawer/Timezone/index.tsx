/* eslint-disable import/order */
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Keyboard,
} from 'react-native';
import React, { useState, useEffect, useCallback, memo } from 'react'; // Import useCallback and memo
import { useAuth } from '~/context/AuthContext';
import { timezones } from './timezone';
import { Feather, Ionicons } from '@expo/vector-icons';
import { DefaultText as Text } from '~/components/common/DefaultText';
import CustomHeader from '~/components/UI/CustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import DefaultTextInput from '~/components/common/DefaultTextInput';
import { useColorScheme } from 'nativewind';
import AnimatedDropdownModal from '~/components/common/AnimatedDropdownModal';
import { useTheme } from '~/context/ThemeContext';

const Timezone = memo(() => {
  // Wrap in memo
  const { user, updateProfile, btnLoading } = useAuth();
  const [timezone, setTimezone] = useState(user?.timeZone);
  const [keyword, setKeyword] = useState('');
  const { colorScheme } = useColorScheme();
  const { showToast } = useTheme();
  const [isPickerVisible, setIsPickerVisible] = useState(false); // State for modal visibility
  const [filteredTimezones, setFilteredTimezones] = useState(timezones);

  const onUpdateTimezone = useCallback(async () => {
    // useCallback
    updateProfile(
      {
        body: {
          timeZone: timezone,
        },
      },
      () => {
        showToast('Timezone updated successfully', 'success');
      },
      (err: any) => {
        showToast(err?.message, 'error');
      }
    );
  }, [timezone, updateProfile]); // Dependencies for useCallback

  const togglePicker = useCallback(() => {
    // useCallback
    setKeyword('');
    setFilteredTimezones(timezones);
    setIsPickerVisible(!isPickerVisible);
  }, [isPickerVisible]); // Dependencies for useCallback

  useEffect(() => {
    // Set initial timezone on component mount if user has a timezone
    if (user?.timeZone) {
      setTimezone(user.timeZone);
    }
  }, [user]);

  const handleSearchChange = useCallback((text: any) => {
    // useCallback
    setKeyword(text);
    const filtered = timezones.filter((tz) => tz.label.toLowerCase().includes(text.toLowerCase()));
    setFilteredTimezones(filtered);
  }, []); // Dependencies for useCallback

  const renderItem = useCallback(
    (
      { item }: any // useCallback
    ) => (
      <TouchableOpacity
        className="border-b border-gray-300 py-3 dark:border-gray-600"
        onPress={() => {
          setTimezone(item.value);
          Keyboard.dismiss(); // Dismiss keyboard when item is selected
          setIsPickerVisible(false);
        }}>
        <Text className="font-poppinsMedium text-sm text-tertiary dark:text-white">
          {item.label}
        </Text>
      </TouchableOpacity>
    ),
    []
  ); // Dependencies for useCallback (empty since it doesn't depend on any state)

  return (
    <SafeAreaView className="flex-1 bg-white px-4 dark:bg-black">
      <CustomHeader />
      <View className=" flex-1 justify-between">
        <View className="mb-6 mt-5">
          <Text className="mb-1 text-2xl font-semibold dark:text-white">Timezone</Text>
          <Text className="text-tertiary dark:text-dashboard_card_text">
            Here you can set your timezone
          </Text>
          <TouchableOpacity onPress={togglePicker} className="mt-9">
            <View className=" flex-row items-center  gap-3 rounded-md border-[0.5px] border-gray-300 p-3">
              <Feather name="clock" size={20} color={colorScheme === 'dark' ? 'white' : 'black'} />
              <Text className="flex-1 font-interMedium dark:text-white">{timezone}</Text>
              <Ionicons
                name="chevron-down"
                size={24}
                color={colorScheme === 'dark' ? 'white' : 'black'}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className=" mb-8 mt-2 flex-row justify-center gap-x-2 rounded-lg bg-primary p-3"
          onPress={onUpdateTimezone}>
          {btnLoading && <ActivityIndicator color={'#fff'} />}
          <Text className="text-center font-semibold text-white">Save</Text>
        </TouchableOpacity>
      </View>

      <AnimatedDropdownModal
        open={isPickerVisible}
        togglePicker={togglePicker}
        style={styles.bottomModal}>
        <View className="mt-5 h-[70%] min-h-[70%]  justify-center rounded-md rounded-tl-xl rounded-tr-xl bg-white p-3 pb-10 dark:bg-dashboard_card">
          <DefaultTextInput
            title=""
            value={keyword}
            onChangeText={handleSearchChange}
            className="w-full rounded-lg border-[1px] border-gray-400  dark:border-2 dark:border-gray-600 dark:bg-dashboard_card dark:text-white"
            placeholder="Search timezone"
            placeholderTextColor={colorScheme === 'dark' ? '#ccc' : '#888'}
          />
          <FlatList
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
            data={filteredTimezones}
            renderItem={renderItem}
            keyExtractor={(item) => item.value}
          />
          <TouchableOpacity style={styles.modalButton} onPress={togglePicker}>
            <Text style={styles.modalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </AnimatedDropdownModal>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  modalButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  modalButtonText: {
    color: 'white',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 4,
    backgroundColor: 'white',
  },
});

export default Timezone;
