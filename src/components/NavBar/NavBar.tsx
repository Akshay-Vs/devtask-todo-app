import React, { ReactNode } from "react";
import Typography from "../Typography";
import UserProfile from "../CurrentUser/UserProfile";
import { Link } from "react-router-dom";

interface INavProps {
	children?: ReactNode | JSX.Element | undefined;
	style?: string;
	props?: React.HTMLAttributes<HTMLDivElement>;
	title?: string;
}
const NavBar = ({ title, props, children, style }: INavProps) => {
	return (
		<nav
			className={`h-16 px-8 flex justify-between items-center bg-white ${style}`}
			{...props}
		>
			<Link to={"/"}>
				<Typography>
					<Typography.Heading variant="h2" style="opacity-80">
						{title}
					</Typography.Heading>
				</Typography>
			</Link>
			{children}

			<UserProfile />
		</nav>
	);
};

export default NavBar;
