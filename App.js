import { useState } from "react";
import React from "react";
import ReactHooks from "./Component/ReactHooks";
import { Pressable, Text, View } from "react-native";

function App() {
  const [show, setShow] = useState(true);
  hideComponent = () => {
    setShow(false);
  };
  showComponent = () => {
    setShow(true);
  };
  return (
    <View className="App">
      <Pressable onPress={hideComponent()}>
        <Text>Hide Component</Text>
      </Pressable>
      {show && <ReactHooks />}
      <Pressable onPress={showComponent()}>
        <Text>Show Component</Text>
      </Pressable>
    </View>
  );
}

export default App;
