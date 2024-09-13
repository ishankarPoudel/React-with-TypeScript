const ReversedArray = () => {
    const revArray= <T,>(arr:T[]):T[]=>{
        return arr.reverse();

    };
  return (
    <div>
        <h1>The reversed array is:    {revArray([1,2,3,4,5,6])}
        </h1>

    </div>
  );
}

export default ReversedArray;
