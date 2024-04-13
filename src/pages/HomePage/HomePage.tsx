import { useEffect } from "react";
import { isAuthenticated } from "../../utils/isAuthenticated";
import NavBar from "../../components/NavBar";
import Todos from "../../components/Todos/Todos";
import AddTodo from "../../components/AddTodo";

const UserProfile = () => {
	useEffect(() => {
		isAuthenticated() ? "" : (location.href = "/welcome");
	}, []);

	return (
		<main>
			<NavBar title="My To Do List" />
			<Todos />
			<AddTodo />
		</main>
	);
};

export default UserProfile;
