import { useEffect, useState } from "react";
import userImage from "../../assets/images/defaultUser.png";
import Typography from "../Typography";
import ImageUploader from "./ImageUploader/ImageUploader";

interface ICurrentUserProps {
  style?: string;
}

const CurrentUser = ({ style }: ICurrentUserProps) => {
  const defaultData = {
    name: "Marry Joe",
    email: "Marryjoe@gmail.com",
  };

  const [user, setUser] = useState(defaultData);
  const [image, setImage] = useState(userImage);

  useEffect(() => {
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("email");
    const image = localStorage.getItem("image");

    setUser({
      name: name || defaultData.name,
      email: email || defaultData.email,
    });

    setImage(image || userImage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`flex ${style}`}>
      <ImageUploader image={image} setImage={setImage} />
      <div>
        <Typography>
          <Typography.Heading variant="h3" style="m-0 mt-2 mb-1">
            {user.name}
          </Typography.Heading>
          <Typography.Heading variant="h4">{user.email}</Typography.Heading>
        </Typography>
      </div>
    </div>
  );
};

export default CurrentUser;
