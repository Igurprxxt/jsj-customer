import { Pressable, View, Animated, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/order
import { LinearGradient } from 'expo-linear-gradient';
import theme from '~/utils/theme';
const defaultStyles: any = {
  bgGradientColors: [theme.colors.dashboard_card_text, theme.colors.white],
  headGradientColors: [theme.colors.dashboard_card_text, theme.colors.analytics_card],
};

const activeStyles: any = {
  bgGradientColors: [theme.colors.dashboard_card, theme.colors.btn_primary],
  headGradientColors: [theme.colors.white, theme.colors.primary],
};
const Switch = (props: any) => {
  const { value, onValueChange } = props;
  const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));

  useEffect(() => {
    // Update the animated value when the value prop changes
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 300, // Adjust the animation duration
      useNativeDriver: false,
    }).start();
  }, [value]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 28], // Adjust the distance of the switch head
  });

  const toggleSwitch = () => {
    const newValue = !value;
    onValueChange(newValue);
  };
  const currentStyles = value ? activeStyles : defaultStyles;
  return (
    <Pressable onPress={toggleSwitch} style={styles.pressable}>
      <LinearGradient
        colors={currentStyles.bgGradientColors}
        style={styles.backgroundGradient}
        start={{
          x: 0,
          y: 0.5,
        }}>
        <View style={styles.innerContainer}>
          <Animated.View
            style={{
              transform: [{ translateX }],
            }}>
            <LinearGradient colors={currentStyles.headGradientColors} style={styles.headGradient} />
          </Animated.View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};
export default Switch;
const styles = StyleSheet.create({
  pressable: {
    width: 50,
    height: 25,
    borderRadius: 16,
  },
  backgroundGradient: {
    borderRadius: 16,
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
  headGradient: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
});
