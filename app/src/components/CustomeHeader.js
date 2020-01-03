import React from "react";
import { Header } from "react-navigation";
import { View, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const CustomHeader = props => {
  return (
    <View
      style={{
        height: 56,
        marginTop: Platform.OS == "ios" ? 20 : 0
      }}
    >
      <LinearGradient
        colors={["#00D79E", "#00D79E", "#00D79E"]}
      >
        <Header {...props} />
      </LinearGradient>
    </View>
  );
};

export default CustomHeader;