import ChatBubbleAnimation from "@/components/ChatBubbleAnimation";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import React from "react";
import { View } from "react-native";

const repeatAnimation = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
      }}
    >
      <LoadingAnimation />
      <ChatBubbleAnimation />
    </View>
  );
};

export default repeatAnimation;
