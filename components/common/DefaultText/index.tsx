import { useColorScheme } from 'nativewind';
import React from 'react';
import { Text } from 'react-native';

import { cn } from '~/utils/helper.utils';

const DefaultText = ({ light, dark, children, className, ...props }: any) => {
  const { colorScheme } = useColorScheme();
  return (
    <Text
      allowFontScaling={false}
      className={cn(colorScheme === 'dark' ? dark : light, className)}
      {...props}>
      {children}
    </Text>
  );
};

export { DefaultText };
