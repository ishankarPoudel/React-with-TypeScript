import { useState } from "react";

interface AppProps {
  title: string,
  initialCount?: number, // ? makes  this optional

}

const App = ({title, initialCount =0}:AppProps) => { // defining initilavalue as 0 cause we will get Nan if initialcount is undefined
  const [count, setCount]= useState(initialCount)
  return (
    <div>
      <p>The title is {title}</p>  {/* the value if title is being passed from another file main.tsx as "Simple counter App" */}
      <p>The value of the counter is : {count}</p>
      <button onClick={()=>setCount(count+1)}>Increase</button>

    </div>
  );
}

export default App;
