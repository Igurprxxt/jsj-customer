import React from 'react'; // Import React
import LoanList from '~/components/Tabs/LoanList';

const PageComponent = () => {
  return <LoanList />;
};

const Page = React.memo(PageComponent);

export default Page;
