import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { GestureDetector, GestureHandlerRootView, Gesture } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { DefaultText as Text } from '~/components/common/DefaultText';

const springConfig: any = (velocity: any) => {
  'worklet';
  return {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
    velocity,
  };
};

const txt1 = '';
const txt2 = '';

export default function CustomSwitch() {
  const x = useSharedValue(0);
  const width1 = useSharedValue(0);
  const width2 = useSharedValue(0);

  // Define the gesture
  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      x.value = Math.max(0, Math.min(event.translationX, width1.value));
    })
    .onEnd((event) => {
      if (event.velocityX > 20) x.value = withSpring(width1.value, springConfig(event.velocityX));
      else if (event.velocityX < -20) x.value = withSpring(0, springConfig(event.velocityX));
      else if (x.value > width1.value / 2)
        x.value = withSpring(width1.value, springConfig(event.velocityX));
      else x.value = withSpring(0, springConfig(event.velocityX));
    });

  const _style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }],
      width: interpolate(x.value, [0, width1.value], [width1.value, width2.value], {
        extrapolateLeft: Extrapolate.CLAMP,
        extrapolateRight: Extrapolate.CLAMP,
      }),
    };
  });

  const moveBackStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: -x.value }],
    };
  });

  const toggle = (toLeft: boolean) => {
    if (toLeft) x.value = withSpring(0, springConfig(0));
    else x.value = withSpring(width1.value, springConfig(0));
  };

  return (
    <GestureHandlerRootView>
      <Animated.View style={styles.rowContainer}>
        <View style={styles.rowSubContainer}>
          <TouchableOpacity
            style={styles.rowSubContainer}
            onPress={() => toggle(true)}
            activeOpacity={1}>
            <Text onLayout={(e) => (width1.value = e.nativeEvent.layout.width)} style={styles.txt}>
              {txt1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rowSubContainer}
            onPress={() => toggle(false)}
            activeOpacity={1}>
            <Text onLayout={(e) => (width2.value = e.nativeEvent.layout.width)} style={styles.txt}>
              {txt2}
            </Text>
          </TouchableOpacity>
        </View>
        <GestureDetector gesture={gesture}>
          <Animated.View
            className="absolute left-0 top-0 h-full rounded-full bg-black dark:bg-white"
            style={[_style]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    borderRadius: 50,
    backgroundColor: '#0c6fa6',
    overflow: 'hidden',
  },
  rowSubContainer: {
    flexDirection: 'row',
  },
  txt: {
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  moveBar: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 50,
    position: 'absolute',
    overflow: 'hidden',
  },
  absPos: {
    position: 'absolute',
  },
  info: {
    color: '#fff',
    letterSpacing: 2,
  },
});
