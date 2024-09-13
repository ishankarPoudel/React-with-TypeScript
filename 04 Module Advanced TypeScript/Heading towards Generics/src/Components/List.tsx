import React from "react";

interface ItemProps<T>{
    items: T[],
    render: (items:T) =>React.ReactNode;
}
const List = <T,>({items, render}:ItemProps<T>) => {
  return (
    <ul>
        {
            items.map((elem, index)=>(
                <li key={index}>{render(elem)}</li>
            ))
        };
    </ul>
  );
}

export default List;
