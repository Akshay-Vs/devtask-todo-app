import TodoCard from "./TodoCard./TodoCard";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Typography from "../Typography";

const Todos = () => {
	const { data, deleteField, updateField } = useLocalStorage();

	return (
		<div className="px-8 mt-6">
			<div className="flex justify-start items-start bg-slate-100">
				<Typography.Heading
					variant="h1"
					style="opacity-80 w-[32%] flex justify-start mx-3"
				>
					Title
				</Typography.Heading>
				<Typography.Heading variant="h1" style="opacity-80 w-[32%] mx-3">
					Description
				</Typography.Heading>
				<Typography.Heading variant="h1" style="opacity-80 w-44 mx-3">
					Status
				</Typography.Heading>
				<Typography.Heading variant="h1" style="opacity-80 mx-5 mx-3">
					Due Date
				</Typography.Heading>
			</div>
			{data.map((todo) => (
				<TodoCard
					key={todo.id}
					id={todo.id}
					title={todo.title}
					description={todo.description}
					status={todo.status}
					dueDate={todo.dueDate}
					handleDelete={deleteField}
					handleUpdate={updateField}
				/>
			))}
		</div>
	);
};

export default Todos;
