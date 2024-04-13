import { useEffect, useState } from "react";
import userImage from "../../assets/images/defaultUser.png";
import { Link } from "react-router-dom";

const UserProfile = () => {
	const [avatar, setAvatar] = useState<string | undefined>();

	useEffect(() => {
		const image = localStorage.getItem("image");
		setAvatar(image || userImage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Link to="/account" className="cursor-pointer">
			<img
				src={avatar}
				className="mx-8 w-[42px] h-[42px] object-cover object-center rounded-full"
			/>
		</Link>
	);
};

export default UserProfile;
