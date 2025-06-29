import React from 'react'; // Import React
import { Text, View } from 'react-native';

const PageComponent = () => {
  return (
    <View className="flex-1 bg-white">
      <Text>Clock in</Text>
    </View>
  );
};

const Page = React.memo(PageComponent);

export default Page;
