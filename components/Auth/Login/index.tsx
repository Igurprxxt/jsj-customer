/* eslint-disable import/order */
import { Href, useRouter } from 'expo-router';
import React, { useState, useRef } from 'react';
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DefaultText as Text } from '~/components/common/DefaultText';

import { applogo, login_background } from '~/image';
import { useAuth } from '~/context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import DynamicButton from '~/components/DynamicButton';
import { routes } from '~/utils/routes';
import { useTheme } from '~/context/ThemeContext';
import DefaultTextInput from '~/components/common/DefaultTextInput';
import theme from '~/utils/theme';

const LoginComponent = () => {
  const { login, signInLoading } = useAuth();
  const { isDarkTheme }: any = useTheme();
  const { showToast } = useTheme();
  const [form, setForm] = useState({
    email: 'kumarritik@gmail.com',
    password: '123456',
  });
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const onChangeText = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };
  const handleLogin = () => {
    Keyboard.dismiss();
    const params = {
      email: form.email?.trim(),
      password: form.password?.trim(),
    };

    login(
      params,
      () => {
        showToast('Login Successful!', 'success');
      },
      (err: any) => {
        showToast(err?.message, 'error');
      }
    );
  };

  const scrollViewRef = useRef<ScrollView>(null);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={isDarkTheme ? login_background : ''}
        className="flex-1 bg-white dark:bg-black"
        resizeMode="cover">
        <SafeAreaView className="flex-1 px-4">
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 24 : 0}
            className="flex-1">
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              ref={scrollViewRef}>
              <View className="flex-1 items-center justify-start pt-12">
                <Image source={applogo} className="mt-6 h-16 w-48" resizeMode="contain" />

                <Text className="mt-4 text-center font-poppinsBold text-2xl text-drawer dark:text-white">
                  Welcome Back 👋
                </Text>
                <Text className="mt-1 text-center text-base text-tertiary dark:text-gray-300">
                  Sign in to your account
                </Text>

                {/* Form Container */}

                <View className="mt-8 w-full flex-col gap-y-4">
                  {/* Email */}
                  <DefaultTextInput
                    title="Email"
                    value={form.email}
                    onChangeText={(val) => onChangeText('email', val)}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    containerClassName="w-full"
                    className="rounded-lg border border-gray-300 bg-white dark:border-gray-600 dark:bg-dashboard_card dark:text-white"
                    placeholderTextColor={theme.colors.lightGrey}
                  />

                  {/* Password */}
                  <DefaultTextInput
                    title="Password"
                    value={form.password}
                    onChangeText={(val) => onChangeText('password', val)}
                    placeholder="Enter your password"
                    secureTextEntry={!secureTextEntry}
                    keyboardType="default"
                    containerClassName="w-full"
                    className="rounded-lg border border-gray-300 bg-white dark:border-gray-600 dark:bg-dashboard_card dark:text-white"
                    placeholderTextColor={theme.colors.lightGrey}
                    suffix={
                      <TouchableOpacity
                        className="px-2"
                        onPress={() => setSecureTextEntry(!secureTextEntry)}>
                        <Ionicons
                          name={secureTextEntry ? 'eye' : 'eye-off'}
                          size={20}
                          color="#c7c7c7"
                        />
                      </TouchableOpacity>
                    }
                  />
                </View>

                {/* Forgot Password & Sign In Button */}
                <View className="mt-4 w-full">
                  <View className="mb-2 items-end">
                    <DynamicButton
                      href={routes.auth.forgot_pwd as Href}
                      titleClassName="!text-sm !font-poppinsMedium !text-primary"
                      title="Forgot Password? Request here!"
                      isLoading={signInLoading}
                    />
                  </View>

                  <DynamicButton
                    className="rounded-lg bg-primary py-3"
                    titleClassName="!text-white !font-poppinsMedium !text-base"
                    onPress={handleLogin}
                    title="Sign In"
                    isLoading={signInLoading}
                  />
                </View>

                {/* Footer Help Text */}
                <Text className="mt-6 text-center text-sm text-tertiary dark:text-gray-400">
                  Need Help?{' '}
                  <Text className="font-semibold text-primary">support@jaisaiji.com</Text>
                </Text>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default LoginComponent;

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
