/* eslint-disable import/order */

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Dropdown from './dropdown';
import { useAuth } from '~/context/AuthContext';
import { DrawerActions } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';

const SelectAccount = () => {
  const { activeAccount } = useAuth();

  return (
    <View className="flex flex-1 flex-row items-center gap-4">
      <TouchableOpacity
        onPress={() => {
          // navigation.dispatch(DrawerActions.toggleDrawer());
        }}>
        <SimpleLineIcons name="menu" size={20} className="!text-black dark:!text-white" />
      </TouchableOpacity>

      <Dropdown
        options={[
          {
            uuid: activeAccount?.accounts?.map((item: any) => item?.uuid)?.join(','),
            label: 'All Accounts',
            accountName: 'All Accounts',
            status: 'active',
          },
          ...(activeAccount?.accounts || []),
        ]}
        placeholder={
          activeAccount?.activeAccountIds?.length === activeAccount?.accounts?.length
            ? 'All Accounts'
            : activeAccount?.activeAccountIds?.length === 1
              ? activeAccount?.accounts?.find(
                  (i: any) => i?.uuid === activeAccount?.activeAccountIds[0]
                )?.accountName
              : activeAccount?.activeAccountIds?.length !== activeAccount?.accounts?.length
                ? `Account (${activeAccount?.activeAccountIds?.length})`
                : 'All Accounts'
        }
        onSelect={() => {}}
      />
    </View>
  );
};

export default SelectAccount;
