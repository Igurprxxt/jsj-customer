import React from 'react';
import SettingsScreen from '~/components/Tabs/Settings';

const PageComponent = () => {
  return <SettingsScreen />;
};

const Page = React.memo(PageComponent);

export default Page;
