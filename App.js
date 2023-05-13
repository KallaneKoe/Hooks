import { useState } from "react";
import "./App.css";
import ReactHooks from "./Component/ReactHooks";
import { View } from "react-native/types";
import { Pressable } from "react-native/types";

function App() {
  [show, setShow] = useState(true);
  hideComponent = () => {
    setShow(false);
  };
  return (
    <View className="App">
      <Pressable onPress={hideComponent()}>
        <Text>Hide Component</Text>
      </Pressable>
      {show && <ReactHooks />}
    </View>
  );
}

export default App;
