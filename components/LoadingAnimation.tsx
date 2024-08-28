import { useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const easing = Easing.bounce;

export const LoadingAnimation = () => {
  const CIRCLE_SIZE = 50;
  const circle1 = useSharedValue(CIRCLE_SIZE);
  // const circle2 = useSharedValue(CIRCLE_SIZE);
  // const circle3 = useSharedValue(CIRCLE_SIZE);

  const circle1Style = useAnimatedStyle(() => {
    return {
      width: circle1.value,
      height: circle1.value,
      borderRadius: circle1.value / 2,
      backgroundColor: "blue",
    };
  });
  // const circle2Style = useAnimatedStyle(() => {
  //   return {
  //     width: circle2.value,
  //     height: circle2.value,
  //     borderRadius: circle2.value / 2,
  //     backgroundColor: "blue",
  //   };
  // });
  // const circle3Style = useAnimatedStyle(() => {
  //   return {
  //     width: circle3.value,
  //     height: circle3.value,
  //     borderRadius: circle3.value / 2,
  //     backgroundColor: "blue",
  //   };
  // });

  const startAnimation = () => {
    circle1.value = withSpring(CIRCLE_SIZE + 30);
    // setTimeout(() => {
    //   circle2.value = withSpring(CIRCLE_SIZE + 30);
    // }, 200);
    // setTimeout(() => {
    //   circle3.value = withSpring(CIRCLE_SIZE + 30);
    // }, 300);
  };

  const resetAnimation = () => {};

  useEffect(() => {
    circle1.value = withRepeat(withTiming(20, { duration: 2000, easing }), -1);

    return () => {};
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Animated.View style={circle1Style} />
        {/* <Animated.View style={circle2Style} />
        <Animated.View style={circle3Style} /> */}
      </View>
      <Button title="Start Animation" onPress={startAnimation} />
      <Button title="Reset Animation" onPress={resetAnimation} />
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
  ball: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "red",
  },
});
