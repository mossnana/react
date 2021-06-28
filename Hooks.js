import { useState } from "react";

export const useCounter = (props) => {
  const [count, setCount] = useState(props || 0);

  const addCount = () => setCount(count + 1);

  const reduceCount = () => setCount(count - 1);

  return [count, addCount, reduceCount];
};
