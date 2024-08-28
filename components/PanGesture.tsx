import { StyleSheet, Text, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

interface GestureProps {
  width: number;
  height: number;
}

export const GestureHandler = ({ width, height }: GestureProps) => {
  const translateX = useSharedValue<number>(0);
  const translateY = useSharedValue<number>(0);
  const currentX = useSharedValue<number>(0);
  const currentY = useSharedValue<number>(0);

  const pan = Gesture.Pan()
    .onBegin(() => {
      currentX.value = translateX.value;
      currentY.value = translateY.value;
    })
    .onUpdate((event) => {
      translateX.value = currentX.value + event.translationX;
      translateY.value = currentY.value + event.translationY;
    });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={pan}>
        <Animated.View style={style}>
          <View style={styles.card}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Drag me</Text>
          </View>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 100,
    backgroundColor: "blue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
