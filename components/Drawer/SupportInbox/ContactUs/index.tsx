/* eslint-disable import/order */
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import { Linking, Platform, TouchableOpacity, View } from 'react-native';
import { DefaultText as Text } from '~/components/common/DefaultText';
import { TwitterSVG } from '~/svgs/drawer';
const ContactUs = () => {
  const { colorScheme } = useColorScheme();
  const sendWhatsApp = () => {
    const msg = 'Hello, I need help';

    const mobile = '+13063147134';
    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
        Linking.openURL(url)
          .then((data) => {})
          .catch(() => {
            alert('Make sure WhatsApp installed on your device');
          });
      } else {
        alert('Please insert message to send');
      }
    } else {
      alert('Please insert mobile no');
    }
  };
  const data = [
    // {
    //   id: 1,
    //   name: 'Customer Service',
    //   icon: <Ionicons name="call" size={20} className="!text-tertiary dark:!text-white" />,
    //   onPress: () => Linking.openURL('tel:+13063147134'),
    // },

    // {
    //   id: 3,
    //   name: 'Website',
    //   icon: <Ionicons name="globe" size={20} className="!text-tertiary dark:!text-white" />,
    //   onPress: () => Linking.openURL('https://tradelizer.com/'),
    // },
    {
      id: 4,
      name: 'Support',
      icon: <Ionicons name="help" size={20} className="!text-tertiary dark:!text-white" />,
      onPress: () => Linking.openURL('https://app.tradelizer.com/support'),
    },
    // {
    //   id: 2,
    //   name: 'WhatsApp',
    //   icon: <Ionicons name="logo-whatsapp" size={20} className="!text-tertiary dark:!text-white" />,
    //   onPress: () => sendWhatsApp(),
    // },
    {
      id: 5,
      name: 'Twitter',
      icon: <TwitterSVG fill={colorScheme === 'dark' ? '#fff' : '#000'} />,
      onPress: () => Linking.openURL('https://x.com/tradelizerapp'),
    },
    {
      id: 6,
      name: 'Instagram',
      icon: (
        <Ionicons name="logo-instagram" size={20} className="!text-tertiary dark:!text-white" />
      ),
      onPress: () => Linking.openURL('https://www.instagram.com/officialtradelizer/'),
    },
  ];
  return (
    <View className="mx-4 mt-4 flex-1 gap-y-4">
      {data?.map((item: any) => {
        return (
          <TouchableOpacity
            onPress={item.onPress}
            key={item.id}
            className="flex-1 rounded-lg bg-gray-200 p-4 dark:bg-account_table_bg"
            style={{}}>
            <View className="flex-row items-center gap-x-4">
              {item?.icon}
              <Text className="font-poppinsMedium text-tertiary dark:text-white">{item?.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ContactUs;
