import { useState } from "react";
import "./App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
	const [todos, setTodos] = useState([]);

	function handleClick() {
		const newTodo = prompt("Enter a new to-do");
		if (newTodo.trim() !== "") {
			const newItem = {
				task: newTodo,
				completed: false,
			};
			setTodos([...todos, newItem]);
		}
	}

	function toggleTodo(index) {
		setTodos((prevTodos) => {
			const newTodos = [...prevTodos];
			newTodos[index].completed = !newTodos[index].completed;
			return newTodos;
		});
	}

	const completedTodos = todos.filter((todo) => todo.completed);
	const notCompletedTodos = todos.filter((todo) => !todo.completed);

	return (
		<>
			<h1>Welcome to your To-Do</h1>
			<h2>Not Completed</h2>
			<TransitionGroup component="ol">
				{notCompletedTodos.map((todo, index) => (
					<CSSTransition key={index} timeout={500} classNames="fade">
						<li>
							{todo.task} <button onClick={() => toggleTodo(todos.indexOf(todo))}>☑️</button>
						</li>
					</CSSTransition>
				))}
			</TransitionGroup>

			<h2>Completed</h2>
			<TransitionGroup component="ol">
				{completedTodos.map((todo, index) => (
					<CSSTransition key={index} timeout={500} classNames="fade">
						<li>
							{todo.task} <button onClick={() => toggleTodo(todos.indexOf(todo))}>✅</button>
						</li>
					</CSSTransition>
				))}
			</TransitionGroup>

			<button onClick={handleClick}>Add New Item</button>
		</>
	);
}

export default App;
