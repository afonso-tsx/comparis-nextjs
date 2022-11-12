import Image from "next/image";
import { CSSProperties } from "react";

export const HouseImage: React.FC<{
  number: string;
  size: number;
  style?: CSSProperties;
}> = ({ number, size, style }) => {
  return (
    <Image
      style={style}
      width={size}
      height={size}
      src={`/../public/images/living_${number}.jpg`}
      alt=""
    />
  );
};
