//Vòng đời của Function Component chia làm 3 giai đoạn
//Giai đoạn Render dùng để Mount ra Component hoặc update Component
//Có thể Mount ra Component  bằng cách gọi Component hoặc có thể kết hợp với useMemo()
//Để Update có thể sử dụng các hàm như useState() useReducer() useContext() hoặc kết hợp với usecallBack để tạo và cập nhật cái State
//Giai đoạn Commit: ở đây component sẽ cập nhật DOM và ref, đồng thời chạy cái side effect sử dụng các hàm useEffect() và useLayoutEffect()
//Giai đoạn Cleanup: Giai đoạn này sẽ được sử dụng để dọn dẹp sau khi Component được gỡ bỏ để tránh rò rỉ bộ nhớ
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Pressable } from "react-native";
function ReactHooks() {
  //Mount ra component
  const [count, setCount] = useState(0); //Hàm useState dùng để khai báo và cập nhập State của function
  const [clickTime, setClickTime] = useState(0);
  const increase = () => {
    setCount(count + 1); //Hàm dùng để tăng biến set state của Count thành count + 1
  };
  const decrease = () => {
    setCount(count - 1); //Hàm dùng để tăng biến set state của Count thành count + 1
  };

  //Hàm useEffect dùng để thực hiện các side effect như nhận data từ API, đếm giờ, cập nhật, hàm đồng thời cùng có tác dụng dọn dẹp sau khi component bị gỡ bỏ để tránh rò rỉ bộ nhớ
  //clear timeout khi component bị Cleanup tránh rò rĩ bộ nhớ gây ra lỗi

  useEffect(() => {
    const time = setTimeout(() => {
      setClickTime(() => clickTime + 1);
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [clickTime]);

  return (
    <View>
      <Pressable onPress={decrease()}>
        <Text>decrease</Text>
      </Pressable>
      <Text>Count: {count}</Text>
      <Pressable onPress={increase()}>
        <Text>increase</Text>
      </Pressable>
      <Text>Time: {clickTime}</Text>
    </View>
  );
}
export default ReactHooks;
