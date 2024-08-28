import { LoadingAnimation } from "@/components/LoadingAnimation";
import { GestureHandler } from "@/components/PanGesture";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <GestureHandler width={0} height={0} />
      <LoadingAnimation />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 100,
    backgroundColor: "red",
    borderRadius: 10,
  },
});
