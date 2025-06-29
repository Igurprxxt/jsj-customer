import { useActionSheet } from '@expo/react-native-action-sheet';
import { Href, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '~/context/AuthContext';
import { applogo } from '~/image';
import { routes } from '~/utils/routes';

const SettingsScreen = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const { showActionSheetWithOptions } = useActionSheet();

  const SettingsItem = ({ title, description, onPress, showBorder = true }: any) => (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center justify-between px-5 py-4 ${
        showBorder ? 'border-b border-gray-100 dark:border-gray-700' : ''
      }`}>
      <View className="flex-1 pr-3">
        <Text className="text-base font-semibold text-gray-900 dark:text-white">{title}</Text>
        <Text className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</Text>
      </View>
      <Text className="text-2xl text-gray-400">›</Text>
    </TouchableOpacity>
  );

  const appVersion = '1.0.0';

  const confirmLogout = () => {
    showActionSheetWithOptions(
      {
        options: ['Cancel', 'Log Out'],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
        title: 'Are you sure you want to log out?',
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          logout();
        }
      }
    );
  };
  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-4 pb-6">
      <View className="mx-auto w-full max-w-xl flex-1">
        {/* Header card */}
        <View className="mb-6 rounded-2xl bg-white p-6">
          <View className="mb-4 items-center">
            <Image source={applogo} resizeMode="contain" className="h-16 w-32" />
          </View>

          <SettingsItem
            title="Profile"
            description="Manage your personal information and account settings"
            onPress={() => router.push(routes.user.profile as Href)}
          />
          {/* <SettingsItem
            title="Change Password"
            description="Update your account password for security"
            onPress={() => {}}
          /> */}
          <SettingsItem
            title="Logout"
            description="Sign out from your account"
            onPress={confirmLogout}
            showBorder={false}
          />
        </View>

        {/* Footer Info */}
        <View className="mt-auto items-center">
          <Text className="mb-1 text-sm text-gray-400 dark:text-gray-500">
            App Version: {appVersion}
          </Text>
          <TouchableOpacity>
            <Text className="text-sm font-medium text-blue-600 underline">Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
