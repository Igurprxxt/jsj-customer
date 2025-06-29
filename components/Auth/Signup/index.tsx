/* eslint-disable import/order */
import { useRouter } from 'expo-router';
import React, { useState, useRef } from 'react';
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DefaultText as Text } from '~/components/common/DefaultText';

import { light_logo, login_background, login_form_background, logo } from '~/image';
import { useAuth } from '~/context/AuthContext';
import DynamicButton from '~/components/DynamicButton';
import { useTheme } from '~/context/ThemeContext';
import { useColorScheme } from 'nativewind';
import DefaultTextInput from '~/components/common/DefaultTextInput';
import theme from '~/utils/theme';

const SignUpComponent = () => {
  const { signUp, signInLoading } = useAuth();
  const { isDarkTheme, showToast } = useTheme();
  const { colorScheme } = useColorScheme();
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
  });
  // Validation functions
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onChangeText = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSignup = () => {
    if (!form.firstName || !form.lastName || !form.email || !form.userName) {
      showToast('Please fill in all fields', 'error');
      return;
    }
    if (!isValidEmail(form.email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    if (form.userName.length < 3) {
      showToast('User handle must be at least 3 characters long', 'error');
      return;
    }
    Keyboard.dismiss();
    const body = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      userHandle: form.userName,
    };
    signUp(
      { body },
      () => {},
      () => {}
    );
  };
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        className="flex-1 flex-col bg-white"
        source={isDarkTheme ? login_background : ''}>
        <SafeAreaView edges={['top', 'left', 'right']} className="flex-1 flex-col">
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined} // Experiment with 'position' or 'height'
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0} // Adjust as needed
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
              ref={scrollViewRef}>
              <View className="relative top-[10%]">
                <Image
                  source={colorScheme === 'dark' ? logo : light_logo}
                  className="h-[20%] w-full"
                  resizeMode="contain"
                />
                <Text className="my-8 text-center font-poppinsMedium text-xl font-semibold dark:text-white">
                  Join now and elevate {'\n'} your trading game - SIGN UP!
                </Text>
              </View>
              <View className="flex-1 rounded-t-3xl bg-gray-100 dark:bg-transparent">
                <ImageBackground
                  className="flex-1 flex-col gap-y-1 px-8 py-4"
                  style={[styles.backgroundStyle, { minHeight: 700 }]} // ADDED minHeight
                  source={isDarkTheme ? login_form_background : ''}>
                  <DefaultTextInput
                    autoCapitalize="none"
                    spellCheck={false}
                    autoCorrect={false}
                    title="First Name"
                    value={form.firstName}
                    onChangeText={(value: any) => onChangeText('firstName', value)}
                    className="w-full rounded-lg border-[1px] border-gray-400  bg-white dark:border-2 dark:border-gray-600 dark:bg-dashboard_card dark:text-white"
                    placeholder="Enter your first name"
                    keyboardType="default"
                    onFocus={() => {
                      // Scroll to the top when the email input is focused
                      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
                    }}
                    placeholderTextColor={
                      colorScheme === 'dark'
                        ? theme.colors.dashboard_card_text
                        : theme.colors.analytics_card
                    }
                    containerClassName="mt-4"
                  />

                  <DefaultTextInput
                    autoCapitalize="none"
                    spellCheck={false}
                    autoCorrect={false}
                    title="Last Name"
                    value={form.lastName}
                    onChangeText={(value: any) => onChangeText('lastName', value)}
                    className="w-full rounded-lg border-[1px] border-gray-400  bg-white dark:border-2 dark:border-gray-600 dark:bg-dashboard_card dark:text-white"
                    placeholder="Enter your last name"
                    keyboardType="default"
                    onFocus={() => {
                      // Scroll to the top when the email input is focused
                      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
                    }}
                    placeholderTextColor={
                      colorScheme === 'dark'
                        ? theme.colors.dashboard_card_text
                        : theme.colors.analytics_card
                    }
                    containerClassName="mt-4"
                  />

                  <DefaultTextInput
                    title="Email"
                    value={form.email}
                    onChangeText={(value: any) => onChangeText('email', value)}
                    className="w-full rounded-lg border-[1px] border-gray-400  bg-white dark:border-2 dark:border-gray-600 dark:bg-dashboard_card dark:text-white"
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onFocus={() => {
                      // Scroll to the top when the email input is focused
                      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
                    }}
                    placeholderTextColor={
                      colorScheme === 'dark'
                        ? theme.colors.dashboard_card_text
                        : theme.colors.analytics_card
                    }
                    containerClassName="mt-4"
                  />

                  <DefaultTextInput
                    autoCapitalize="none"
                    spellCheck={false}
                    autoCorrect={false}
                    title="User Handle"
                    value={form.userName}
                    onChangeText={(value: any) => onChangeText('userName', value)}
                    className="w-full rounded-lg border-[1px] border-gray-400  bg-white dark:border-2 dark:border-gray-600 dark:bg-dashboard_card dark:text-white"
                    placeholder="Enter your user handle"
                    keyboardType="default"
                    onFocus={() => {
                      // Scroll to the top when the email input is focused
                      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
                    }}
                    placeholderTextColor={
                      colorScheme === 'dark'
                        ? theme.colors.dashboard_card_text
                        : theme.colors.analytics_card
                    }
                    containerClassName="mt-4"
                  />

                  <DynamicButton
                    className="mt-5 rounded-xl"
                    titleClassName="!text-white !font-poppinsMedium !text-base"
                    onPress={handleSignup}
                    title="Sign Up"
                    isLoading={signInLoading}
                  />
                  <Text className="my-4 text-center font-interMedium text-tertiary dark:text-[#c7c5c5]">
                    Already have an account?{' '}
                    <Text
                      className="font-interMedium font-semibold text-black dark:text-white"
                      onPress={() => {
                        router.back();
                      }}>
                      Login
                    </Text>
                  </Text>
                </ImageBackground>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default SignUpComponent;

const styles = StyleSheet.create({
  backgroundStyle: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
  },
  checkbox: {
    height: 16,
    width: 16,
    marginLeft: 4,
  },
});
