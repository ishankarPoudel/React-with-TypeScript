export  interface Task{
    id: number;
    title:string;
    completed:boolean;
};
export type TaskStatus= "all" | "completed"|  "pending";