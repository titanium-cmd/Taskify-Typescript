import { useRef } from 'react';
import { InputFormInterface } from '../../types';
import './inputStyles.css';

const InputForm: React.FC<InputFormInterface> = ({ todo, setTodo, onSubmit }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value);
	}

	return (
		<form className="form" onSubmit={(e) => {
			onSubmit(e);
			inputRef.current?.blur();
		}}>
			<input ref={inputRef} value={todo} onChange={handleOnChange} className="form__input" placeholder='Enter a task' />
			<button type="submit" className="form__submit">Go</button>
		</form>
	)
}

export default InputForm