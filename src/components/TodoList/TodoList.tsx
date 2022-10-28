import { TodosInterface } from "../../types";
import SingleTodo from "./SingleTodo";
import './todosStyles.css';

const TodoList: React.FC<TodosInterface> = ({ todos, setTodos }) => {
	return (
		<div className="todos">
			{todos.map((todo) => {
				return <SingleTodo
					todo={todo}
					key={todo.id}
					handleDelete={(id) => {
						const otherTodos = todos.filter((todo) => todo.id !== id);
						setTodos([...otherTodos]);
					} }
					handleDone={(id) => {
						const myTodos = todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo);
						setTodos(myTodos);
					} }
					handleEditSave={(id, val) => {
						const myTodos = todos.map((todo) => todo.id === id ? { ...todo, todo: val } : todo);
						setTodos(myTodos);
					}}
				/>
			})}
		</div>
	)
}

export default TodoList