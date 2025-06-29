import React from 'react';
import Home from '~/components/Tabs/Loads';

const PageComponent = () => {
  return <Home />;
};

const Page = React.memo(PageComponent);

export default Page;
