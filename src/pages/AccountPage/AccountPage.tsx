import { useEffect } from "react";
import { isAuthenticated } from "../../utils/isAuthenticated";
import CurrentUser from "../../components/CurrentUser";
import NavBar from "../../components/NavBar";
import Typography from "../../components/Typography";
import Button from "../../components/Button";

const AccountPage = () => {
	useEffect(() => {
		isAuthenticated() ? "" : (location.href = "/welcome");
	}, []);

	const handleLogout = () => {
		localStorage.clear();
		location.reload();
	};
	return (
		<main>
			<NavBar title="Account Settings" />
			<CurrentUser style="mt-5" />
			<Typography>
				<Typography.Heading
					variant="h4"
					style="max-w-[400px] leading-5 opacity-80 mx-8"
				>
					Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
					Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
					Sed Diam
				</Typography.Heading>
			</Typography>

			<div className="mx-8">
				<Button clickAction={handleLogout}>
					<Button.Text>LogOut</Button.Text>
				</Button>
			</div>
		</main>
	);
};

export default AccountPage;
