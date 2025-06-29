import React from 'react';
import ApplyLoan from '~/components/Tabs/ApplyLoan';

const PageComponent = () => {
  return <ApplyLoan />;
};

const Page = React.memo(PageComponent);

export default Page;
