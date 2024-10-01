import { useState } from "react";
import "./App.css";
import Section from "./components/Section";

function App() {
	const [todos, setTodos] = useState([]);

	function handleClick() {
		const newTodo = prompt("Enter a new to-do");
		if (newTodo.trim() !== "") {
			const newItem = {
				task: newTodo,
				completed: false,
				id: Date.now(),
			};
			setTodos((prevTodos) => [...prevTodos, newItem]);
		}
	}

	function toggleTodo(id) {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
		);
	}

	function editTodo(id) {
		const updatedTask = prompt("Edit your to-do", todos.find((todo) => todo.id === id).task);
		if (updatedTask && updatedTask.trim() !== "") {
			setTodos((prevTodos) =>
				prevTodos.map((todo) => (todo.id === id ? { ...todo, task: updatedTask.trim() } : todo))
			);
		}
	}

	function deleteTodo(id) {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	}

	const completedTodos = todos.filter((todo) => todo.completed);
	const notCompletedTodos = todos.filter((todo) => !todo.completed);

	return (
		<>
			<h1>Welcome to your To-Do</h1>
			<button onClick={handleClick}>Add New Item</button>
			<Section
				title="To-Do"
				todos={notCompletedTodos}
				buttonText="✅"
				toggleTodo={toggleTodo}
				editTodo={editTodo}
				deleteTodo={deleteTodo}
			/>
			<Section
				title="Completed"
				todos={completedTodos}
				buttonText="☑️"
				toggleTodo={toggleTodo}
				editTodo={editTodo}
				deleteTodo={deleteTodo}
			/>
		</>
	);
}

export default App;
