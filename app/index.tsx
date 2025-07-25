import { Href, Redirect } from 'expo-router';

import React from 'react';

import SplashScreen from '~/components/SplashScreen';
import { useAuth } from '~/context/AuthContext';
import { routes } from '~/utils/routes';

const App = () => {
  const { loading, user } = useAuth();
  console.log('loading', loading, user);

  // if Rest API is loading, show splash screen
  // if (loading) {
  //   return <SplashScreen />;
  // }

  // // if user is not logged in, redirect to login page
  // if (!user?._id) {
  //   return <Redirect href={routes.auth.login as Href} />;
  // }
  // // if user is logged in, redirect to portfolio page
  // if (user?._id) {
  return <Redirect href={routes.tabs.home as Href} />;
  // }
};

export default App;
