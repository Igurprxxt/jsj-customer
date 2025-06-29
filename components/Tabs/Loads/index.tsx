import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming you use React Navigation
import { Ionicons } from '@expo/vector-icons'; // Example icon library
import { useAuth } from '~/context/AuthContext';
import { routes } from '~/utils/routes';
import { useRouter } from 'expo-router';

// Define your navigation items with more descriptive icons
const navItems = [
  {
    label: 'Cash Loans',
    route: routes.tabs.loan_list,
    icon: <Ionicons name="cash-outline" size={32} color="#FFAC1C" />,
  },
  {
    label: 'Item Loan',
    route: routes.tabs.loan_list,
    icon: <Ionicons name="wallet-outline" size={32} color="#FFAC1C" />,
  },
  {
    label: 'Apply Loan',
    route: routes.tabs.apply_loan,
    icon: <Ionicons name="person-circle-outline" size={32} color="#FFAC1C" />,
  },
  {
    label: 'For Sale',
    route: 'ApplyScreen',
    icon: <Ionicons name="document-text-outline" size={32} color="#FFAC1C" />,
  },
  {
    label: 'Support',
    route: 'SupportScreen',
    icon: <Ionicons name="chatbox-ellipses-outline" size={32} color="#FFAC1C" />,
  },
  {
    label: 'Settings',
    route: 'SettingsScreen',
    icon: <Ionicons name="settings-outline" size={32} color="#FFAC1C" />,
  },
];

const Home = () => {
  const router = useRouter();

  const navigateTo = (route: any) => {
    router.push(route);
  };

  return (
    <ScrollView className="flex-1 bg-white bg-gradient-to-br from-orange-50 to-orange-100 p-4">
      {/* Subtle gradient background */}
      <View className="mb-8 rounded-lg border-[0.5px] border-gray-300 p-4">
        <Text className="text-center text-2xl font-semibold text-gray-800">
          Jaisaiji Credit Corporation
        </Text>
        <Text className="text-center text-xl font-semibold text-gray-800">
          Welcome, Gurpreet 👋
        </Text>
        <View className="mt-2 flex-row items-center justify-between">
          <View>
            <Text className="text-sm text-gray-600">Customer ID:</Text>
            <Text className="text-lg font-semibold text-primary">A80</Text>
          </View>
          <View className="items-end">
            <Text className="text-sm text-gray-600">Active Loans:</Text>
            <Text className="text-lg font-semibold text-primary">2</Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-6">
        {navItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigateTo(item.route)}
            className="w-full items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 transition-transform duration-100 active:scale-95 md:w-[47%] lg:w-[31%] dark:border-gray-700 dark:bg-gray-800"
            style={{ width: '47%' }}>
            <View className="mb-3 rounded-full bg-orange-100 p-3 dark:bg-primary">
              {React.cloneElement(item.icon, { color: '#FFAC1C', size: 30 })}
            </View>
            <Text className="mt-2 text-center text-lg font-semibold text-gray-800 dark:text-white">
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
