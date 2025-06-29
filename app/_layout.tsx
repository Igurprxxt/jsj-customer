/* eslint-disable no-unused-expressions */
/* eslint-disable import/order */
import { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import '../global.css';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Slot } from 'expo-router';
import { Alert, LogBox, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider as CustomThemeProvider } from '~/context/ThemeContext';
import { interMedium, poppinsBlack, poppinsBold, poppinsMedium, poppinsSemiBold } from '~/font';
import { useFonts } from 'expo-font';
import { AuthProvider } from '~/context/AuthContext';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { Host } from 'react-native-portalize';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import { QueryProvider } from '~/context/QueryContext';
import Offline from '~/components/Offline';
import { useAppState } from '@react-native-community/hooks';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};
LogBox.ignoreLogs([
  'TNodeChildrenRenderer: Support for defaultProps',
  'MemoizedTNodeRenderer: Support for defaultProps',
  'TRenderEngineProvider: Support for defaultProps',
]);

// this is required to prevent the white background flash on splash screen
preventAutoHideAsync();

function InitialLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Poppins-Medium': poppinsMedium,
    'Poppins-Black': poppinsBlack,
    'Poppins-Bold': poppinsBold,
    'Poppins-SemiBold': poppinsSemiBold,
    'Inter-Medium': interMedium,
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    `The issue was that useFont (or any hook) would cause a re-render of the layout route, 
     which would unmount the <SplashScreen /> component, and therefore hide the splash screen prematurely.
     This SplashScreen-component API was flawed which is why it's been deprecated.`;
    if (loaded) {
      setTimeout(() => {
        hideAsync();
      }, 300);
    }
  }, [loaded]);
  if (!loaded) {
    return null;
  }

  return <Slot />;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        return failureCount < 3 && error instanceof AxiosError;
      },
      refetchOnWindowFocus: false,
      staleTime: 10 * 1000, // 10s
    },
    mutations: {
      onError: (error) => {},
      onSuccess: ({ message }: any) => {},
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
      }
    },
  }),
});
export default function RootLayoutNav() {
  const [isConnected, setConnected] = useState(true);
  const [isUpdateRequired, setIsUpdateRequired] = useState(false);

  const appState = useAppState();
  // if the app is in the active, we need to check if the internet is connected
  useEffect(() => {
    if (appState === 'active') {
      const unsubscribe = NetInfo.addEventListener((state: any) => {
        setConnected(state?.isConnected ?? false);
      });

      return () => unsubscribe();
    }
  }, [appState]);

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* portalize is a library that allows you to render a component in a different part of the tree, */}
        {/* host is a component that allows you to render a component in a different part of the tree. */}
        <Host>
          <ThemeProvider value={DarkTheme}>
            <CustomThemeProvider>
              <ActionSheetProvider>
                <SafeAreaProvider>
                  <AuthProvider>
                    <QueryProvider>{!isConnected ? <Offline /> : <InitialLayout />}</QueryProvider>
                  </AuthProvider>
                </SafeAreaProvider>
              </ActionSheetProvider>
            </CustomThemeProvider>
          </ThemeProvider>
        </Host>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
