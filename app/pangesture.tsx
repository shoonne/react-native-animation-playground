import { GestureHandler } from "@/components/PanGesture";
import React from "react";
import { StyleSheet, View } from "react-native";

const pangesture = () => {
  return (
    <View>
      <GestureHandler width={0} height={0} />
    </View>
  );
};

export default pangesture;

const styles = StyleSheet.create({});
