import { DoubleCheck, EditPencil, Trash } from 'iconoir-react';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { EditInterface, SingleTodoInterface } from '../../types';
import './todosStyles.css';

const SingleTodo: React.FC<SingleTodoInterface> = ({ todo, handleDelete, handleDone, handleEditSave }) => {
	const [edit, setEdit] = useState<EditInterface>({
		visible: false, text: todo.todo
	});

	const handleEdit = () => {
		if (!todo.isDone && !edit.visible) {
			setEdit({ ...edit, visible: !edit.visible });
		}
	}

	const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => { 
		const { value } = e.target;
		setEdit({ ...edit, text: value });
	}

	return (
		<form className='todo__single' onSubmit={(e: FormEvent) => {
			e.preventDefault();
			handleEditSave(todo.id, edit.text);
			setEdit({...edit, visible: false})
		}}>
			{edit.visible ? <input value={edit.text} onChange={handleTodoChange} /> : todo.isDone ?
				<s className="todo__text">{todo.todo}</s> :
				<span className="todo__text">{todo.todo}</span>}
			<div>
				<EditPencil className='icon' onClick={() => handleEdit()} />
				<Trash className='icon' onClick={() => handleDelete(todo.id)} />
				<DoubleCheck className='icon' onClick={() => handleDone(todo.id)} />
			</div>
		</form>
	)
}

export default SingleTodo