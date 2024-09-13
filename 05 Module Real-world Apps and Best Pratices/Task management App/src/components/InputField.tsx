import { ChangeEvent, useState } from "react";

const InputField = ():JSX.Element => {
    const[title, setTitle]= useState<string>("");
    const [todos, setTodos] = useState<string[]>([]);
    const handleClick= () :void   =>{
        setTodos([...todos, title]);
    };


    //button to handle the chnage in  input field
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value); // Updates the title state
      };
  return (
    <div>
        <input  type= "text" placeholder="enter the  title"
        value={title}
        onChange= {handleChange}></input>
        <br></br>
        <button onClick={handleClick}>Add Task</button>
        {/* rendering */}


        {

            todos.map((elem, index:number)=>(
                <div key={index}>{elem}</div>
            ))
        }

    </div>
  );
}
export default InputField;
