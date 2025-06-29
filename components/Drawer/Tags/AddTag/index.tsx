/* eslint-disable import/order */
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import React from 'react';
import { DefaultText as Text } from '~/components/common/DefaultText';
import DefaultTextInput from '~/components/common/DefaultTextInput';
import theme from '~/utils/theme';
import { useTags } from '~/context/TagsContext';
import SelectPicker from '~/components/UI/SelectPicker';
import { useTheme } from '~/context/ThemeContext';

const AddTag = ({ open, setOpen, loading, onSave }: any) => {
  const { tagList } = useTags();
  const { isDarkTheme } = useTheme();
  return (
    <Modal
      animationType="fade"
      transparent
      visible={open?.open}
      onRequestClose={() =>
        setOpen({
          open: false,
        })
      }>
      <View className="flex-1 items-center justify-center bg-[rgba(0,0,0,0.5)] px-4">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View className="w-full gap-4 rounded-xl bg-white  p-5 dark:bg-[#282E36]">
            <Text className=" text-xl font-semibold dark:text-white">
              {open?.uuid && open?.type === 'tags' ? 'Edit Tag' : 'Add Tag'}
            </Text>
            <DefaultTextInput
              title="Tag Name"
              value={open?.name}
              onChangeText={(text: any) => setOpen({ ...open, name: text })}
              className="w-full rounded-lg border-[1px] border-gray-400 dark:border-2 dark:border-gray-600 dark:bg-dashboard_card dark:text-white"
              placeholder="Enter Account Name"
              titleClassName="text-tertiary dark:text-white"
              placeholderTextColor={theme.colors.dashboard_card_text}
            />

            {/* {Platform.OS === 'ios' ? (
              <SelectPicker
                data={tagList?.map(
                  (i: any) =>
                    ({
                      id: i?.name,
                      label: i?.name,
                      value: i?.uuid,
                    }) as any
                )}
                title="Category"
                setData={async (value: any) => {
                  setOpen({ ...open, categoryId: value });
                }}
                placeholder="Select"
                value={open?.categoryId}
                iosInputStyle={{
                  backgroundColor: isDarkTheme ? '#131B24' : 'transparent',
                  paddingVertical: 13,
                }}
              />
            ) : ( */}
            <View>
              <Text className="mb-2 text-base font-semibold text-tertiary dark:text-white">
                Category
              </Text>
              <View className="rounded-lg border-[1px] border-gray-400 p-3 dark:border-2 dark:border-gray-600 dark:bg-dashboard_card">
                <Text className={`font-poppinsMedium text-base text-tertiary dark:text-white `}>
                  {tagList?.find((i: any) => i?.uuid === open?.categoryId)?.name}
                </Text>
              </View>
            </View>
            {/* )} */}

            <DefaultTextInput
              numberOfLines={10}
              multiline
              title="Description"
              placeholderClassName="text-xs"
              placeholderTextColor={theme.colors.dashboard_card_text}
              className="min-h-[100px] w-full rounded-lg border-[1px] border-gray-400 dark:border-2 dark:border-gray-600 dark:bg-dashboard_card dark:text-white"
              placeholder="Enter subject"
              titleClassName="text-tertiary dark:text-white"
              value={open?.description}
              textAlignVertical="top"
              onChangeText={(value: any) => setOpen({ ...open, description: value })}
            />
            <View className="mb-4 flex-row justify-between gap-4">
              <TouchableOpacity
                className="flex-1 rounded-lg bg-tertiary p-3 dark:bg-[#3e454d]"
                onPress={() =>
                  setOpen({
                    open: false,
                  })
                }>
                <Text className="text-center font-semibold text-white dark:text-[#CECFD2]">
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 flex-row items-center justify-center gap-2 rounded-lg bg-primary p-3"
                onPress={() => {
                  onSave(open);
                }}>
                {loading ? <ActivityIndicator color={theme.colors.white} /> : <></>}
                <Text className="text-center text-sm font-semibold text-white">
                  {open?.uuid && open?.type === 'tags' ? 'Update' : 'Create'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export default AddTag;
