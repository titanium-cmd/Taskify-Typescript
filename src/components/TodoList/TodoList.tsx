import { TodosInterface } from "../../types"
import SingleTodo from "./SingleTodo"
import './todosStyles.css'

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
					}}
					handleDone={(id) => {
						const otherTodos = todos.filter((todo) => todo.id !== id);
						setTodos([...otherTodos, {...todo, isDone: true}]);
					}}
					handleEdit={(id) => { 

					}}
				/>
			})}
		</div>
	)
}

export default TodoList