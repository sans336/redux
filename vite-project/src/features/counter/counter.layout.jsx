import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Counter.Slice";
const Counter = () => {
  // const counterState = useSelector((state) => {
  //   console.log("State: ", state);
  //   return state.Counter;
  // });
  // console.log("counterState: ", counterState);

  //const globalState = useSelector((state) => state);
  //console.log("GS: ", globalState);

    const counterState = useSelector((state) => state.Counter);
    const dispatch = useDispatch();
    return (
      <div>
        <p>I am Counter page : {counterState.count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    );
};

export default Counter;
