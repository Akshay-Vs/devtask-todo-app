/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import "./ImageUploader.scss";

interface IImageUploaderProps {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  image: string;
}

const ImageUploader = ({ setImage, image }: IImageUploaderProps) => {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        setImage(imageDataUrl);
        localStorage.setItem("image", imageDataUrl);
      };
      reader.readAsDataURL(file);
    },
    [setImage]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", "webp"],
    },
  });

  return (
    <div className="relative">
      <img
        src={image}
        className="mx-8 w-[76px] h-[76px] object-cover object-center rounded-full"
      />
      <div {...getRootProps()} className="absolute bottom-0 right-6">
        <input {...getInputProps()} />
        <FontAwesomeIcon
          icon={faCamera}
          size="6x"
          className="text-sm cursor-pointer bg-primary text-white p-2 rounded-full"
        />
      </div>
    </div>
  );
};

export default ImageUploader;
