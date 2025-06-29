import { useColorScheme } from 'nativewind';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const SearchSymbolLoading = () => {
  const [elementWidths, setElementWidths] = useState([
    SCREEN_WIDTH * 0.8,
    SCREEN_WIDTH * 0.6,
    SCREEN_WIDTH * 0.7,
    SCREEN_WIDTH * 0.25,
    SCREEN_WIDTH * 0.12,
    SCREEN_WIDTH * 0.4,
    SCREEN_WIDTH * 0.9,
  ]);

  const opacity = useSharedValue(0.4);
  const { colorScheme } = useColorScheme();

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(1, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const backgroundColor = colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';

  return (
    <View className="flex-col  bg-gray-200 p-4 dark:bg-dashboard_card">
      {/* USDT  */}
      <Animated.View
        style={[styles.placeholder, { width: elementWidths[2], backgroundColor }, animatedStyles]}
      />

      {/*   1m 30m 1h D  */}
      <View style={styles.row}>
        <Animated.View
          style={[
            styles.placeholderSmall,
            { width: elementWidths[3], backgroundColor },
            animatedStyles,
          ]}
        />
        <Animated.View
          style={[
            styles.placeholderSmaller,
            { width: elementWidths[4], backgroundColor },
            styles.openAnimated,
            animatedStyles,
          ]}
        />
      </View>

      {/* Market Cap */}
      <Animated.View
        style={[
          styles.placeholderMedium,
          { width: elementWidths[5], backgroundColor },
          animatedStyles,
        ]}
      />

      {/* Chart  */}
      <Animated.View
        style={[
          styles.chartContainer,
          { width: elementWidths[0], backgroundColor },
          animatedStyles,
        ]}
      />
      <Animated.View
        style={[
          styles.chartContainer,
          { width: elementWidths[1], backgroundColor },
          animatedStyles,
        ]}
      />
      <Animated.View
        style={[
          styles.chartContainer,
          { width: elementWidths[6], backgroundColor },
          animatedStyles,
        ]}
      />
      {/* Volume Chart  */}
      <Animated.View
        style={[styles.volumeChart, { width: elementWidths[0], backgroundColor }, animatedStyles]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    height: 24,
    borderRadius: 6,
    marginTop: 8,
  },
  placeholderMedium: {
    height: 18,
    borderRadius: 6,
    marginTop: 8,
  },
  placeholderSmall: {
    height: 18,
    borderRadius: 6,
    marginTop: 8,
  },
  placeholderSmaller: {
    height: 18,
    borderRadius: 6,
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  chartContainer: {
    height: 120,
    borderRadius: 8,
    marginTop: 8,
  },
  volumeChart: {
    height: 80,
    borderRadius: 8,
    marginTop: 8,
  },
  openAnimated: {
    marginLeft: 'auto',
  },
});

export default SearchSymbolLoading;
