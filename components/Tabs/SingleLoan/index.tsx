import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import ScreenHeader from '~/components/ScreenHeader';
import { useRouter } from 'expo-router';

export default function SingleLoan() {
  const router = useRouter();

  const loan = {
    accountNumber: 'AC123456789',
    heading: 'Cash Loan A',
    type: 'Cash',
    loanType: 'Monthly EMI',
    cycle: 2,
    terms: '12 Months',
    area: 'Downtown',
    branch: 'Main Branch',
    rate: '12%',
    amountReleased: 25000,
    total: 28000,
    balance: 10500,
    releaseDate: '2024-06-01',
  };

  const details = [
    { label: 'Account Number', value: loan.accountNumber },
    { label: 'Loan Heading', value: loan.heading },
    { label: 'Type of Loan', value: loan.type },
    { label: 'Loan Type', value: loan.loanType },
    { label: 'Cycle', value: loan.cycle },
    { label: 'Terms', value: loan.terms },
    { label: 'Area', value: loan.area },
    { label: 'Branch', value: loan.branch },
    { label: 'Interest Rate', value: loan.rate },
    { label: 'Amount Released', value: `₹${loan.amountReleased.toLocaleString()}` },
    { label: 'Total Loan', value: `₹${loan.total.toLocaleString()}` },
    { label: 'Remaining Balance', value: `₹${loan.balance.toLocaleString()}` },
    { label: 'Release Date', value: loan.releaseDate },
  ];

  const handleViewLedger = () => {
    router.push('/loan/ledger'); // or pass loan.id if needed
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 px-4 py-6 dark:bg-black">
      <ScreenHeader title={'Loan Id : 001'} />

      {/* Loan Detail Grid */}
      <View className="rounded-2xl bg-white p-5 dark:bg-gray-900">
        <View className="-mx-2 flex-row flex-wrap">
          {details.map((item, index) => (
            <View key={index} className="mb-4 w-1/2 px-2">
              <Text className="mb-1 text-sm text-gray-500 dark:text-gray-400">{item.label}</Text>
              <View className="rounded-lg bg-gray-100 px-3 py-2 dark:bg-gray-800">
                <Text className="text-base font-semibold text-gray-800 dark:text-white">
                  {item.value}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      {/* View Ledger Button */}
      <View className="mt-4 items-center">
        <TouchableOpacity onPress={handleViewLedger} className="rounded-lg bg-primary px-4 py-2">
          <Text className="text-sm font-semibold text-white">View Ledger</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
