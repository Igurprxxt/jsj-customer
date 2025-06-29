import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

const Header = ({ title }: any) => {
  const router = useRouter();
  return (
    <View className={`w-full flex-row items-center justify-start px-4 py-2`}>
      {router && (
        <TouchableOpacity onPress={() => router.back()} className="">
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
      )}
      <Text className="text-xl font-semibold text-gray-800">{title}</Text>
    </View>
  );
};

export default Header;
