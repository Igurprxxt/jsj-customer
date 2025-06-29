import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Href, useRouter } from 'expo-router';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { routes } from '~/utils/routes';

const loans = [
  {
    id: '1',
    heading: 'Cash Loan A',
    amount: 25000,
    branch: 'Main Branch',
    area: 'Downtown',
    cycle: 2,
    nextDueDate: '2025-07-15',
    nextDueAmount: 3500,
  },
  {
    id: '2',
    heading: 'Cash Loan B',
    amount: 18000,
    branch: 'City Center',
    area: 'Sector 9',
    cycle: 1,
    nextDueDate: '2025-07-20',
    nextDueAmount: 2400,
  },
  {
    id: '3',
    heading: 'Cash Loan C',
    amount: 18000,
    branch: 'City Center',
    area: 'Sector 9',
    cycle: 1,
    nextDueDate: '2025-07-20',
    nextDueAmount: 2400,
  },
  {
    id: '4',
    heading: 'Cash Loan D',
    amount: 18000,
    branch: 'City Center',
    area: 'Sector 9',
    cycle: 1,
    nextDueDate: '2025-07-20',
    nextDueAmount: 2400,
  },
  {
    id: '5',
    heading: 'Cash Loan E',
    amount: 18000,
    branch: 'City Center',
    area: 'Sector 9',
    cycle: 1,
    nextDueDate: '2025-07-20',
    nextDueAmount: 2400,
  },
  {
    id: '6',
    heading: 'Cash Loan F',
    amount: 18000,
    branch: 'City Center',
    area: 'Sector 9',
    cycle: 1,
    nextDueDate: '2025-07-20',
    nextDueAmount: 2400,
  },
];

export default function LoanList() {
  const router = useRouter();

  const renderItem = ({ item }: { item: (typeof loans)[0] }) => (
    <View className="mb-4 rounded-2xl border-[0.5px] border-gray-300 bg-white p-5">
      {/* Title + Amount */}
      <View className="mb-2 flex-row items-center justify-between">
        <Text className="text-lg font-bold text-gray-900 dark:text-white">{item.heading}</Text>
        <Text className="text-base font-semibold text-green-600 dark:text-green-400">
          ₹{item.amount.toLocaleString()}
        </Text>
      </View>

      {/* Branch / Area / Cycle */}
      <View className="mb-3 flex-row justify-between gap-x-4 gap-y-2">
        <View className="flex-row items-center">
          <MaterialIcons name="account-balance" size={16} color="#6b7280" />
          <Text className="ml-1 text-sm text-gray-600 dark:text-gray-400">{item.branch}</Text>
        </View>
        <View className="flex-row items-center">
          <Ionicons name="location-sharp" size={16} color="#6b7280" />
          <Text className="ml-1 text-sm text-gray-600 dark:text-gray-400">{item.area}</Text>
        </View>
        <View className="flex-row items-center">
          <FontAwesome5 name="sync" size={14} color="#6b7280" />
          <Text className="ml-1 text-sm text-gray-600 dark:text-gray-400">Cycle {item.cycle}</Text>
        </View>
      </View>

      {/* Next Due Info */}
      <View className="mb-3 flex-row items-center justify-between rounded-xl bg-gray-100 p-3 dark:bg-gray-800">
        <View className="flex-row items-center">
          <Ionicons name="calendar" size={18} color="#4b5563" />
          <Text className="ml-2 text-sm text-gray-700 dark:text-gray-300">
            Due: {item.nextDueDate}
          </Text>
        </View>
        <Text className="text-sm font-semibold text-rose-600 dark:text-rose-400">
          ₹{item.nextDueAmount.toLocaleString()}
        </Text>
      </View>

      {/* View Button */}
      <TouchableOpacity
        onPress={() => router.push(routes.tabs.singleLoan(item.id) as Href)}
        className="self-end rounded-xl bg-blue-600 px-5 py-2">
        <Text className="text-sm font-semibold text-white">View ➔</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-100 p-4 dark:bg-black">
      <Text className="mb-6 text-center text-2xl font-bold text-gray-800 dark:text-white">
        Cash Loans 💳
      </Text>

      <FlatList
        data={loans}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
