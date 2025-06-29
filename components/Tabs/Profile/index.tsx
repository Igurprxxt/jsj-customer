import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useAuth } from '~/context/AuthContext';
import dayjs from 'dayjs';
import { useActionSheet } from '@expo/react-native-action-sheet';
import Header from '~/components/Header';

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  const { user } = useAuth();
  console.log('user', user);

  return (
    <ScrollView style={{ paddingTop: insets.top }} className="flex-1 bg-white px-4 dark:bg-black">
      {/* Header */}
      <Header title="" />
      <View className="mt-6 flex-col items-center gap-y-1">
        <Image
          source={{ uri: user?.avatar_url || 'https://via.placeholder.com/100' }}
          className="border-1 h-24 w-24 rounded-full border-gray-300"
        />
        <Text className="mt-4 font-poppinsSemiBold text-xl text-black dark:text-white">
          {`${user?.firstName} ${user?.lastName}` || 'John Doe'}
        </Text>
        <Text className="text-sm text-gray-500 dark:text-gray-300">{user?.email}</Text>
        <Text className="text-sm text-gray-500 dark:text-gray-300">{`Customer Id: ${user?.customerId}`}</Text>
      </View>

      <View className="my-6 h-[1px] bg-gray-200 dark:bg-gray-700" />

      <View className="gap-y-2">
        <View className="flex-row items-center justify-between">
          <InfoRow
            label="Organization"
            value={user?.organizationName || 'JSJ Credit Corporation'}
            icon="briefcase-outline"
          />
          <InfoRow label="Role" value={'Customer'} icon="person-outline" />
        </View>
        <View className="flex-row items-center justify-between">
          <InfoRow
            label="City"
            value={user?.address?.city || 'Phillipines'}
            icon="location-outline"
          />
          <InfoRow
            label="Joining Date"
            value={dayjs(user?.createdAt).format('DD MMM YYYY')}
            icon="calendar-outline"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const InfoRow = ({ label, value, icon }: { label: string; value: string; icon: any }) => (
  <View className="min-w-[200px] flex-row items-center gap-x-4">
    <Ionicons name={icon} size={22} color="#888" />
    <View>
      <Text className="text-xs text-gray-400">{label}</Text>
      <Text className="font-poppinsMedium text-base text-black dark:text-white">{value}</Text>
    </View>
  </View>
);

export default ProfileScreen;
