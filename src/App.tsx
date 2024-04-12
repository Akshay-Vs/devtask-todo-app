import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	AccountPage,
	AuthPage,
	HomePage,
	LoginPage,
	RegisterPage,
} from "./pages";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/welcome" element={<AuthPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/account" element={<AccountPage />} />
				<Route path="*" element={<h1>404 Page Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
