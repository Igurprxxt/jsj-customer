import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '~/context/ThemeContext';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Camera, CameraView } from 'expo-camera';
import Input from '~/components/UI/Input';
import { useAuth } from '~/context/AuthContext';
import { Href, useLocalSearchParams, useRouter } from 'expo-router';
import { routes } from '~/utils/routes';

const UserVerification = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const params = useLocalSearchParams();
  const { setUser } = useAuth();
  const [userData, setUserData] = useState<any>({});
  const [customerId, setCustomerId] = useState('');
  const { showToast } = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (params?.data) {
      const parsedData = JSON.parse(params.data as string);
      setUserData(parsedData);
    }
  }, [params?.data]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const handleEnterCustomerId = () => {
    setShowCamera(false);
    setShowInput(!showInput);
  };

  const onSubmitInput = () => {
    if (!customerId) {
      showToast('Please fill customer id!', 'error');
      return;
    }
    if (customerId === userData?.customer?.customerId) {
      const aa = { ...userData?.data, customerId: userData?.customer?.customerId };
      setUser(aa);

      router.replace(routes.tabs.home as Href);
      showToast('Verified successfully!', 'success');
    } else {
      showToast('Invalid customer id!', 'error');
    }
  };

  const handleOpenCamera = () => {
    setShowInput(false);
    setShowCamera(!showCamera);
  };

  if (hasPermission === null) {
    return (
      <View>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-start bg-white px-6 pt-24 dark:bg-black">
      <Text className="mb-8 text-center text-2xl font-semibold text-black dark:text-white">
        Welcome! Choose how you'd like to proceed
      </Text>
      {showCamera ? (
        <CameraView style={{ height: 400, width: 350, borderRadius: 10, marginVertical: 4 }} />
      ) : null}

      <TouchableOpacity
        onPress={handleOpenCamera}
        className="mb-4 w-full flex-row items-center justify-center rounded-2xl bg-primary py-4">
        <AntDesign name="qrcode" size={24} color="white" className="mr-2" />
        <Text className="text-lg font-medium text-white">
          {showCamera ? 'Hide Camera' : 'Scan QR Code'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleEnterCustomerId}
        className="w-full flex-row items-center justify-center rounded-2xl border-2 border-primary py-4">
        <FontAwesome name="keyboard-o" size={24} className="mr-2" color={'#FFAC1C'} />
        <Text className="text-lg font-medium text-primary dark:text-blue-400">
          Enter Customer ID
        </Text>
      </TouchableOpacity>
      {showInput ? (
        <>
          <Input
            inputStyle={{
              marginBottom: 8,
            }}
            placeholder="Enter customer id"
            onChangeText={(text) => {
              setCustomerId(text);
            }}
          />
          <TouchableOpacity
            onPress={onSubmitInput}
            className="w-full flex-row items-center justify-center rounded-lg bg-primary py-2">
            <Text className="text-lg font-medium text-white dark:text-blue-400">Submit</Text>
          </TouchableOpacity>
        </>
      ) : null}
    </View>
  );
};

export default UserVerification;
