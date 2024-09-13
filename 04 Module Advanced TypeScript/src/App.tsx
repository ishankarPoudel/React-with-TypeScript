import { useState } from "react";
import Userprofile from "./Project_enum/Userprofile";

enum Status{
  Pending = "pending",
  InProgress = "in progress",
  Completed = "completed",
}

const App = () => {
  const[status, setStatus]= useState<Status>(Status.Pending);
  return (
    <div>
<h1>The task status is {status}</h1>
<button onClick={()=>setStatus(Status.InProgress)}>Start</button>
<button onClick= {()=>setStatus(Status.Completed)}>Completed</button>

<hr/>
<Userprofile/>
    </div>
  );
}

export default App;
