import { useEffect, useState } from "react";
import userImage from "../../assets/images/defaultUser.png";
import Typography from "../Typography";
import ImageUploader from "./ImageUploader/ImageUploader";

interface ICurrentUserProps {
	style?: string;
}

const CurrentUser = ({ style }: ICurrentUserProps) => {
	const [user, setUser] = useState<{
		name: string | undefined;
		email: string | undefined;
		image?: string | undefined;
	}>();
	const [image, setImage] = useState(userImage);

	useEffect(() => {
		const name = localStorage.getItem("userName");
		const email = localStorage.getItem("email");
		const image = localStorage.getItem("image");

		setUser({
			name: name || undefined,
			email: email || undefined,
		});

		setImage(image || userImage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={`flex items-center ${style}`}>
			<ImageUploader image={image} setImage={setImage} />
			<div>
				<Typography>
					<Typography.Heading variant="h3" style="m-0 mt-2 mb-1">
						{user?.name !== undefined ? user.name : "User Not Logged In"}
					</Typography.Heading>
					<Typography.Heading variant="h4">
						{user?.email !== undefined ? user.email : "User Not Logged In"}
					</Typography.Heading>
				</Typography>
			</div>
		</div>
	);
};

export default CurrentUser;
