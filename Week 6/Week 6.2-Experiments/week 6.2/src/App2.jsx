import { useMemo, useEffect } from "react";
import { useState } from "react";

function App2() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  const increase = (count) => {
    setCounter(count + 1);
  };
  /**************USE EFFECT FOR SAME WORK NEED EXTRA VERIABLE THAN USE MEMO************************* */
  //   useEffect(() => {
  //     let sum = 0;
  //     for (let i = 1; i <= inputValue; i++) {
  //       sum += i;
  //     }
  //     setFinalValue(sum);
  //   }, [inputValue]);

  /**************USE MEMO************************* */
  let sum = useMemo(() => {
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount += i;
    }
    return finalCount;
  }, [inputValue]);

  return (
    <div>
      <input type="number" onChange={(e) => setInputValue(e.target.value)} />
      <br />
      <p>sum is {sum}</p>
      <button onClick={() => increase(counter)}>count: {counter}</button>
    </div>
  );
}
export default App2;
