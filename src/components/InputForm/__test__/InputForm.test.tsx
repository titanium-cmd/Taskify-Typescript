import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputField from '../InputForm';

describe('FormInput', () => {
	const mockFn = jest.fn();

	beforeEach(() => {
		render(<InputField todo={''} onSubmit={mockFn} setTodo={mockFn} />);
	});

	it('should render InputTextField', () => {
		const inputTextField = screen.getByPlaceholderText(/enter a task/i);
		expect(inputTextField).toBeInTheDocument();
		expect(inputTextField).toBeVisible();
	})

	it('should respond to user input', async () => {
		const user = userEvent.setup();
		const inputTextField = await screen.findByPlaceholderText(/Enter a task/i);
		await user.type(inputTextField, 'get some food stuffs');
		expect(inputTextField).toBe('get some food stuffs');
	});

	it('should render submit Btn', () => {
		const submitBtn = screen.getByText(/go/i);
		expect(submitBtn).toBeInTheDocument();
		expect(submitBtn).toBeVisible();
	})
})

