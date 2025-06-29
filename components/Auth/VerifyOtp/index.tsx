/* eslint-disable import/order */
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import theme from '~/utils/theme';
import { pwd_background, logo, applogo } from '~/image';
import { Href, Link, useLocalSearchParams, useRouter } from 'expo-router';
import { OTPInput } from '~/components/UI/OtpInput';
import { useAuth } from '~/context/AuthContext';
import { routes } from '~/utils/routes';
import DynamicButton from '~/components/DynamicButton';
import { DefaultText as Text } from '~/components/common/DefaultText';
import { useTheme } from '~/context/ThemeContext';

const VerifyOtp = () => {
  const { email } = useLocalSearchParams();
  const { isDarkTheme, showToast } = useTheme();
  const scrollViewRef = useRef<ScrollView>(null);

  const [codes, setCodes] = useState(['', '', '', ''] as any);
  const { verify, forgotPassword, verifyOtpLoading } = useAuth();
  const router = useRouter();
  const [errorMessages, setErrorMessages] = useState<string[] | undefined>(undefined);
  const refs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const resendOtp = () => {
    Keyboard.dismiss();
    forgotPassword(
      {
        body: {
          email,
        },
      },
      () => {
        showToast('Otp has been sent successfully to your email', 'success');
      },
      (err: any) => {
        showToast(err?.message, 'error');
      }
    );
  };

  const onChangeCode = (text: string, index: number) => {
    const newCodes = [...codes];
    newCodes[index] = text;
    setCodes(newCodes);
    setErrorMessages(undefined);
  };
  const handleVerifyOtp = () => {
    const encode = `${email}:${codes?.join('')}`;
    router.push(routes?.auth?.update_password as Href);
    router.setParams({ email });
    // verify(
    //   {
    //     pathParams: {
    //       token: btoa(encode),
    //     },
    //   },
    //   () => {
    //     router.push(routes?.auth?.update_password as Href);
    //     router.setParams({ email });
    //     showToast('Otp has been verified successfully', 'success');
    //   },
    //   (err: any) => {
    //     showToast(err?.message, 'error');
    //   }
    // );
  };

  return (
    <ImageBackground className="flex-1 flex-col" source={isDarkTheme ? pwd_background : ''}>
      <SafeAreaView
        edges={['top', 'left', 'right']}
        className="flex-1 flex-col bg-white dark:bg-black">
        <View className="flex-row justify-end px-8 pt-4">
          <Image source={applogo} className="h-[40px] w-[120px]" resizeMode="contain" />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            ref={scrollViewRef}>
            <View className="mt-12 flex-col gap-y-6 p-6">
              <Text className="text-3xl font-semibold text-tertiary dark:text-white">
                Enter the code!
              </Text>
              <OTPInput
                codes={codes!}
                errorMessages={errorMessages}
                onChangeCode={onChangeCode}
                refs={refs}
                config={{
                  backgroundColor: theme.colors.transparent,
                  textColor: isDarkTheme ? 'white' : '',
                  borderColor: theme.colors.gray,
                  errorColor: theme.colors.white,
                  focusColor: theme.colors.primary,
                }}
              />

              <DynamicButton
                onPress={handleVerifyOtp}
                title="Verify OTP"
                isLoading={verifyOtpLoading}
                titleClassName="!text-white !font-poppinsMedium !text-lg"
              />

              <TouchableOpacity
                onPress={resendOtp}
                className="gap 2 flex flex-row items-center self-center">
                <Text className="text-center font-semibold text-tertiary dark:text-white">
                  Resend OTP
                </Text>
              </TouchableOpacity>
              <View className="flex flex-row items-center gap-2 self-center">
                <Text className="text-center font-poppinsMedium text-sm text-tertiary dark:text-[#c7c5c58B]">
                  Don't want to reset your password?{' '}
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

export default VerifyOtp;
