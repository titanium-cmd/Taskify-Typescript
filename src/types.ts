export interface InputFormInterface {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: (e: React.FormEvent) => void;
}

export interface TodoInterface { 
    id: number;
    todo: string;
    isDone: boolean;
} 

export interface TodosInterface { 
    todos: TodoInterface[];
    setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>;
}

export interface SingleTodoInterface {
    todo: TodoInterface;
    handleDelete: (id: number) => void;
    handleEdit: (id: number) => void;
    handleDone: (id: number) => void;
    key: number;    
}