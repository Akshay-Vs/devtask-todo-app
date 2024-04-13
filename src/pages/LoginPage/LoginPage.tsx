import { useState } from "react";
import TakeInput from "../../components/Input/Input";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
import { loginSchema } from "../../validation/loginValidation";

const LoginPage = () => {
	// This component represents a login form with validation
	// It sets local storage after successful login
	const [credentials, setCredentials] = useState({
		email: "test@example.com",
		password: "Password123",
	});
	const [error, setError] = useState();
	const [buttonState, setButtonState] = useState<
		"enabled" | "disabled" | "loading"
	>("enabled");

	const handleCredentialsChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = event.target;
		setCredentials((prevCredentials) => ({
			...prevCredentials,
			[name]: value,
		}));

		try {
			await loginSchema.validate(credentials, { abortEarly: false });
			setError(undefined);
			setButtonState("enabled");
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.errors[0]);
			setButtonState("disabled");
		}
	};
	const handleCredentialsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (buttonState === "enabled") {
			setButtonState("loading");
			localStorage.setItem("isAuthenticated", "true");
			localStorage.setItem("email", credentials.email); //! Store credentials in localStorage for testing purposes
			location.href = "/";
		}
	};

	return (
		<main className="flex flex-col items-center justify-center h-screen w-screen pt-16">
			<div className="flex flex-col">
				<Typography>
					<Typography.Heading variant="h1">
						Welcome to To Do App
					</Typography.Heading>
					<Typography.SubHeading>
						Enter Email address and password to continue
					</Typography.SubHeading>
				</Typography>

				<form className="mt-5" onSubmit={handleCredentialsSubmit}>
					<TakeInput>
						<TakeInput.TextInput
							props={{
								placeholder: "Enter Email Address",
								type: "email",
								autoComplete: "email",
								autoFocus: true,
								required: true,
								onChange: handleCredentialsChange,
								value: credentials?.email,
								name: "email",
							}}
						>
							Email Address
						</TakeInput.TextInput>
					</TakeInput>

					<TakeInput>
						<TakeInput.TextInput
							props={{
								placeholder: "Enter Password",
								type: "password",
								autoComplete: "current-password",
								required: true,
								onChange: handleCredentialsChange,
								value: credentials?.password,
								name: "password",
							}}
						>
							Password
						</TakeInput.TextInput>
					</TakeInput>

					{error && (
						<div className="w-80 mb-5 px-1 text-red-500 hidden">
							<Typography.Paragraph>Invalid Password</Typography.Paragraph>
						</div>
					)}

					<Button
						props={{
							type: "submit",
						}}
						variant={buttonState === "disabled" ? "disabled" : "primary"}
					>
						<Button.Text>
							{buttonState === "loading" ? "Please wait..." : "Login"}
						</Button.Text>
					</Button>

					<Typography>
						<a
							className="w-full items-end justify-end flex mt-2 text-blue-500"
							href="/register"
						>
							<Typography.Paragraph style="text-sm">
								Create an account
							</Typography.Paragraph>
						</a>
					</Typography>
				</form>
			</div>
		</main>
	);
};

export default LoginPage;
