import { useEffect } from "react";
import { isAuthenticated } from "../../utils/isAuthenticated";
import CurrentUser from "../../components/CurrentUser";
import NavBar from "../../components/NavBar";
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
			<div className="mx-8 mt-3">
				<Button clickAction={handleLogout}>
					<Button.Text>LogOut</Button.Text>
				</Button>
			</div>
		</main>
	);
};

export default AccountPage;
