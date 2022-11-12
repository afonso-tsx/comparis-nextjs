import { OverviewListItem } from "../components/OverviewListItem";
import { getListings } from "../mock/listingApi";
import styles from "./page.module.css";

export default async function Home() {
  const listings = await getListings();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>afonso-comparis-fe</h1>

        <div className={styles.grid}>
          {listings.map((listing) => {
            return <OverviewListItem key={listing.Id} listing={listing} />;
          })}
        </div>
      </main>
    </div>
  );
}
