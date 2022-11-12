import { CSSProperties } from "react";

export const HousePrice: React.FC<{ price: string; style?: CSSProperties }> = ({
  price,
  style,
}) => {
  return (
    <span style={{ ...{ color: "#fff" }, ...(style || {}) }}>CHF {price}</span>
  );
};
