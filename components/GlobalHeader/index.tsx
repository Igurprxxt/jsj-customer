/* eslint-disable import/order */
import React from 'react';

import SelectAccount from './selectAccount';
import { TouchableOpacity, View } from 'react-native';
import Filter from './filter';
import CalendarComponent from './calendar';
import { cn } from '~/utils/helper.utils';
import { Ionicons } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';
import { routes } from '~/utils/routes';
import TagFilter from './tag';

const GlobalHeader = () => {
  return (
    <View
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
      className={cn(
        'flex flex-row items-center  gap-4  rounded-b-xl p-6 md:p-4',
        'bg-white dark:bg-dashboard_card'
      )}>
      <SelectAccount />
      <View className="flex flex-row items-center gap-4">
        <TagFilter />
        <Filter />
        <CalendarComponent />
        <Link href={routes.user?.add_trade as Href} asChild>
          <TouchableOpacity>
            <Ionicons name="add" size={25} className="!text-black dark:!text-white" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default GlobalHeader;
