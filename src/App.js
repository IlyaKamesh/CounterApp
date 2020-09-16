import React, {useState} from 'react';

function App() {

    const [count,setCount] = useState(5);

    const minus = () => {
        setCount (count - 1);
        console.log('Minus',count);
}

    const plus = () => {
        setCount(count + 1);
        console.log('PLUS',count)
    }

    const reset = () => {
        setCount(0);
    }

    const [newCount,newSetCount] = useState(10);

    const plus1 = () => {
        newSetCount(newCount + 1);
    }

    const minus1 = () => {
        newSetCount(newCount - 1);
    }

    const reset1 = () => {
        newSetCount(0);
    }


  return (
    <div>

        <button onClick={minus}>-1</button>
        <span>{count}</span>
        <button onClick={plus}>+1</button>
        <button onClick={reset}> Reset </button>
        <hr/>

        <button onClick={minus1}>-1</button>
        <span>{newCount}</span>
        <button onClick={plus1}>+1</button>
        <button onClick={reset1}>Reset</button>

    </div>
  );
}

export default App;
