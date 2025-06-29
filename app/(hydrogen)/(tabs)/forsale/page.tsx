import React from 'react'; // Import React
import { Text, View } from 'react-native';
import ForSaleScreen from '~/components/Tabs/ForSale';

const PageComponent = () => {
  return <ForSaleScreen />;
};

const Page = React.memo(PageComponent);

export default Page;
