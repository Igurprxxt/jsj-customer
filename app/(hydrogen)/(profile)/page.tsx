import React from 'react';
import ProfileScreen from '~/components/Tabs/Profile';

const PageComponent = () => {
  return <ProfileScreen />;
};

const Page = React.memo(PageComponent);

export default Page;
