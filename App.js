import { useCounter } from "./Hooks";

export default function App() {
  const [count, addCount, reduceCount] = useCounter(0);

  const handleCounter = (e) => {
    const runFunc = e.target.value === "add" ? addCount : reduceCount;

    return runFunc();
  };

  return (
    <div className="App">
      <p>Count: {count}</p>
      <button value="add" onClick={handleCounter}>
        Add
      </button>
      <button value="reduce" onClick={handleCounter}>
        Reduce
      </button>
    </div>
  );
}
