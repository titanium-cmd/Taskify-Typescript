import { DoubleCheck, EditPencil, Trash } from 'iconoir-react';
import React from 'react';
import { SingleTodoInterface } from '../../types';
import './todosStyles.css';

const SingleTodo: React.FC<SingleTodoInterface> = ({ todo, handleDelete, handleEdit, handleDone }) => {
	return (
		<form className='todo__single'>
			{todo.isDone ?
				<s className="todo__text">{todo.todo}</s> :
				<span className="todo__text">{todo.todo}</span>
			}
			<div>
				<EditPencil className='icon' onClick={() => handleEdit(todo.id)} />
				<Trash className='icon' onClick={() => handleDelete(todo.id)} />
				<DoubleCheck className='icon' onClick={() => handleDone(todo.id)} />
			</div>
		</form>
	)
}

export default SingleTodo