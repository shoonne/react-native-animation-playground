import { GestureHandler } from "@/components/PanGesture";
import { Button, StyleSheet, View } from "react-native";
import { runOnUI } from "react-native-reanimated";

export default function HomeScreen() {
  const sayHello = () => {
    "worklet";
    console.log("Hello from the UI thread");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <GestureHandler width={0} height={0} />
      <Button title="Go to Details" onPress={() => runOnUI(sayHello)()} />
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
