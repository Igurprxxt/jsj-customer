/* eslint-disable import/order */
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { DefaultText as Text } from '~/components/common/DefaultText';
import { useAuth } from '~/context/AuthContext';
import { encode } from 'js-base64';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomHeader from '~/components/UI/CustomHeader';
import DefaultTextInput from '~/components/common/DefaultTextInput';
import theme from '~/utils/theme';
import { useColorScheme } from 'nativewind';
import { useTheme } from '~/context/ThemeContext';

const Security = () => {
  const router = useRouter();
  const { showToast } = useTheme();
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [secureTextNewPassword, setSecureTextNewPassword] = useState(false);
  const [secureTextConfirmPassword, setSecureTextConfirmPassword] = useState(false);
  const { userResetPassword, btnLoading } = useAuth();
  const [password, setPassword] = useState<any>({
    currentPassword: '',
    newPassword: '',
    confirmedPassword: '',
  });
  const { colorScheme } = useColorScheme();

  const [errors, setErrors] = useState<any>({
    currentPassword: '',
    newPassword: '',
    confirmedPassword: '',
  });

  const onChangeText = (field: any, value: string) => {
    const newErrors = { ...errors };
    const newPassword = { ...password, [field]: value };

    if (field === 'newPassword' && value.length < 6) {
      newErrors.newPassword = 'Your new password must be more than 6 characters';
    } else if (field === 'confirmedPassword' && value !== password.newPassword) {
      newErrors.confirmedPassword = "Passwords don't match";
    } else if (!value) {
      newErrors[field] = 'Password is required!';
    } else {
      newErrors[field] = '';
    }
    setErrors(newErrors);
    setPassword(newPassword);
  };

  const onUpdatePassword = () => {
    Keyboard.dismiss();
    if (
      errors?.currentPassword === '' &&
      errors?.newPassword === '' &&
      errors?.confirmedPassword === '' &&
      password.currentPassword &&
      password.newPassword
    ) {
      userResetPassword(
        {
          pathParams: {
            token: encode(`${password.currentPassword}:${password.newPassword}`),
          },
        },
        () => {
          router.back();
          showToast('Password updated successfully', 'success');
        },
        (err: any) => {
          showToast(err?.message, 'error');
        }
      );
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-white px-4 dark:bg-black">
      <CustomHeader />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled">
            <View className="my-6 ">
              <Text className="mb-1 text-2xl font-semibold dark:text-white">Security</Text>
              <Text className="font-poppinsMedium text-black dark:text-tertiary">
                Update your password here
              </Text>

              <View className="mt-4">
                <DefaultTextInput
                  title="Current Password"
                  secureTextEntry={!secureTextEntry}
                  onChangeText={(value: any) => onChangeText('currentPassword', value)}
                  value={password.currentPassword}
                  className="w-full rounded-lg border-[1px] border-gray-400  bg-white dark:border-2 dark:border-gray-600 dark:bg-dashboard_card dark:text-white"
                  placeholder="Enter your password"
                  placeholderTextColor={
                    colorScheme === 'dark'
                      ? theme.colors.dashboard_card_text
                      : theme.colors.analytics_card
                  }
                  suffix={
                    <Ionicons
                      name={secureTextEntry ? 'eye' : 'eye-off'}
                      size={20}
                      className="px-2 dark:!text-white"
                      onPress={() => setSecureTextEntry(!secureTextEntry)}
                    />
                  }
                  containerClassName="mt-4"
                />

                <DefaultTextInput
                  title="New Password"
                  secureTextEntry={!secureTextNewPassword}
                  onChangeText={(value: any) => onChangeText('newPassword', value)}
                  value={password.newPassword}
                  className="w-full rounded-lg border-[1px] border-gray-400  bg-white dark:border-2 dark:border-gray-600 dark:bg-dashboard_card dark:text-white"
                  placeholder="Enter your password"
                  placeholderTextColor={
                    colorScheme === 'dark'
                      ? theme.colors.dashboard_card_text
                      : theme.colors.analytics_card
                  }
                  suffix={
                    <Ionicons
                      name={secureTextNewPassword ? 'eye' : 'eye-off'}
                      size={20}
                      className="px-2 dark:!text-white"
                      onPress={() => setSecureTextNewPassword(!secureTextNewPassword)}
                    />
                  }
                  containerClassName="mt-4"
                />

                <DefaultTextInput
                  title="Confirm Password"
                  secureTextEntry={!secureTextConfirmPassword}
                  onChangeText={(value: any) => onChangeText('confirmedPassword', value)}
                  value={password.confirmedPassword}
                  className="w-full rounded-lg border-[1px] border-gray-400  bg-white dark:border-2 dark:border-gray-600 dark:bg-dashboard_card dark:text-white"
                  placeholder="Enter your password"
                  containerClassName="mt-4"
                  placeholderTextColor={
                    colorScheme === 'dark'
                      ? theme.colors.dashboard_card_text
                      : theme.colors.analytics_card
                  }
                  suffix={
                    <Ionicons
                      name={secureTextConfirmPassword ? 'eye' : 'eye-off'}
                      size={20}
                      className="px-2 dark:!text-white"
                      onPress={() => setSecureTextConfirmPassword(!secureTextConfirmPassword)}
                    />
                  }
                />
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            className=" mb-8 mt-2 flex-row items-center justify-center gap-2 rounded-lg bg-primary p-4"
            onPress={() => {
              onUpdatePassword();
            }}>
            {btnLoading && <ActivityIndicator color="#fff" />}
            <Text className="text-center font-poppinsMedium text-white">Update password</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Security;
