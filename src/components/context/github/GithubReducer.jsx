import { useReducer } from "react";

const initialState = { count: 0, lastAction: "none" };

function Reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, lastAction: "increment" };
    case "decrement":
      return { count: state.count - 1, lastAction: "decrement" };
    case "reset":
      return { ...initialState, lastAction: "reset" };
    default:
      throw new Error();
  }
}

function ReducerTest() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <div>
      <p>Licznik: {state.count}</p>
      <p>Last Action: {state.lastAction}</p>
      <button className="btn" onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
      <button className="btn" onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
      <button className="btn" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default ReducerTest;
