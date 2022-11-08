import { getListing, getListings } from "../../../mock/listingApi";
import { validateListing } from "../../../mock/validateListing";

export async function generateStaticParams() {
  const listings = await getListings();
  return listings.map((listing) => ({
    id: listing.Id.toString(),
  }));
}

export default async function ListingPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const listing = await getListing(Number.parseInt(id));

  return listing ? (
    <>
      <p>{listing.Id}</p>
    </>
  ) : (
    <>
      <p>Not found</p>
    </>
  );
}
