interface GreetingProps {
  name:string;
  age: number;
}
const Greeting = ({name, age}:GreetingProps) => {
  return <div>
    <h1>Hello {name}</h1>
    <p>Your age is {age}</p>
  </div>;
};

export default Greeting;
