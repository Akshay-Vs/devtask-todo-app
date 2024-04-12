import { useState } from "react";
import TodoCard from "./TodoCard./TodoCard";
import { todos } from "./mock.todos";

const Todos = () => {
	const [data, setData] = useState(todos);

	const handleDelete = (id: string) => {
		const newData = data.filter((todo) => todo.id !== id);
		setData(newData);
	};
	return (
		<div className="px-8 mt-6">
			{data.map((todo) => (
				<TodoCard
					key={todo.id}
					id={todo.id}
					title={todo.title}
					description={todo.description}
					status={todo.status}
					dueDate={todo.dueDate}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	);
};

export default Todos;
