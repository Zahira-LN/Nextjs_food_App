"use client";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ImagePicker({name}) {
  const [pickImage, setPickImage] = useState(null);
  const inputRef = useRef(null);

  const handlePickImage = () => {
    inputRef.current.click();
  };

  const handlePickImages = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    
    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <>
      <label></label>
      {pickImage ? (
        <Image src={pickImage} alt="Selected Image" width={100} height={100} className="rounded my-3"/>
      ) : (
        <p>No Image Selected</p>
      )}
      <input
        type="file"
        accept="image/png, image/jpeg"
        className="hidden"
        ref={inputRef}
        onChange={handlePickImages}
        name={name}
      />
      <Button
        className="bg-orange-900 text-white hover:bg-orange-950"
        type="button"
        onClick={handlePickImage}
      >
        Pick An Image
      </Button>
    </>
  );
}
