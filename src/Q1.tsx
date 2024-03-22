import { useState } from "react";

function starPattern(count: number) {
  let pattern = [];
  const STAR: string = "*";

  for (let i: number = 0; i <= count; i++) {
    pattern.push(<div>{STAR.repeat(i)}</div>);
  }

  for (let i: number = count - 1; i >= 1; i--) {
    pattern.push(<div>{STAR.repeat(i)}</div>);
  }

  return pattern;
}

let inpNums: number = 0;

function Q1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <label>
        Input:
        <input
          type="number"
          onChange={(e) => {
            inpNums = parseInt(e.target.value);
          }}
        />
      </label>
      <button
        type="submit"
        onClick={() => {
          setCount(inpNums);
        }}
      >
        GO!
      </button>

      <div>{starPattern(count)}</div>
    </>
  );
}

export default Q1;
