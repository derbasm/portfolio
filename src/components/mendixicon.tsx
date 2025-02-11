import React from "react";
import Image from "next/image";

interface ImageIconProps {
  width?: number;
  height?: number;
  alt?: string;
}

const MendixIcon: React.FC<ImageIconProps> = ({ width = 20, height = 20, alt = "Mendix Icon" }) => (
  <Image src="/icons/mendix.png" alt={alt} width={width} height={height} />
);

export default MendixIcon;
