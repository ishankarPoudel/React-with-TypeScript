import ComplexArray from "./components/ComplexArray";
import ReversedArray from "./Project/ReversedArray";

const App = () => {
  const names:string[]=["Shankar","sharma", "poudel"]
  return (
    <div>
      <ul>
        {
            names.map((elem, index)=>
            <li key={index}>{elem}</li>
            )
        }

      </ul>
<ComplexArray/>
<ReversedArray/>

    </div>
  );
}

export default App;
