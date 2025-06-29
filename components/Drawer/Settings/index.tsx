/* eslint-disable import/order */
import { View, TouchableOpacity, SectionList, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { Href, useRouter } from 'expo-router';
import { useAuth } from '~/context/AuthContext';
import { profile_icon, security_icon, support_icon, timezone_icon } from '~/image';
import { routes } from '~/utils/routes';
import { DefaultText as Text } from '~/components/common/DefaultText';
import { useTheme } from '~/context/ThemeContext';
import { getInitials } from '~/utils/helper.utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image as ExpoImage } from 'expo-image';
import theme from '~/utils/theme';
const blurhash = 'LEHV6nWB2yk8pyo0adR*.7kCMdnj';

const Settings = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { colorScheme, showToast }: any = useTheme();
  const [deleteAccountLoading, setDeleteAccountLoading] = useState(false);
  const settingRoutes = [
    {
      title: 'Account',
      data: [
        { title: 'Profile Information', logo: profile_icon, path: routes.user.profile },
        { title: 'Security', logo: security_icon, path: routes.user.security },
        // { title: 'Account Settings', logo: settings_icon, path: routes.user.settings },
      ],
    },
    {
      title: 'General',
      data: [
        { title: 'Timezone', logo: timezone_icon, path: routes.user.timezone },
        { title: 'Help & Support', logo: support_icon, path: routes.user.support_inbox },
      ],
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white p-4 dark:bg-black">
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => router.back()} className="flex-row items-center gap-2">
          <Ionicons
            name="arrow-back"
            size={24}
            color={colorScheme === 'dark' ? 'white' : 'black'}
          />
          <Text className=" text-xl font-semibold dark:text-white">Settings</Text>
        </TouchableOpacity>
        <View className="pt-4">
          <View className="flex flex-row items-center  gap-3 border-b-[1px] border-gray-500 pb-4">
            {user?.profileImage ? (
              <ExpoImage
                source={{ uri: user?.profileImage }}
                contentFit="fill"
                placeholder={{ blurhash }}
                transition={1000}
                style={{
                  height: 64,
                  width: 64,
                  borderRadius: 100,
                }}
              />
            ) : (
              <View className="flex h-16  w-16 items-center justify-center rounded-full bg-primary">
                <Text light="text-black" dark="text-white" className=" font-poppinsMedium text-2xl">
                  {getInitials(`${user?.firstName} ${user?.lastName}`)}
                </Text>
              </View>
            )}
            <View className="flex-1 flex-col gap-1">
              <Text className="font-poppinsMedium text-xl text-tertiary dark:text-white">
                {user?.firstName} {user?.lastName}
              </Text>
              <Text className="font-interMedium text-sm text-tertiary dark:text-white">
                {user?.email}
              </Text>
            </View>
          </View>
          <View className="p-2">
            <SectionList
              sections={settingRoutes}
              scrollEnabled={false}
              stickySectionHeadersEnabled={false}
              keyExtractor={(item, index) => index?.toString()}
              renderItem={({ item }: any) => (
                <TouchableOpacity
                  className="my-2 flex-row items-center justify-between"
                  onPress={() => {
                    router.push(item.path);
                  }}>
                  <View className="flex-row items-center gap-x-3 px-3 py-1">
                    <Image source={item?.logo} className="h-6 w-6" resizeMode="contain" />
                    <Text className="font-poppinsMedium text-base text-tertiary dark:text-white">
                      {item?.title}
                    </Text>
                  </View>
                  <Entypo
                    name="chevron-right"
                    size={24}
                    color={colorScheme === 'dark' ? 'white' : theme.colors.tertiary}
                  />
                </TouchableOpacity>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Text
                  dark="text-white"
                  light="text-black"
                  className="mb-2 mt-8 font-poppinsMedium text-lg ">
                  {title}
                </Text>
              )}
            />
          </View>
        </View>
        {/* <TouchableOpacity
          className="mt-3 flex-row items-center justify-center gap-2 rounded-lg border-[1px] border-red-500 py-3"
          onPress={() => {
            setDeleteAccountLoading(true);
            showToast('Deleting Account...', 'info');
            setTimeout(() => {
              setDeleteAccountLoading(false);
              showToast('Account Deleted Successfully', 'success');
              router.push(routes.auth.login as Href);
            }, 2000);
          }}>
          {deleteAccountLoading && (
            <ActivityIndicator className="!text-black dark:!text-white" size="small" />
          )}
          <Text className=" font-poppinsMedium text-lg text-red-500 dark:text-red-500">
            Delete Account
          </Text>
          <Ionicons name="trash" size={20} color="red" />
        </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
