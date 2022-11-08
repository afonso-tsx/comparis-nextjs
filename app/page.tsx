import Image from "next/image";
import Link from "next/link";
import { getListings } from "../mock/listingApi";
import styles from "./page.module.css";

export default async function Home() {
  const listings = await getListings();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        <div className={styles.grid}>
          {listings.map((listing) => {
            return (
              <Link
                key={listing.Id}
                href={`/listing/${listing.Id}`}
                className={styles.card}
              >
                <h2>{listing.Title}</h2>
                <p dangerouslySetInnerHTML={{ __html: listing.Description }} />
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
