// ThemeProvider.js

import { useColorScheme } from 'nativewind';
import { createContext, useContext, useEffect, useState, useMemo, useRef } from 'react';
import { Platform } from 'react-native';
import Toast from '~/components/UI/Toast';
import { getStorageAsync, setStorageItemAsync } from '~/hooks/useStorageState';
import DarkTheme from '~/theme/DarkTheme';
import DefaultTheme from '~/theme/DefaultTheme';

const defaultProvider = {
  isDarkTheme: false,
  setIsDarkTheme: () => {},
  colors: DefaultTheme?.[0]?.colors,
  onSelectTheme: (payload: any) => {},
  showToast: (message: string, type: string) => {},
};
const ThemeContext = createContext(defaultProvider);
export const useTheme = () => useContext(ThemeContext);

const colorsName = ['DarkBlue', 'Teal', 'Violet', 'Red', 'Yellow'];

const ThemeProvider = ({ children }: any) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [colorIndex, setColorIndex] = useState(0);
  const toastRef: any = useRef(null);
  const [darkTheme, setDarkTheme] = useState(false);
  const onSelectTheme = (value: any) => {
    setColorScheme(!value ? 'light' : 'dark');
    setDarkTheme(value);
    setStorageItemAsync('isDarkTheme', !value ? 'light' : 'dark');
  };

  const showToast = (message: string, type: string) => {
    toastRef.current.toast(message, type);
  };
  const onSelectColor = (index: any) => {
    setStorageItemAsync('colorIndex', index?.toString());
    setColorIndex(+index);
  };

  useEffect(() => {
    // (async () => {
    //   const isDark = await getStorageAsync('isDarkTheme');
    //   if (isDark) {
    //     onSelectTheme(isDark === 'dark');
    //   } else {
    //     onSelectTheme(colorScheme === 'dark');
    //   }
    // })();
  }, [colorScheme]);

  const value: any = useMemo(
    () => ({
      // isDarkTheme: colorScheme === 'dark',
      isDarkTheme: false,
      colors:
        // colorScheme === 'dark'
        //   ? DarkTheme?.[colorIndex]?.colors
        //   :
        DefaultTheme?.[colorIndex]?.colors,
      onSelectTheme,
      setColorIndex,
      colorIndex,
      colorsName,
      onSelectColor,
      colorScheme: 'light',
      // colorScheme: colorScheme === 'dark' ? 'dark' : 'light',
      darkTheme,
      showToast,
    }),
    [colorIndex, onSelectTheme, onSelectColor, colorsName, colorScheme, darkTheme] //Remove showToast
  );

  return (
    <ThemeContext.Provider value={value}>
      <Toast ref={toastRef} />
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
