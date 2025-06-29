/* eslint-disable import/order */
import { Tabs } from 'expo-router';
import { Platform, useColorScheme, View } from 'react-native';
import { DefaultText as Text } from '~/components/common/DefaultText';
import { cn } from '~/utils/helper.utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  AntDesign,
  Feather,
  FontAwesome6,
  Foundation,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

export default function TabLayout() {
  const theme: any = useColorScheme();

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right', 'top']}
      className={cn('flex-1 bg-white dark:bg-black')}>
      <Tabs
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme === 'dark' ? '#0f0f0f' : '#ffffff',
            borderTopWidth: 0.5,
            borderColor: theme === 'dark' ? '#1a1a1a' : '#e5e5e5',
            height: 70,
            paddingBottom: Platform.OS === 'ios' ? 12 : 8,
            paddingTop: 6,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            position: 'absolute',
            elevation: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginTop: 4,
          },
          tabBarIconStyle: {
            marginTop: 4,
          },
        }}>
        {[
          {
            name: 'home',
            label: 'Home',
            icon: (color: any) => <Feather name="home" size={24} color={color} />,
          },
          {
            name: 'loan',
            label: 'Apply Loan',
            icon: (color: any) => <MaterialIcons name="attach-money" size={24} color={color} />,
          },
          {
            name: 'messages',
            label: 'Messages',
            icon: (color: any) => (
              <MaterialCommunityIcons name="message-text-outline" size={24} color={color} />
            ),
          },
          {
            name: 'forsale',
            label: 'For Sale',
            icon: (color: any) => <Foundation name="burst-sale" size={28} color={color} />,
          },
          {
            name: 'actions',
            label: 'Actions',
            icon: (color: any) => (
              <MaterialCommunityIcons name="dots-horizontal" size={24} color={color} />
            ),
          },
        ].map(({ name, label, icon }) => (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text
                  className={cn(
                    'font-poppinsMedium text-xs',
                    focused ? 'text-primary' : 'text-gray-500 dark:text-gray-300'
                  )}>
                  {label}
                </Text>
              ),
              tabBarIcon: ({ focused }) => (
                <View className="items-center justify-center">
                  {icon(focused ? '#FFAC1C' : '#56575d')}
                </View>
              ),
            }}
          />
        ))}
      </Tabs>
    </SafeAreaView>
  );
}
