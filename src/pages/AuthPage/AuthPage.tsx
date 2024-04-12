import Button from "../../components/Button";
import Typography from "../../components/Typography";

const AuthPage = () => {
	const createAccountAction = () => (location.href = "/register");
	const registerAccountAction = () => (location.href = "/login");

	return (
		<main className="h-screen flex justify-end items-center flex-col sm:justify-center">
			<div className="mb-14 w-80 flex flex-col items-start">
				<div className="mb-8">
					<Typography>
						<Typography.Heading variant="h1">
							Welcome to To Do App
						</Typography.Heading>
						<Typography.SubHeading>
							Authenticate to access your To-Do App{" "}
						</Typography.SubHeading>
					</Typography>
				</div>

				<Button clickAction={createAccountAction}>
					<Button.Text>Create Account</Button.Text>
				</Button>

				<Button clickAction={registerAccountAction} variant="secondary">
					<Button.Text>Already Registered? Login</Button.Text>
				</Button>
			</div>
		</main>
	);
};

export default AuthPage;
