import { useEffect } from "react";
import { isAuthenticated } from "../../utils/isAuthenticated";
import NavBar from "../../components/NavBar";

const UserProfile = () => {
	useEffect(() => {
		isAuthenticated() ? "" : (location.href = "/welcome");
	}, []);
	return (
		<main>
			<NavBar title="My List" />
		</main>
	);
};

export default UserProfile;
