/* eslint-disable import/order */
import { useRouter } from 'expo-router';
import React from 'react';
import { View, TouchableOpacity, InteractionManager, Switch } from 'react-native';
import { useAuth } from '~/context/AuthContext';
import { removeStorageItemAsync } from '~/hooks/useStorageState';
import { DefaultText as Text } from '~/components/common/DefaultText';
import { useTheme } from '~/context/ThemeContext';
import theme from '~/utils/theme';

const Render = ({
  item,
  index,
  isActive,
  props,
}: {
  item: any;
  index: number;
  isActive: boolean;
  props: any;
}) => {
  const { setUser, setActiveAccount } = useAuth();
  const { onSelectTheme, darkTheme }: any = useTheme();
  const router = useRouter();
  return (
    <TouchableOpacity
      key={index}
      className="flex-row items-center justify-between"
      onPress={async () => {
        if (!item?.routes) return;
        if (item?.name !== 'Sign Out') {
          router.push(item?.routes);

          requestAnimationFrame(() => {
            InteractionManager.runAfterInteractions(async () => {
              props.navigation.closeDrawer();
            });
          });
        }
        if (item?.name === 'Sign Out') {
          router.push(item?.routes);
          requestAnimationFrame(() => {
            InteractionManager.runAfterInteractions(async () => {
              setUser({});
              props.navigation.closeDrawer();
              setActiveAccount([]);
              await removeStorageItemAsync('accessToken');
            });
          });
        }
      }}>
      <View className="flex flex-row items-center gap-3  p-3">
        <View className=" dark:text-white">{item?.icon(isActive)}</View>
        <View className="flex flex-row items-center gap-1">
          <Text className=" font-interMedium text-lg text-tertiary dark:text-dashboard_card_text">
            {item?.name}
          </Text>
        </View>
      </View>
      <View>
        {item?.id === 4 ? (
          <Switch
            onValueChange={(value: any) => {
              onSelectTheme(value);
            }}
            value={darkTheme}
            trackColor={{ false: '#767577', true: '#3872F9' }}
            ios_backgroundColor={theme.colors.white}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default Render;
