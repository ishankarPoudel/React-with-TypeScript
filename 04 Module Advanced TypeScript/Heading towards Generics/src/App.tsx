import List from "./Components/List";

const App = () => {
  return (
    <div>
This  is  App

<List items= {[1,2,3,4,5,6,7,8,9]} render={(items)=><span>{items}</span>}/>
<List items= {["shankar", "sharma", "poudel"]} render= {(items)=><span>{items}</span>}/>

    </div>
  );
}

export default App;
