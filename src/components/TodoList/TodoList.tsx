import { TodosInterface } from "../../types"

const TodoList: React.FC<TodosInterface> = ({todos, setTodos}) => {
	return (
		<div className="todos">
			{todos.map((todo) => {
				return <div>{todo.todo}</div>
			})}
		</div>
	)
}

export default TodoList