/* eslint-disable import/order */
import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity, FlatList, Modal } from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { DefaultText as Text } from '../common/DefaultText';
import * as Animatable from 'react-native-animatable';
import { useTags } from '~/context/TagsContext';
import { cn } from '~/utils/helper.utils';
import { useQuery } from '~/context/QueryContext';
import { router } from 'expo-router';
import { routes } from '~/utils/routes';

const TagFilter = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([] as any);
  const { tagList } = useTags();
  const { setQuery, globalQueries }: any = useQuery();
  const renderData = useCallback(
    (data: any, idx: any) => {
      return (
        <Animatable.View
          animation="fadeInUp"
          delay={idx * 100}
          useNativeDriver={false}
          className="mt-3 px-2">
          <View className="flex flex-row items-center gap-2">
            <FontAwesome name="tags" size={20} color={data?.color || '#000'} />
            <Text className="font-poppinsMedium text-base text-black dark:text-white/70">
              {data?.name}
            </Text>
          </View>
          <View className="ml-3 mt-2 flex flex-row flex-wrap items-center gap-2">
            {data?.tags?.length ? (
              data?.tags?.map((val: any) => {
                return (
                  <TouchableOpacity
                    key={val?.uuid}
                    onPress={() => {
                      if (selected?.includes(val?.uuid)) {
                        setSelected((prev: any) => prev.filter((item: any) => item !== val?.uuid));
                        return;
                      }
                      setSelected([...selected, val?.uuid]);
                    }}
                    className={cn(
                      'mt-2 flex flex-row items-center gap-2  rounded-full border-[1px] border-analytics_card bg-white px-3 py-1 dark:border-[1px]  dark:border-trade_table_header dark:bg-dashboard_card',
                      selected.includes(val?.uuid) ? 'border-[1px] border-primary !bg-primary' : ''
                    )}>
                    <Text
                      className={cn(
                        'font-poppinsMedium text-sm text-white dark:text-white/70',
                        selected.includes(val?.uuid) ? ' !text-white' : 'text-black'
                      )}>
                      {val?.name}
                    </Text>
                  </TouchableOpacity>
                );
              })
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setOpen(false);
                  router.push(routes.user.tags as any);
                }}
                className={cn(
                  'mt-2 flex flex-row items-center gap-2  rounded-full border-[1px] border-analytics_card bg-white px-3 py-1 dark:border-[1px]  dark:border-trade_table_header dark:bg-dashboard_card'
                )}>
                <Text className="font-poppinsMedium text-sm text-black dark:text-white/70">
                  + Add Tag
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </Animatable.View>
      );
    },
    [selected]
  );
  if (!!tagList?.length === false) {
    return <></>;
  }
  return (
    <View className="">
      <TouchableOpacity
        className="relative"
        onPress={() => {
          setSelected(globalQueries?.tags || []);
          setOpen(!open);
        }}>
        <AntDesign name="tagso" size={25} className="!text-black dark:!text-white" />
        {globalQueries?.tags?.length ? (
          <View className="absolute right-0 top-0 flex h-3 w-3 items-center justify-center rounded-full bg-primary" />
        ) : (
          <></>
        )}
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={open}
        transparent
        onDismiss={() => setOpen(open)}
        onRequestClose={() => setOpen(open)}>
        <View className="flex-1  justify-end   bg-[rgba(0,0,0,0.5)]">
          <View className=" h-[60%]  rounded-tl-xl rounded-tr-xl  bg-white pl-3 dark:bg-dashboard_card">
            <FlatList
              onEndReachedThreshold={0.3}
              showsVerticalScrollIndicator={false}
              ListHeaderComponentClassName=""
              stickyHeaderIndices={[0]}
              ListHeaderComponent={() => (
                <View
                  className={cn(
                    'flex-row items-center justify-between  px-5 py-2',
                    'dark:bg-dashboard_card'
                  )}>
                  <Text className={cn('text-xl font-bold', 'dark:!text-white')}>
                    Filter by Tags
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setSelected([]);
                      setOpen(false);
                    }}
                    className="p-2">
                    <Ionicons
                      name="close"
                      size={25}
                      className={cn('!text-black dark:!text-white')}
                    />
                  </TouchableOpacity>
                </View>
              )}
              data={tagList}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item, index }: any) => {
                return renderData(item, index);
              }}
              initialNumToRender={6}
            />
            <View className="mb-10 flex w-full flex-row justify-center gap-x-4 p-5">
              <TouchableOpacity
                onPress={() => {
                  setSelected([]);
                }}
                className={cn(
                  'flex-1 rounded-md   bg-[#E3EAF31F] py-3',
                  'border border-gray-400 dark:border-0'
                )}>
                <Text className={cn('text-center font-poppinsMedium dark:text-white ')}>
                  Clear Filter
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setQuery({
                    tags: selected?.join(','),
                  });
                  setOpen(false);
                }}
                className="flex-1 rounded-md bg-primary py-3">
                <Text className="text-center font-poppinsMedium text-white">Apply Filter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TagFilter;
