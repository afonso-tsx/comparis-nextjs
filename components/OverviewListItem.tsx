import Link from "next/link";
import { Listing } from "../types/Listing";
import styles from "../app/page.module.css";
import { HouseImage } from "./HouseImage";
import { HousePrice } from "./HousePrice";

export const OverviewListItem: React.FC<{ listing: Listing }> = ({
  listing,
}) => {
  const price = (Math.random() * (3000 - 1200) + 1200)
    .toFixed(0)
    .toLocaleString();

  const houseNumber = Math.max(Math.random() * 20, 1).toFixed(0);

  return (
    <Link
      className={styles.card}
      href={`/listing/${listing.Id}?price=${price}&houseNumber=${houseNumber}`}
      style={{
        display: "flex",
        flexDirection: "row",
        width: "40rem",
        border: "1px solid #ccc",
      }}
    >
      <HouseImage number={houseNumber} size={150} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginLeft: "1rem",
          textAlign: "right",
          padding: "0.5rem",
        }}
      >
        <h2 style={{ marginTop: 0 }}>{listing.Title}</h2>
        <HousePrice price={price} />
      </div>
    </Link>
  );
};
