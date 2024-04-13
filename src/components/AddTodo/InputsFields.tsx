import { useState } from "react";
import Button from "../Button";
import TakeInput from "../Input/Input";
import Typography from "../Typography";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useUID } from "react-uid";

const InputsFields = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [dueDate, setDueDate] = useState("");

	const { addField } = useLocalStorage();
	const uid = useUID();

	const handleSave = () => {
		addField({
			title,
			description,
			dueDate,
			status: "Not started",
			id: uid,
		});
		setTitle("");
		setDescription("");
		setDueDate("");
		location.reload();
	};

	return (
		<div className="z-50 absolute top-0  w-full h-full flex justify-center items-center">
			<div className="w-[50%] h-[60%] bg-slate-100 rounded-xl p-5 flex justify-center items-center flex-col">
				<Typography style="flex text-center">
					<Typography.Heading variant="h1" style="opacity-80 mx-5">
						Add To-Do
					</Typography.Heading>
				</Typography>
				<TakeInput>
					<TakeInput.TextInput
						props={{
							value: title,
							onChange: (e) => setTitle(e.target.value),
						}}
					>
						Title
					</TakeInput.TextInput>
					<TakeInput.TextBoxInput
						props={{
							value: description,
							onChange: (e) => setDescription(e.target.value),
						}}
					>
						Description
					</TakeInput.TextBoxInput>
					<TakeInput.DateInput
						props={{
							value: dueDate,
							onChange: (e) => setDueDate(e.target.value),
						}}
					>
						Due Date
					</TakeInput.DateInput>
					<Button
						variant={
							title.length > 0 && description.length > 0 && dueDate.length > 0
								? "primary"
								: "disabled"
						}
						clickAction={handleSave}
					>
						Add Task
					</Button>
				</TakeInput>
			</div>
		</div>
	);
};

export default InputsFields;
