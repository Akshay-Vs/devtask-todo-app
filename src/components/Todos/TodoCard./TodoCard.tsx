import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "../../Typography";
import {
	IconDefinition,
	faCircleCheck,
	faClockRotateLeft,
	faCircleXmark,
	faTrash,
	faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { todoType } from "../../../types/todo.type";

interface ITodoCardProps {
	title: string;
	description: string;
	status: string;
	dueDate: string;
	id: string;
	handleDelete: (data: string) => void;
	handleUpdate: (data: todoType) => void;
}

const TodoCard = ({
	title,
	description,
	status,
	dueDate,
	id,
	handleDelete,
	handleUpdate,
}: ITodoCardProps) => {
	const [currentStatus, setCurrentStatus] = useState<string>(status);
	const [currentStatusColor, setCurrentStatusColor] = useState<
		string | undefined
	>();
	const [currentStatusIcon, setCurrentStatusIcon] =
		useState<IconDefinition>(faClock);

	useEffect(() => {
		if (status === "Completed") {
			setCurrentStatusColor("bg-green-200");
			setCurrentStatusIcon(faCircleCheck);
		}
		if (status === "Not started") {
			setCurrentStatusColor("bg-blue-200");
			setCurrentStatusIcon(faCircleXmark);
		}
		if (status === "In progress") {
			setCurrentStatusColor("bg-yellow-200");
			setCurrentStatusIcon(faClock);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		handleUpdate({
			id: id,
			title: title,
			description: description,
			status: currentStatus,
			dueDate: dueDate,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentStatus]);

	const toggleStatus = () => {
		if (currentStatus === "Completed") {
			setCurrentStatus("Not started");
			setCurrentStatusColor("bg-blue-200");
			setCurrentStatusIcon(faCircleXmark);
		}

		if (currentStatus === "Not started") {
			setCurrentStatus("In progress");
			setCurrentStatusColor("bg-yellow-200");
			setCurrentStatusIcon(faClock);
		}

		if (currentStatus === "In progress") {
			setCurrentStatus("Completed");
			setCurrentStatusColor("bg-green-200");
			setCurrentStatusIcon(faCircleCheck);
		}
	};

	return (
		<div className="w-full h-24 flex justify-center items-center mt-5">
			<div className={`w-2 h-full rounded-xl  ${currentStatusColor}`} />

			{/* Title */}
			<Typography style="bg-slate-200 rounded-xl h-full  w-[32%] mx-2 flex justify-center items-start">
				<Typography.Heading variant="h1" style="opacity-80 mx-5">
					{title}
				</Typography.Heading>
			</Typography>

			{/* Description */}
			<Typography style="bg-slate-200 rounded-xl h-full w-[32%] mx-2 flex justify-center items-start">
				<Typography.Paragraph style="opacity-80 mx-5 p-2 text-ellipsis overflow-hidden flex">
					{description}
				</Typography.Paragraph>
			</Typography>

			{/* Status */}
			<div
				onClick={toggleStatus}
				className="h-full mx-2 cursor-pointer select-none"
			>
				<Typography
					style={`rounded-xl w-44  h-full flex justify-center items-center ${currentStatusColor}`}
				>
					<Typography.Heading
						variant="h3"
						style="opacity-80 mx-5 flex justify-center items-center gap-2"
					>
						<FontAwesomeIcon icon={currentStatusIcon} /> {currentStatus}
					</Typography.Heading>
				</Typography>
			</div>

			{/* Due Date */}
			<Typography style="bg-slate-200 rounded-xl h-full mx-2 flex justify-center items-center">
				<Typography.Heading
					variant="h3"
					style="opacity-80 mx-5 flex justify-center items-center gap-2"
				>
					<FontAwesomeIcon icon={faClockRotateLeft} /> {dueDate}
				</Typography.Heading>
			</Typography>

			{/* Delete button */}
			<div
				className="text-white rounded-xl bg-red-400 h-full w-20 mx-2 flex justify-center items-center cursor-pointer"
				onClick={() => handleDelete(id)}
			>
				<FontAwesomeIcon icon={faTrash} />
			</div>
		</div>
	);
};

export default TodoCard;
