export default function Section({ title, todos, buttonText, toggleTodo, editTodo, deleteTodo }) {
	function toggleButton(id) {
		return <button onClick={() => toggleTodo(id)}>{buttonText}</button>;
	}

	function editButton(id) {
		return <button onClick={() => editTodo(id)}>✏️</button>;
	}

	function deleteButton(id) {
		return <button onClick={() => deleteTodo(id)}>❌</button>;
	}

	return (
		<>
			{todos.length > 0 && (
				<>
					<h2>{title}</h2>
					<ol>
						{todos.map((todo) => (
							<li key={todo.id}>
								{todo.task} {toggleButton(todo.id)} {editButton(todo.id)} {deleteButton(todo.id)}
							</li>
						))}
					</ol>
				</>
			)}
		</>
	);
}
