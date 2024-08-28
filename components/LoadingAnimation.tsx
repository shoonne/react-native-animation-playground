import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const easing = Easing.bounce;

export const LoadingAnimation = () => {
  const CIRCLE_SIZE = 30;
  const circle1 = useSharedValue(CIRCLE_SIZE);
  const circle2 = useSharedValue(CIRCLE_SIZE);
  const circle3 = useSharedValue(CIRCLE_SIZE);

  const circle1Style = useAnimatedStyle(() => {
    return {
      width: circle1.value,
      height: circle1.value,
      borderRadius: circle1.value / 2,
      backgroundColor: "blue",
    };
  });
  const circle2Style = useAnimatedStyle(() => {
    return {
      width: circle2.value,
      height: circle2.value,
      borderRadius: circle2.value / 2,
      backgroundColor: "blue",
    };
  });
  const circle3Style = useAnimatedStyle(() => {
    return {
      width: circle3.value,
      height: circle3.value,
      borderRadius: circle3.value / 2,
      backgroundColor: "blue",
    };
  });

  useEffect(() => {
    circle1.value = withRepeat(
      withSequence(
        withTiming(40, { duration: 500, easing: Easing.cubic }),
        withTiming(CIRCLE_SIZE, { duration: 500, easing: Easing.cubic })
      ),
      -1,
      true
    );
    circle2.value = withDelay(
      100,
      withRepeat(
        withSequence(
          withTiming(40, { duration: 500, easing: Easing.cubic }),
          withTiming(CIRCLE_SIZE, { duration: 500, easing: Easing.cubic })
        ),
        -1,
        true
      )
    );
    circle3.value = withDelay(
      200,
      withRepeat(
        withSequence(
          withTiming(40, { duration: 500, easing: Easing.cubic }),
          withTiming(CIRCLE_SIZE, { duration: 500, easing: Easing.cubic })
        ),
        -1,
        true
      )
    );
    return () => {};
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Animated.View style={circle1Style} />
          <Animated.View style={circle2Style} />
          <Animated.View style={circle3Style} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "black",
    width: 200,
    height: 100,
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "red",
  },
});
