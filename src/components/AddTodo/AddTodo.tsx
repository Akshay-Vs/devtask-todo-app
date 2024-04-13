import Typography from "../Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import InputsFields from "./InputsFields";

const AddTodo = () => {
	const [showInputs, setShowInputs] = useState(false);

	return (
		<div>
			{/* Add new Button */}
			<div
				className="bg-blue-400 w-44 flex justify-center items-center rounded-2xl p-3 absolute 
			bottom-10 right-10 cursor-pointer hover:bg-blue-500 transition-all duration-300 select-none"
				onClick={() => setShowInputs(true)}
			>
				<Typography style="flex">
					<Typography.Heading variant="h2" style="font-[400] mr-2">
						Add New
					</Typography.Heading>
				</Typography>
				<FontAwesomeIcon icon={faPlus} size="xl" />
			</div>

			{/* Overlay */}
			{showInputs ? (
				<div
					className="absolute z-10 w-full h-full bg-[#b3b3b33e] top-0"
					onClick={() => setShowInputs(false)}
				/>
			) : null}

			{/* Inputs */}
			{showInputs ? <InputsFields /> : null}
		</div>
	);
};

export default AddTodo;
