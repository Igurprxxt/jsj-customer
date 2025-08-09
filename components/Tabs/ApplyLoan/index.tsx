import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Pressable, FlatList } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { AntDesign } from '@expo/vector-icons';
import ScreenHeader from '~/components/ScreenHeader';

const loanTypes = ['Home Loan', 'Personal Loan', 'Car Loan', 'Education Loan'];

export default function ApplyLoan() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedLoan, setSelectedLoan] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const onSubmit = (data: any) => {
    console.log({ ...data, loanType: selectedLoan });
    alert('Form submitted successfully');
  };

  return (
    <View className="flex-1 bg-white px-6 py-8 dark:bg-black">
      <ScreenHeader
        title="Request for another account"
        description="Get your loan approved in less than 24 hours"
        back
      />
      <Text className="mb-4 text-gray-500">
        Kindly fill the form and we will contact you shortly.
      </Text>
      {/* First Name */}
      <Text className="mb-1 text-gray-700 dark:text-gray-300">First Name</Text>
      <Controller
        name="firstName"
        control={control}
        rules={{ required: 'First name is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="mb-2 rounded-xl border border-gray-300 bg-gray-50 p-4 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            placeholder="Enter first name"
            placeholderTextColor="#888"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.firstName && <Text className="mb-2 text-red-500">{errors.firstName.message}</Text>}

      {/* Last Name */}
      <Text className="mb-1 text-gray-700 dark:text-gray-300">Last Name</Text>
      <Controller
        name="lastName"
        control={control}
        rules={{ required: 'Last name is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="mb-2 rounded-xl border border-gray-300 bg-gray-50 p-4 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            placeholder="Enter last name"
            placeholderTextColor="#888"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.lastName && <Text className="mb-2 text-red-500">{errors.lastName.message}</Text>}

      {/* Email */}
      <Text className="mb-1 text-gray-700 dark:text-gray-300">Email</Text>
      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="mb-2 rounded-xl border border-gray-300 bg-gray-50 p-4 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            placeholder="Enter email"
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.email && <Text className="mb-2 text-red-500">{errors.email.message}</Text>}

      {/* Loan Type Dropdown */}
      <Text className="mb-1 text-gray-700 dark:text-gray-300">Loan Type</Text>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="mb-2 flex-row items-center justify-between rounded-xl bg-gray-100 px-4 py-3 dark:bg-gray-800">
        <Text className="text-black dark:text-white">{selectedLoan || 'Select Loan Type'}</Text>
        <AntDesign name="down" size={20} color="#888" />
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View className="flex-1 justify-end bg-black/50">
          <View className="max-h-[70%] rounded-t-2xl border border-gray-300 bg-gray-50 p-4 pb-8 text-black">
            <Text className="mb-3 text-center text-lg font-semibold text-black">
              Select Loan Type
            </Text>
            <FlatList
              data={loanTypes}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Pressable
                  className="border-b border-gray-200 py-3 dark:border-gray-700"
                  onPress={() => {
                    setSelectedLoan(item);
                    setModalVisible(false);
                  }}>
                  <Text className="text-center text-base text-black dark:text-white">{item}</Text>
                </Pressable>
              )}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)} className="mt-4">
              <Text className="text-center font-semibold text-blue-600 dark:text-blue-400">
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Comment Box */}
      <Text className="mb-1 mt-2 text-gray-700 dark:text-gray-300">Comment</Text>
      <Controller
        name="comment"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            className="mb-2 rounded-xl border border-gray-300 bg-gray-50 p-4 text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            placeholder="Write your message"
            placeholderTextColor="#888"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="mt-8 items-center rounded-xl bg-primary py-3">
        <Text className="text-lg font-semibold text-white">Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
