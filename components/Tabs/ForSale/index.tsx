import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import CustomHeader from '~/components/UI/CustomHeader';
import Header from '~/components/Header';
import ScreenHeader from '~/components/ScreenHeader';

export default function ForSaleScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'We need camera roll permissions to upload images');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmit = (data: any) => {
    console.log('Submitted:', { ...data, image });
    Alert.alert('Success', 'Item posted for sale!');
  };

  return (
    <View className="flex-1 bg-white p-6 dark:bg-black">
      <ScreenHeader title="For Sale" />
      {/* Name */}
      <Text className="mb-1 text-gray-700 dark:text-gray-300">Name</Text>
      <Controller
        control={control}
        name="name"
        rules={{ required: 'Name is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="mb-2 rounded-xl border border-gray-300 bg-gray-50 p-4 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            placeholder="Enter item name"
            placeholderTextColor="#888"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.name && <Text className="mb-2 text-red-500">{errors.name.message}</Text>}

      {/* Amount */}
      <Text className="mb-1 text-gray-700 dark:text-gray-300">Amount</Text>
      <Controller
        control={control}
        name="amount"
        rules={{ required: 'Amount is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            keyboardType="numeric"
            className="mb-2 rounded-xl border border-gray-300 bg-gray-50 p-4 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            placeholder="Enter price"
            placeholderTextColor="#888"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.amount && <Text className="mb-2 text-red-500">{errors.amount.message}</Text>}

      {/* Description */}
      <Text className="mb-1 text-gray-700 dark:text-gray-300">Description</Text>
      <Controller
        control={control}
        name="description"
        rules={{ required: 'Description is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            multiline
            numberOfLines={3}
            className="mb-2 rounded-xl border border-gray-300 bg-gray-50 p-4 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            placeholder="Enter item description"
            placeholderTextColor="#888"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.description && (
        <Text className="mb-2 text-red-500">{errors.description.message}</Text>
      )}

      {/* Image Upload */}
      <TouchableOpacity
        onPress={pickImage}
        className="mb-4 mt-4 items-center rounded-xl bg-blue-600 py-4 dark:bg-blue-500">
        <Text className="font-medium text-white">Upload Image</Text>
      </TouchableOpacity>
      {image && (
        <Image source={{ uri: image }} className="mb-4 h-48 w-full rounded-xl" resizeMode="cover" />
      )}

      {/* Submit */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="items-center rounded-xl bg-primary py-3">
        <Text className="text-lg font-semibold text-white">Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
