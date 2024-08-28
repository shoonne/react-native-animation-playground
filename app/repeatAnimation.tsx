import { LoadingAnimation } from "@/components/LoadingAnimation";
import React from "react";
import { View } from "react-native";

const repeatAnimation = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LoadingAnimation />
    </View>
  );
};

export default repeatAnimation;
