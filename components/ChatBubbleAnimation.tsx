import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { ThemedText } from "./ThemedText";

const ChatBubbleAnimation = () => {
  const point1 = useSharedValue(0);
  const point2 = useSharedValue(0);
  const point3 = useSharedValue(0);

  const firstColor = "#F4F1F6";
  const secondColor = "#E3908A";
  const duration = 500;
  const size = 10;
  const circleStyle1 = useAnimatedStyle(() => {
    return {
      width: size,
      height: size,
      backgroundColor: interpolateColor(
        point1.value,
        [0, 1],
        [firstColor, secondColor]
      ),
      borderRadius: 10,
    };
  });
  const circleStyle2 = useAnimatedStyle(() => {
    return {
      width: size,
      height: size,
      backgroundColor: interpolateColor(
        point2.value,
        [0, 1],
        [firstColor, secondColor]
      ),
      borderRadius: 10,
    };
  });
  const circleStyle3 = useAnimatedStyle(() => {
    return {
      width: size,
      height: size,
      backgroundColor: interpolateColor(
        point3.value,
        [0, 1],
        [firstColor, secondColor]
      ),
      borderRadius: 10,
    };
  });

  useEffect(() => {
    point1.value = withRepeat(
      withSequence(
        withTiming(1, { duration, easing: Easing.cubic }),
        withTiming(0, { duration, easing: Easing.cubic })
      ),
      -1,
      true
    );

    point2.value = withDelay(
      50,
      withRepeat(
        withSequence(
          withTiming(1, { duration, easing: Easing.cubic }),
          withTiming(0, { duration, easing: Easing.cubic })
        ),
        -1,
        true
      )
    );

    point3.value = withDelay(
      100,
      withRepeat(
        withSequence(
          withTiming(1, { duration, easing: Easing.cubic }),
          withTiming(0, { duration, easing: Easing.cubic })
        ),
        -1,
        true
      )
    );

    return () => {};
  }, []);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ThemedText style={{ fontWeight: "bold" }}>Chat Bubble</ThemedText>

      <View style={styles.bubble}>
        <Animated.View style={circleStyle1} />
        <Animated.View style={circleStyle2} />
        <Animated.View style={circleStyle3} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: "#D84C33",
    width: 60,
    height: 60,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
});

export default ChatBubbleAnimation;
