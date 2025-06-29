/* eslint-disable import/order */
import { Href, Link, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AuthHeader from '../../UI/AuthHeader';
import { DefaultText as Text } from '~/components/common/DefaultText';
import Input from '../../UI/Input';

import { useAuth } from '~/context/AuthContext';
import { useTheme } from '~/context/ThemeContext';
import { pwd_background } from '~/image';
import { routes } from '~/utils/routes';
import DynamicButton from '~/components/DynamicButton';

const ForgotPassword = () => {
  const { forgotPassword, forgotLoading } = useAuth();
  const [email, setEmail] = useState('');
  const { isDarkTheme, showToast } = useTheme();
  const scrollViewRef = useRef<ScrollView>(null);

  const router = useRouter();
  const forgot = () => {
    Keyboard.dismiss();
    router.push(routes.auth.verifyOtp as Href);
    router.setParams({ email });
    // forgotPassword(
    //   {
    //     body: {
    //       email,
    //     },
    //   },
    //   () => {
    //     router.push(routes.auth.verifyOtp as Href);
    //     router.setParams({ email });
    //     showToast('Otp has been sent successfully to your email', 'success');
    //   },
    //   (err: any) => {
    //     showToast(err?.message, 'error');
    //   }
    // );
  };
  return (
    <ImageBackground
      className="flex-1 flex-col bg-white dark:bg-transparent"
      source={isDarkTheme ? pwd_background : ''}>
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
            <AuthHeader />
            <View className="mt-12 flex-col gap-y-6 p-6">
              <Text className="font-poppinsMedium text-3xl font-semibold dark:text-white">
                Forgot Password!
              </Text>
              <Input
                onChangeText={setEmail}
                className="w-full py-4 text-tertiary dark:text-white"
                keyboardType="email-address"
                autoCapitalize="none"
                spellCheck={false}
                autoCorrect={false}
                title="Email"
                placeholder="Enter your email"
                value={email}
              />

              <DynamicButton
                titleClassName="!text-white !font-poppinsMedium !text-lg"
                onPress={forgot}
                title="Send Reset Link"
                isLoading={forgotLoading}
              />

              <View className="flex flex-row items-center gap-2 self-center">
                <Text className="my-4 text-center font-poppinsMedium text-sm text-tertiary dark:text-[#c7c5c58B]">
                  Don't want to reset your password?
                </Text>
                <Link href={routes.auth.login as Href} asChild>
                  <TouchableOpacity>
                    <Text className="font-poppinsMedium font-medium text-primary">Sign In</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ForgotPassword;
