/* eslint-disable import/order */
import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAuth } from '~/context/AuthContext';
import { DefaultText as Text } from '~/components/common/DefaultText';
import { BackIconSVG } from '~/svgs/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getInitials } from '~/utils/helper.utils';
import { Image } from 'expo-image';
import { useColorScheme } from 'nativewind';

const Header = ({ closeDrawer }: any) => {
  const { user } = useAuth();
  const { colorScheme } = useColorScheme();
  return (
    <SafeAreaView className=" rounded-2xl ">
      <LinearGradient
        colors={colorScheme === 'dark' ? ['#4F5C7DCF', '#2D3443'] : ['#6b96fa', '#3872F9']}
        style={{
          borderRadius: 10,
        }}>
        <View className="flex flex-row items-center  gap-3 p-4">
          {user?.profileImage ? (
            <Image
              source={{ uri: user?.profileImage }}
              contentFit="fill"
              placeholder={{ blurhash: 'LEHV6nWB2yk8pyo0adR*.7kCMdnj' }}
              transition={1000}
              style={{
                height: 64,
                width: 64,
                borderRadius: 100,
              }}
            />
          ) : (
            <View className="flex h-16  w-16 items-center justify-center rounded-full bg-primary">
              <Text className=" font-poppinsMedium text-2xl text-white">
                {getInitials(`${user?.firstName} ${user?.lastName}`)}
              </Text>
            </View>
          )}
          <View className="flex-1 flex-col gap-1">
            <Text className="text-xl font-medium text-white" numberOfLines={1}>
              {user?.firstName} {user?.lastName}
            </Text>
            <Text numberOfLines={1} className="text-xs text-white">
              {user?.email}
            </Text>
          </View>
          {/* <TouchableOpacity onPress={closeDrawer}>
            <BackIconSVG />
          </TouchableOpacity> */}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Header;
