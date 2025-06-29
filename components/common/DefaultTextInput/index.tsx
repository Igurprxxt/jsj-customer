import React, { memo, forwardRef } from 'react';
import { TextInput as DefaultTextInput, TextInputProps, View } from 'react-native';

import { DefaultText as Text } from '../DefaultText';

import { cn } from '~/utils/helper.utils';

type InputProps = TextInputProps & {
  className?: string;
  title?: string;
  containerClassName?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  titleClassName?: string;
  textInputClassName?: string;
  error?: any;
};

const TextInput = forwardRef<DefaultTextInput, InputProps>(
  (
    {
      title,
      className,
      prefix,
      containerClassName,
      titleClassName,
      suffix,
      textInputClassName,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <View className={containerClassName}>
        {title && (
          <Text
            className={cn(
              'mb-1.5 font-interMedium text-base  text-tertiary dark:text-white',
              titleClassName
            )}>
            {title}
          </Text>
        )}
        <View className={cn('flex-row items-center gap-2', className)}>
          {prefix ? prefix : <></>}
          <DefaultTextInput
            className={cn('flex-1  px-2 py-4 text-tertiary dark:text-white', textInputClassName)}
            allowFontScaling={false}
            ref={ref}
            {...props}
          />
          {suffix ? suffix : <></>}
        </View>
        {error ? error : <></>}
      </View>
    );
  }
);

TextInput.displayName = 'TextInput';

export default memo(TextInput);
